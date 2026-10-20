import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { webcrypto } from 'node:crypto';
import test from 'node:test';
import ts from 'typescript';

function setup() {
  const saved = new Map();
  const layer = [];
  const browser = {
    location: { href: 'https://togetherprivacy.tech/servicos/consultoria-adequacao?gclid=real-click_123&utm_source=google&utm_campaign=lgpd&email=private@example.invalid', pathname: '/servicos/consultoria-adequacao' },
    dataLayer: layer,
    sessionStorage: { getItem: key => saved.get(key) ?? null, setItem: (key, value) => saved.set(key, value), removeItem: key => saved.delete(key) },
  };
  const requests = [];
  const cache = new Map();
  function load(name) {
    name = name.replace(/^@\/lib\//, '').replace(/^\.\//, '');
    if (cache.has(name)) return cache.get(name);
    const source = readFileSync(new URL(`../src/lib/${name}.ts`, import.meta.url), 'utf8');
    const exports = {};
    cache.set(name, exports);
    vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, {
      exports, require: load, window: browser, document: { referrer: '' }, process: { env: {} }, URL, Date, Set, TextEncoder, crypto: webcrypto, setTimeout, clearTimeout,
      fetch: async (_url, options) => { requests.push(JSON.parse(options.body)); return new Response(JSON.stringify({ ok: true, leadId: 42 }), { headers: { 'content-type': 'application/json' } }); },
    });
    return exports;
  }
  return { browser, layer, requests, saved, load };
}
const payload = { firstName: 'Local', lastName: 'Test', email: 'local@example.invalid', company: 'Local', website: '' };
const conversion = { formId: 'lgpd', formName: 'LGPD', formSource: 'LGPD' };

test('same confirmed lead cannot produce two bidding conversions', async () => {
  const s = setup();
  const { submitContact } = s.load('contact');
  await submitContact(payload, conversion);
  await submitContact(payload, conversion);
  assert.equal(s.layer.filter(e => e.event === 'generate_lead').length, 1);
  assert.equal(s.layer.find(e => e.event === 'generate_lead').transaction_id, 'together-42');
});

test('landing attribution survives navigation and reaches the contact endpoint without arbitrary URL data', async () => {
  const s = setup();
  s.load('lead-attribution').captureLeadAttribution();
  s.browser.location = { href: 'https://togetherprivacy.tech/contato', pathname: '/contato' };
  await s.load('contact').submitContact(payload, conversion);
  assert.equal(s.requests[0].attribution.gclid, 'real-click_123');
  assert.equal(s.requests[0].attribution.utm_campaign, 'lgpd');
  assert.equal(s.requests[0].attribution.landing_path, '/servicos/consultoria-adequacao');
  assert.ok(!JSON.stringify(s.requests[0].attribution).includes('private@'));
  assert.ok(!JSON.stringify(s.layer).includes('local@example'));
});

test('new campaign replaces old click identifiers instead of mixing touches', () => {
  const s = setup();
  const api = s.load('lead-attribution');
  api.captureLeadAttribution();
  s.browser.location.href = 'https://togetherprivacy.tech/contato?utm_source=newsletter&utm_campaign=october';
  const current = api.captureLeadAttribution();
  assert.equal(current.utm_source, 'newsletter');
  assert.equal(current.gclid, undefined);
});

test('denied advertising storage clears attribution and storage failures never break a contact', async () => {
  const s = setup();
  const api = s.load('lead-attribution');
  api.captureLeadAttribution();
  s.layer.push(['consent', 'update', { ad_storage: 'denied' }]);
  assert.equal(api.captureLeadAttribution(), undefined);
  assert.equal(s.saved.size, 0);
  s.browser.sessionStorage = { getItem() { throw Error('blocked'); }, setItem() { throw Error('blocked'); }, removeItem() { throw Error('blocked'); } };
  assert.equal((await s.load('contact').submitContact(payload, conversion)).ok, true);
});

test('enhanced data is absent without an explicit grant and is normalized/hashed only after grant', async () => {
  const s = setup();
  const api = s.load('lead-attribution');
  assert.equal(await api.enhancedLeadData('First.Last@gmail.com'), undefined);
  s.layer.push(['consent', 'update', { ad_user_data: 'granted' }]);
  const data = await api.enhancedLeadData(' First.Last@gmail.com ');
  const expected = Buffer.from(await webcrypto.subtle.digest('SHA-256', new TextEncoder().encode('firstlast@gmail.com'))).toString('hex');
  assert.equal(data.sha256_email_address, expected);
  s.layer.push(['consent', 'update', { ad_user_data: 'denied' }]);
  assert.equal(await api.enhancedLeadData('firstlast@gmail.com'), undefined);
  assert.ok(!JSON.stringify([...s.saved]).includes('firstlast'));
});
