<?php
/**
 * Plugin Name: TOGETHER Headless Endpoints
 * Description: REST endpoints for the static TOGETHER frontend: contact leads, blog cache sync, sitemap and optional IndexNow.
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

const TOGETHER_REST_NAMESPACE = 'together/v1';
const TOGETHER_CONTACT_ROUTE = '/together/v1/contact';
const TOGETHER_BLOG_CACHE_CRON_HOOK = 'together_daily_blog_cache_sync';
const TOGETHER_CONTACT_POST_TYPE = 'together_contact';
const TOGETHER_DEFAULT_CONTACT_RECIPIENTS = 'contato@togetherprivacy.com,carlos.leite@noirdigital.com.br';
const TOGETHER_DEFAULT_MAIL_FROM_EMAIL = 'contato@togetherprivacy.tech';
const TOGETHER_DEFAULT_MAIL_FROM_NAME = 'TOGETHER Privacy & Tech';
const TOGETHER_DEFAULT_SMTP_HOST = 'smtp.hostinger.com';
const TOGETHER_DEFAULT_SMTP_USERNAME = 'contato@togetherprivacy.tech';
const TOGETHER_DEFAULT_SMTP_PORT = 587;
const TOGETHER_DEFAULT_SMTP_SECURE = 'tls';
const TOGETHER_GITHUB_DEPLOY_EVENT = 'wordpress_content_changed';
const TOGETHER_GITHUB_DEPLOY_TRANSIENT = 'together_github_deploy_recently_triggered';
const TOGETHER_GITHUB_DEPLOY_DEBOUNCE_SECONDS = 120;

add_action('init', 'together_register_contact_post_type');
add_action('init', 'together_schedule_blog_cache_sync');
add_action('rest_api_init', 'together_register_rest_routes');
add_action(TOGETHER_BLOG_CACHE_CRON_HOOK, 'together_sync_blog_cache_files');
add_action('add_meta_boxes_' . TOGETHER_CONTACT_POST_TYPE, 'together_add_contact_meta_box');
add_action('phpmailer_init', 'together_configure_smtp_if_available');
add_action('transition_post_status', 'together_trigger_static_site_deploy_on_post_change', 10, 3);

$GLOBALS['together_last_mail_error'] = '';
add_action(
    'wp_mail_failed',
    function (WP_Error $error): void {
        $GLOBALS['together_last_mail_error'] = $error->get_error_message();
    }
);

function together_register_contact_post_type(): void
{
    register_post_type(TOGETHER_CONTACT_POST_TYPE, [
        'labels' => [
            'name' => 'Contatos do site',
            'singular_name' => 'Contato do site',
            'menu_name' => 'Contatos do site',
            'add_new_item' => 'Adicionar contato',
            'edit_item' => 'Ver contato',
        ],
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_icon' => 'dashicons-email-alt2',
        'supports' => ['title'],
        'capability_type' => 'post',
        'show_in_rest' => true,
    ]);
}

function together_add_contact_meta_box(): void
{
    add_meta_box(
        'together_contact_details',
        'Dados do contato',
        'together_render_contact_meta_box',
        TOGETHER_CONTACT_POST_TYPE,
        'normal',
        'high'
    );
}

function together_render_contact_meta_box(WP_Post $post): void
{
    $fields = [
        'Nome' => trim((string) get_post_meta($post->ID, '_together_first_name', true) . ' ' . (string) get_post_meta($post->ID, '_together_last_name', true)),
        'E-mail' => get_post_meta($post->ID, '_together_email', true),
        'Empresa' => get_post_meta($post->ID, '_together_company', true),
        'Telefone' => get_post_meta($post->ID, '_together_phone', true),
        'Origem' => get_post_meta($post->ID, '_together_source', true),
        'Pagina' => get_post_meta($post->ID, '_together_page_url', true),
        'E-mail enviado' => get_post_meta($post->ID, '_together_mail_sent', true) === 'yes' ? 'Sim' : 'Nao',
        'Destinatarios' => get_post_meta($post->ID, '_together_mail_recipients', true),
        'Enviado em' => get_post_meta($post->ID, '_together_mail_sent_at', true),
        'Erro de e-mail' => get_post_meta($post->ID, '_together_mail_error', true),
    ];

    echo '<div style="display:grid;gap:12px;max-width:900px;">';

    foreach ($fields as $label => $value) {
        $displayValue = $value === '' ? '-' : (string) $value;
        echo '<div style="display:grid;grid-template-columns:160px 1fr;gap:12px;align-items:start;">';
        echo '<strong>' . esc_html($label) . '</strong>';
        echo '<span style="white-space:pre-wrap;">' . esc_html($displayValue) . '</span>';
        echo '</div>';
    }

    echo '<div style="margin-top:8px;">';
    echo '<strong>Mensagem</strong>';
    echo '<div style="margin-top:8px;padding:14px;border:1px solid #ccd0d4;background:#fff;white-space:pre-wrap;">' . esc_html($post->post_content) . '</div>';
    echo '</div>';
    echo '</div>';
}

function together_schedule_blog_cache_sync(): void
{
    if (!wp_next_scheduled(TOGETHER_BLOG_CACHE_CRON_HOOK)) {
        wp_schedule_event(time() + HOUR_IN_SECONDS, 'daily', TOGETHER_BLOG_CACHE_CRON_HOOK);
    }
}

function together_register_rest_routes(): void
{
    register_rest_route(TOGETHER_REST_NAMESPACE, '/contact', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'together_handle_contact_request',
        'permission_callback' => '__return_true',
    ]);

    register_rest_route(TOGETHER_REST_NAMESPACE, '/sync-blog-cache', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'together_handle_blog_cache_sync_request',
        'permission_callback' => static function () {
            return current_user_can('edit_posts');
        },
    ]);
}

add_filter('rest_pre_serve_request', function ($served, $result, $request) {
    if (strpos($request->get_route(), '/' . TOGETHER_REST_NAMESPACE . '/') !== 0) {
        return $served;
    }

    $origin = get_http_origin();
    if ($origin && together_is_allowed_origin($origin)) {
        header('Access-Control-Allow-Origin: ' . esc_url_raw($origin));
        header('Vary: Origin', false);
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Accept, Authorization');
    }

    return $served;
}, 10, 3);

function together_is_allowed_origin(string $origin): bool
{
    $allowed = [
        home_url(),
        site_url(),
        'https://togetherprivacy.tech',
        'https://www.togetherprivacy.tech',
        'http://localhost:3000',
        'http://localhost:3001',
    ];

    if (defined('TOGETHER_ALLOWED_ORIGINS')) {
        $allowed = array_merge($allowed, array_map('trim', explode(',', TOGETHER_ALLOWED_ORIGINS)));
    }

    $originHost = wp_parse_url($origin, PHP_URL_HOST);

    foreach ($allowed as $allowedOrigin) {
        $allowedHost = wp_parse_url($allowedOrigin, PHP_URL_HOST);
        if ($allowedHost && $originHost && strtolower($allowedHost) === strtolower($originHost)) {
            return true;
        }
    }

    return false;
}

function together_handle_contact_request(WP_REST_Request $request)
{
    $payload = $request->get_json_params();
    if (!is_array($payload)) {
        $payload = [];
    }

    $honeypot = sanitize_text_field((string) ($payload['website'] ?? $payload['companyWebsite'] ?? ''));
    if ($honeypot !== '') {
        return new WP_REST_Response(
            [
                'ok' => true,
                'message' => 'Mensagem enviada com sucesso.',
            ],
            200
        );
    }

    $ip = together_get_client_ip();
    if (together_contact_is_rate_limited($ip)) {
        return new WP_REST_Response(
            [
                'ok' => false,
                'message' => 'Muitas tentativas em pouco tempo. Tente novamente em alguns minutos.',
            ],
            429
        );
    }

    $firstName = sanitize_text_field((string) ($payload['firstName'] ?? ''));
    $lastName = sanitize_text_field((string) ($payload['lastName'] ?? ''));
    $email = sanitize_email((string) ($payload['email'] ?? ''));
    $company = sanitize_text_field((string) ($payload['company'] ?? ''));
    $phone = sanitize_text_field((string) ($payload['phone'] ?? ''));
    $message = sanitize_textarea_field((string) ($payload['message'] ?? ''));
    $pageUrl = esc_url_raw((string) ($payload['pageUrl'] ?? ''));
    $source = sanitize_text_field((string) ($payload['source'] ?? 'Site TOGETHER'));

    if ($firstName === '' || $lastName === '' || $company === '' || !is_email($email)) {
        return new WP_REST_Response(
            [
                'ok' => false,
                'message' => 'Preencha nome, sobrenome, e-mail corporativo e empresa.',
            ],
            400
        );
    }

    $normalizedPhone = together_normalize_contact_phone($phone);
    if ($phone !== '' && $normalizedPhone === '') {
        return new WP_REST_Response(
            [
                'ok' => false,
                'message' => 'Informe um telefone valido com DDD. Ex: (11) 99999-9999.',
            ],
            400
        );
    }
    $phone = $normalizedPhone;

    together_increment_contact_rate_limit($ip);

    $title = sprintf('Novo contato - %s %s - %s - %s', $firstName, $lastName, $company, wp_date('d/m/Y H:i'));
    $postId = wp_insert_post([
        'post_type' => TOGETHER_CONTACT_POST_TYPE,
        'post_status' => 'private',
        'post_title' => $title,
        'post_content' => $message,
    ], true);

    if (is_wp_error($postId)) {
        return new WP_REST_Response(
            [
                'ok' => false,
                'message' => 'Nao foi possivel registrar sua mensagem. Tente novamente ou chame no WhatsApp.',
            ],
            500
        );
    }

    $postId = (int) $postId;
    update_post_meta($postId, '_together_first_name', $firstName);
    update_post_meta($postId, '_together_last_name', $lastName);
    update_post_meta($postId, '_together_email', $email);
    update_post_meta($postId, '_together_company', $company);
    update_post_meta($postId, '_together_phone', $phone);
    update_post_meta($postId, '_together_page_url', $pageUrl);
    update_post_meta($postId, '_together_source', $source);
    update_post_meta($postId, '_together_ip_hash', wp_hash($ip));
    update_post_meta($postId, '_together_user_agent', sanitize_text_field((string) ($_SERVER['HTTP_USER_AGENT'] ?? '')));
    update_post_meta($postId, '_together_submitted_at', current_time('mysql'));

    $mail = together_send_contact_email($postId, [
        'firstName' => $firstName,
        'lastName' => $lastName,
        'email' => $email,
        'company' => $company,
        'phone' => $phone,
        'message' => $message,
        'pageUrl' => $pageUrl,
        'source' => $source,
    ]);

    update_post_meta($postId, '_together_mail_sent', $mail['sent'] ? 'yes' : 'no');
    update_post_meta($postId, '_together_mail_recipients', implode(', ', $mail['recipients']));
    update_post_meta($postId, '_together_mail_sent_at', wp_date('d/m/Y H:i:s'));
    update_post_meta($postId, '_together_mail_error', $mail['error']);

    if (!$mail['sent']) {
        return new WP_REST_Response(
            [
                'ok' => false,
                'message' => 'Mensagem registrada no WordPress, mas o e-mail nao foi enviado. Chame no WhatsApp se for urgente.',
                'id' => $postId,
                'leadId' => $postId,
                'mailError' => $mail['error'],
            ],
            500
        );
    }

    return new WP_REST_Response(
        [
            'ok' => true,
            'id' => $postId,
            'leadId' => $postId,
            'message' => 'Mensagem recebida com sucesso. Nossa equipe entrara em contato em breve.',
        ],
        200
    );
}

function together_get_request_ip(): string
{
    $headers = [
        'HTTP_CF_CONNECTING_IP',
        'HTTP_X_FORWARDED_FOR',
        'REMOTE_ADDR',
    ];

    foreach ($headers as $header) {
        if (empty($_SERVER[$header])) {
            continue;
        }

        $value = sanitize_text_field(wp_unslash($_SERVER[$header]));
        $ip = trim(explode(',', $value)[0]);

        if (filter_var($ip, FILTER_VALIDATE_IP)) {
            return $ip;
        }
    }

    return 'unknown';
}

function together_get_client_ip(): string
{
    return together_get_request_ip();
}

function together_contact_rate_limit_key(string $ip): string
{
    return 'together_contact_' . md5($ip);
}

function together_contact_is_rate_limited(string $ip): bool
{
    $count = (int) get_transient(together_contact_rate_limit_key($ip));
    return $count >= 5;
}

function together_increment_contact_rate_limit(string $ip): void
{
    $key = together_contact_rate_limit_key($ip);
    $count = (int) get_transient($key);
    set_transient($key, $count + 1, 15 * MINUTE_IN_SECONDS);
}

function together_normalize_contact_phone(string $phone): string
{
    $digits = preg_replace('/\D+/', '', $phone);
    if (!is_string($digits) || $digits === '') {
        return '';
    }

    if (strlen($digits) > 11 && substr($digits, 0, 2) === '55') {
        $digits = substr($digits, 2);
    }

    $length = strlen($digits);
    if ($length !== 10 && $length !== 11) {
        return '';
    }

    if (preg_match('/^(\d)\1+$/', $digits) === 1) {
        return '';
    }

    $areaCode = (int) substr($digits, 0, 2);
    if ($areaCode < 11 || $areaCode > 99) {
        return '';
    }

    $subscriber = substr($digits, 2);
    $subscriberLength = strlen($subscriber);
    if ($subscriberLength === 9 && substr($subscriber, 0, 1) !== '9') {
        return '';
    }
    if ($subscriberLength === 8 && preg_match('/^[2-5]/', $subscriber) !== 1) {
        return '';
    }

    return '+55' . $digits;
}

function together_get_contact_recipients(): array
{
    $recipients = [TOGETHER_DEFAULT_CONTACT_RECIPIENTS];
    if (defined('TOGETHER_CONTACT_RECIPIENTS')) {
        $configured = array_filter(array_map('trim', explode(',', TOGETHER_CONTACT_RECIPIENTS)));
        if ($configured) {
            $recipients = $configured;
        }
    }

    return array_values(
        array_unique(
            array_filter(
                array_map(static function ($email) {
                    return sanitize_email((string) $email);
                }, $recipients),
                static function ($email) {
                    return is_email($email);
                }
            )
        )
    );
}

function together_get_contact_mail_headers(string $replyName, string $replyEmail): array
{
    $fromEmail = defined('TOGETHER_MAIL_FROM_EMAIL')
        ? sanitize_email((string) TOGETHER_MAIL_FROM_EMAIL)
        : TOGETHER_DEFAULT_MAIL_FROM_EMAIL;
    $fromName = defined('TOGETHER_MAIL_FROM_NAME')
        ? sanitize_text_field((string) TOGETHER_MAIL_FROM_NAME)
        : TOGETHER_DEFAULT_MAIL_FROM_NAME;

    $headers = ['Content-Type: text/plain; charset=UTF-8'];

    if (is_email($fromEmail)) {
        $headers[] = sprintf('From: %s <%s>', $fromName, $fromEmail);
    }

    if (is_email($replyEmail)) {
        $headers[] = sprintf('Reply-To: %s <%s>', $replyName, $replyEmail);
    }

    return $headers;
}

function together_configure_smtp_if_available(PHPMailer\PHPMailer\PHPMailer $phpmailer): void
{
    $fromEmail = defined('TOGETHER_MAIL_FROM_EMAIL')
        ? sanitize_email((string) TOGETHER_MAIL_FROM_EMAIL)
        : TOGETHER_DEFAULT_MAIL_FROM_EMAIL;
    $fromName = defined('TOGETHER_MAIL_FROM_NAME')
        ? sanitize_text_field((string) TOGETHER_MAIL_FROM_NAME)
        : TOGETHER_DEFAULT_MAIL_FROM_NAME;

    if (is_email($fromEmail)) {
        $phpmailer->From = $fromEmail;
        $phpmailer->Sender = $fromEmail;
    }

    if ($fromName !== '') {
        $phpmailer->FromName = $fromName;
    }

    if (!defined('TOGETHER_SMTP_PASSWORD') || TOGETHER_SMTP_PASSWORD === '') {
        return;
    }

    $phpmailer->isSMTP();
    $phpmailer->Host = defined('TOGETHER_SMTP_HOST')
        ? (string) TOGETHER_SMTP_HOST
        : TOGETHER_DEFAULT_SMTP_HOST;
    $phpmailer->SMTPAuth = true;
    $phpmailer->Username = defined('TOGETHER_SMTP_USERNAME')
        ? (string) TOGETHER_SMTP_USERNAME
        : TOGETHER_DEFAULT_SMTP_USERNAME;
    $phpmailer->Password = (string) TOGETHER_SMTP_PASSWORD;
    $phpmailer->Port = defined('TOGETHER_SMTP_PORT') ? (int) TOGETHER_SMTP_PORT : TOGETHER_DEFAULT_SMTP_PORT;

    if (defined('TOGETHER_SMTP_SECURE') && TOGETHER_SMTP_SECURE !== '') {
        $phpmailer->SMTPSecure = (string) TOGETHER_SMTP_SECURE;
    } else {
        $phpmailer->SMTPSecure = TOGETHER_DEFAULT_SMTP_SECURE;
    }
}

function together_send_contact_email(int $postId, array $lead): array
{
    $GLOBALS['together_last_mail_error'] = '';
    $recipients = together_get_contact_recipients();
    $subject = sprintf('[TOGETHER] Novo contato do site: %s', $lead['company']);
    $body = implode("\n", [
        'Novo contato recebido pelo site TOGETHER.',
        '',
        'Nome: ' . $lead['firstName'] . ' ' . $lead['lastName'],
        'E-mail: ' . $lead['email'],
        'Empresa: ' . $lead['company'],
        'Telefone: ' . ($lead['phone'] ?: '-'),
        'Origem: ' . ($lead['source'] ?: 'Site TOGETHER'),
        'Pagina: ' . ($lead['pageUrl'] ?: '-'),
        '',
        'Mensagem:',
        $lead['message'] ?: '-',
        '',
        'Registro no WordPress: #' . $postId,
    ]);
    $headers = together_get_contact_mail_headers($lead['firstName'] . ' ' . $lead['lastName'], $lead['email']);

    $sent = wp_mail($recipients, $subject, $body, $headers);

    return [
        'sent' => $sent,
        'error' => (string) ($GLOBALS['together_last_mail_error'] ?? ''),
        'recipients' => $recipients,
    ];
}

function together_trigger_static_site_deploy_on_post_change(string $newStatus, string $oldStatus, WP_Post $post): void
{
    if (!together_github_deploy_is_configured()) {
        return;
    }

    if ($post->post_type !== 'post' || $newStatus !== 'publish') {
        return;
    }

    if (wp_is_post_revision($post->ID) || wp_is_post_autosave($post->ID)) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (get_transient(TOGETHER_GITHUB_DEPLOY_TRANSIENT)) {
        return;
    }

    set_transient(TOGETHER_GITHUB_DEPLOY_TRANSIENT, '1', TOGETHER_GITHUB_DEPLOY_DEBOUNCE_SECONDS);

    $result = together_dispatch_github_static_site_deploy($post, $newStatus, $oldStatus);
    if (is_wp_error($result)) {
        delete_transient(TOGETHER_GITHUB_DEPLOY_TRANSIENT);
        error_log('TOGETHER GitHub deploy dispatch failed: ' . $result->get_error_message());
    }
}

function together_github_deploy_is_configured(): bool
{
    if (defined('TOGETHER_GITHUB_DEPLOY_ENABLED') && TOGETHER_GITHUB_DEPLOY_ENABLED === false) {
        return false;
    }

    return defined('TOGETHER_GITHUB_DEPLOY_TOKEN') && trim((string) TOGETHER_GITHUB_DEPLOY_TOKEN) !== '';
}

function together_dispatch_github_static_site_deploy(WP_Post $post, string $newStatus, string $oldStatus)
{
    $owner = defined('TOGETHER_GITHUB_DEPLOY_OWNER')
        ? trim((string) TOGETHER_GITHUB_DEPLOY_OWNER)
        : 'carlosesl1';
    $repo = defined('TOGETHER_GITHUB_DEPLOY_REPO')
        ? trim((string) TOGETHER_GITHUB_DEPLOY_REPO)
        : 'sitetogether';

    if ($owner === '' || $repo === '') {
        return new WP_Error('github_deploy_repo_missing', 'Repositorio do GitHub nao configurado.');
    }

    $response = wp_remote_post(sprintf(
        'https://api.github.com/repos/%s/%s/dispatches',
        rawurlencode($owner),
        rawurlencode($repo)
    ), [
        'headers' => [
            'Accept' => 'application/vnd.github+json',
            'Authorization' => 'Bearer ' . trim((string) TOGETHER_GITHUB_DEPLOY_TOKEN),
            'Content-Type' => 'application/json',
            'User-Agent' => 'together-wordpress-deploy-webhook',
            'X-GitHub-Api-Version' => '2022-11-28',
        ],
        'body' => wp_json_encode([
            'event_type' => TOGETHER_GITHUB_DEPLOY_EVENT,
            'client_payload' => [
                'post_id' => $post->ID,
                'post_slug' => $post->post_name,
                'new_status' => $newStatus,
                'old_status' => $oldStatus,
                'changed_at' => gmdate('c'),
            ],
        ]),
        'timeout' => 10,
    ]);

    if (is_wp_error($response)) {
        return $response;
    }

    $status = (int) wp_remote_retrieve_response_code($response);
    if ($status < 200 || $status >= 300) {
        return new WP_Error(
            'github_deploy_dispatch_failed',
            'GitHub retornou status ' . $status . ' ao disparar o deploy.'
        );
    }

    return true;
}

function together_handle_blog_cache_sync_request()
{
    $result = together_sync_blog_cache_files();

    if (is_wp_error($result)) {
        return $result;
    }

    return rest_ensure_response($result);
}

function together_sync_blog_cache_files()
{
    $posts = together_fetch_all_wp_posts();
    if (is_wp_error($posts)) {
        return $posts;
    }

    $cacheDir = together_get_frontend_cache_dir();
    if (!wp_mkdir_p($cacheDir)) {
        return new WP_Error('cache_dir_failed', 'Nao foi possivel criar a pasta de cache.', ['status' => 500]);
    }

    $postsPath = trailingslashit($cacheDir) . 'blog-posts.json';
    $syncPath = trailingslashit($cacheDir) . 'blog-sync.json';
    $sitemapPath = trailingslashit(dirname($cacheDir)) . 'sitemap.xml';

    file_put_contents($postsPath, wp_json_encode($posts, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    file_put_contents($syncPath, wp_json_encode([
        'ok' => true,
        'source' => rest_url('wp/v2'),
        'generatedAt' => gmdate('c'),
        'count' => count($posts),
        'slugs' => array_map(static function ($post) {
            return $post['slug'] ?? '';
        }, $posts),
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    file_put_contents($sitemapPath, together_build_sitemap($posts));

    together_submit_indexnow($posts);

    return [
        'ok' => true,
        'count' => count($posts),
        'cacheDir' => $cacheDir,
    ];
}

function together_fetch_all_wp_posts()
{
    $posts = [];
    $page = 1;
    $totalPages = 1;

    do {
        $url = add_query_arg([
            '_embed' => 'true',
            'per_page' => 100,
            'status' => 'publish',
            'orderby' => 'date',
            'order' => 'desc',
            'page' => $page,
        ], rest_url('wp/v2/posts'));

        $response = wp_remote_get($url, ['timeout' => 20]);
        if (is_wp_error($response)) {
            return $response;
        }

        $status = wp_remote_retrieve_response_code($response);
        if ($status < 200 || $status >= 300) {
            return new WP_Error('wp_posts_fetch_failed', 'Falha ao buscar posts do WordPress.', ['status' => $status]);
        }

        $body = json_decode(wp_remote_retrieve_body($response), true);
        if (!is_array($body)) {
            return new WP_Error('wp_posts_invalid_json', 'Resposta invalida da API de posts.', ['status' => 500]);
        }

        $posts = array_merge($posts, $body);
        $totalPages = (int) wp_remote_retrieve_header($response, 'x-wp-totalpages') ?: 1;
        $page++;
    } while ($page <= $totalPages);

    return $posts;
}

function together_get_frontend_cache_dir(): string
{
    if (defined('TOGETHER_FRONTEND_CACHE_DIR')) {
        return rtrim(TOGETHER_FRONTEND_CACHE_DIR, '/\\') . DIRECTORY_SEPARATOR . 'data';
    }

    $rootData = trailingslashit(ABSPATH) . 'data';
    if (is_dir($rootData) || file_exists(trailingslashit(ABSPATH) . 'index.html')) {
        return $rootData;
    }

    $legacyNovahome = trailingslashit(ABSPATH) . 'novahome';
    if (is_dir($legacyNovahome) || file_exists(trailingslashit($legacyNovahome) . 'index.html')) {
        return trailingslashit($legacyNovahome) . 'data';
    }

    return trailingslashit(ABSPATH) . 'data';
}

function together_build_sitemap(array $posts): string
{
    $siteUrl = defined('TOGETHER_FRONTEND_SITE_URL')
        ? rtrim(TOGETHER_FRONTEND_SITE_URL, '/')
        : rtrim(home_url('/'), '/');

    $routes = [
        '',
        '/eca-digital',
        '/blog',
        '/contato',
        '/servicos/dpo-as-a-service',
        '/servicos/consultoria-adequacao',
        '/servicos/mentoria-e-cultura',
    ];

    $urls = [];
    foreach ($routes as $route) {
        $urls[] = ['loc' => $siteUrl . $route, 'lastmod' => gmdate('c')];
    }
    foreach ($posts as $post) {
        if (empty($post['slug'])) {
            continue;
        }
        $lastmod = !empty($post['modified_gmt']) ? gmdate('c', strtotime($post['modified_gmt'] . ' UTC')) : gmdate('c');
        $urls[] = ['loc' => $siteUrl . '/blog/' . $post['slug'], 'lastmod' => $lastmod];
    }

    $xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    $xml .= "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";
    foreach ($urls as $url) {
        $xml .= "  <url>\n";
        $xml .= "    <loc>" . esc_url($url['loc']) . "</loc>\n";
        $xml .= "    <lastmod>" . esc_html($url['lastmod']) . "</lastmod>\n";
        $xml .= "  </url>\n";
    }
    $xml .= "</urlset>\n";

    return $xml;
}

function together_submit_indexnow(array $posts): void
{
    if (!defined('TOGETHER_INDEXNOW_KEY') || TOGETHER_INDEXNOW_KEY === '') {
        return;
    }

    $siteUrl = defined('TOGETHER_FRONTEND_SITE_URL')
        ? rtrim(TOGETHER_FRONTEND_SITE_URL, '/')
        : rtrim(home_url('/'), '/');

    $urls = array_values(array_filter(array_map(static function ($post) use ($siteUrl) {
        return empty($post['slug']) ? null : $siteUrl . '/blog/' . $post['slug'];
    }, $posts)));

    wp_remote_post('https://api.indexnow.org/indexnow', [
        'headers' => ['Content-Type' => 'application/json'],
        'body' => wp_json_encode([
            'host' => wp_parse_url(home_url(), PHP_URL_HOST),
            'key' => TOGETHER_INDEXNOW_KEY,
            'urlList' => array_slice($urls, 0, 10000),
        ]),
        'timeout' => 10,
    ]);
}
