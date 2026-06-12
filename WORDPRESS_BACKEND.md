# WordPress backend TOGETHER

O formulario do site usa o endpoint:

`/wp-json/together/v1/contact`

O endpoint e configurado pelo mu-plugin:

`wp-content/mu-plugins/together-contact-endpoint.php`

## E-mail do formulario

O plugin ja usa estes dados como padrao:

```php
TOGETHER_CONTACT_RECIPIENTS = contato@togetherprivacy.com,carlos.leite@noirdigital.com.br
TOGETHER_MAIL_FROM_EMAIL = contato@togetherprivacy.tech
TOGETHER_MAIL_FROM_NAME = TOGETHER Privacy & Tech
TOGETHER_SMTP_HOST = smtp.hostinger.com
TOGETHER_SMTP_USERNAME = contato@togetherprivacy.tech
TOGETHER_SMTP_PORT = 587
TOGETHER_SMTP_SECURE = tls
```

No servidor, adicione apenas a senha no `wp-config.php`, antes da linha
`/* That's all, stop editing! Happy publishing. */`:

```php
define('TOGETHER_SMTP_PASSWORD', 'COLE_A_SENHA_AQUI');
```

Se quiser sobrescrever qualquer outro campo no futuro, tambem pode definir as
constantes correspondentes no `wp-config.php`.

Nunca coloque a senha no repositorio, no build estatico ou em arquivos publicos.

## Deploy automatico dos posts

O site novo e um export estatico do Next.js. Por isso, posts publicados ou
editados no WordPress precisam disparar um novo build e um novo upload da pasta
`out/` para a Hostinger.

O workflow esta em:

`.github/workflows/deploy-hostinger.yml`

Ele roda quando:

- ha push na branch `master`;
- alguem roda o workflow manualmente no GitHub;
- o WordPress envia o evento `wordpress_content_changed`;
- o agendamento diario roda como fallback.

### Secrets e variables no GitHub

No repositorio do GitHub, configure em `Settings > Secrets and variables >
Actions`:

Environment secrets:

```txt
HOSTINGER_FTP_SERVER=ftp.seu-dominio.com
HOSTINGER_FTP_USERNAME=usuario_ftp
HOSTINGER_FTP_PASSWORD=senha_ftp
```

Esses 3 secrets devem ficar no environment `hostinger`, porque o workflow usa:

```yaml
environment: hostinger
```

Repository variables ou repository secrets:

```txt
HOSTINGER_FTP_SERVER_DIR=./public_html/
HOSTINGER_FTP_PROTOCOL=ftp
HOSTINGER_FTP_PORT=21
```

O usuario FTP atual da Hostinger abre na home da hospedagem, onde existe a
pasta `public_html`, entao o diretorio remoto correto e `./public_html/`.

O workflow publica de verdade (`dry-run: false`) depois do teste inicial de
conexao ter passado.

O workflow publica apenas a pasta `out/` e exclui arquivos/pastas do WordPress
como `wp-admin/`, `wp-content/`, `wp-includes/`, `wp-config.php`, `wp-*.php`,
`xmlrpc.php` e `index.php`. Isso permite hospedar o site estatico no mesmo
`public_html` sem substituir a instalacao WordPress que atende o `/wp-json`.

### Token do GitHub no WordPress

Crie um token no GitHub para permitir que o WordPress chame a API de
`repository_dispatch`. Use um token restrito ao repositorio `sitetogether`,
com permissao de repositorio `Contents: read and write`. Em token classico,
use o escopo `repo`.

No `wp-config.php`, antes da linha
`/* That's all, stop editing! Happy publishing. */`, adicione:

```php
define('TOGETHER_GITHUB_DEPLOY_OWNER', 'carlosesl1');
define('TOGETHER_GITHUB_DEPLOY_REPO', 'sitetogether');
define('TOGETHER_GITHUB_DEPLOY_TOKEN', 'COLE_O_TOKEN_DO_GITHUB_AQUI');
```

Depois que o mu-plugin estiver atualizado no servidor, publicar ou editar um
post com status `publish` dispara o workflow do GitHub. O plugin usa um debounce
de 2 minutos para evitar multiplos deploys quando o WordPress faz salvamentos
sequenciais.
