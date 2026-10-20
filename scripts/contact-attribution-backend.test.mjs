import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { PHP } from '@php-wasm/universal';
import { loadNodeRuntime } from '@php-wasm/node';

const plugin = readFileSync(new URL('../public/wp-content/mu-plugins/together-contact-endpoint.php', import.meta.url), 'utf8').replace(/^<\?php\s*/, '');
test('WordPress accepts only bounded attribution fields and excludes injected arbitrary data', async () => {
  const php = new PHP(await loadNodeRuntime('8.3', { emscriptenOptions: { processId: 1 } }));
  try {
    const result = await php.runStream({ code: `<?php
      define('ABSPATH', __DIR__);
      function add_action(...$args): void {}
      function add_filter(...$args): void {}
      function sanitize_text_field($value): string { return trim(strip_tags($value)); }
      ${plugin}
      echo json_encode([
        together_sanitize_lead_attribution(['gclid'=>'click_123','utm_campaign'=>'LGPD','landing_path'=>'/contato?email=private@example.invalid','captured_at'=>gmdate('Y-m-d\\TH:i:s\\Z'),'email'=>'private@example.invalid']),
        together_sanitize_lead_attribution(['gclid'=>['invalid'],'wbraid'=>'<script>','utm_campaign'=>'private@example.invalid']),
        together_sanitize_lead_attribution('invalid'),
      ]);
    ` });
    assert.equal((await result.stderrText).trim(), '');
    const [accepted, rejected, nonObject] = JSON.parse(await result.stdoutText);
    assert.equal(accepted.gclid, 'click_123');
    assert.equal(accepted.landing_path, '/contato');
    assert.ok(accepted.captured_at);
    assert.equal(accepted.email, undefined);
    assert.deepEqual(rejected, []);
    assert.deepEqual(nonObject, []);
  } finally { php.exit(); }
});
