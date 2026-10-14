import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';

const source = await readFile(new URL('../src/lib/contact.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const payload = { firstName: 'Teste', lastName: 'Local', email: 'local@example.invalid', company: 'Teste local', phone: '000', message: 'Somente teste local', source: 'Formulario de contato', pageUrl: 'https://example.invalid/contato?private=secret', website: '' };
const conversion = { formId: 'contact', formName: 'Formulario de contato', formSource: 'Formulario de contato' };
function setup(fetch, dataLayer = []) {
  const sandbox = { exports: {}, process: { env: {} }, fetch, window: { dataLayer, location: { pathname: '/contato' } } };
  vm.runInNewContext(compiled, sandbox);
  return { submit: sandbox.exports.submitContact, layer: dataLayer };
}
const reply = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json' } });

test('fila uma conversão apenas depois da confirmação da API, sem dados pessoais', async () => {
  let release;
  const { submit, layer } = setup(() => new Promise(resolve => { release = resolve; }));
  const pending = submit(payload, conversion);
  assert.equal(layer.length, 0);
  release(reply({ ok: true, leadId: 42 }));
  await pending;
  assert.deepEqual(JSON.parse(JSON.stringify(layer)), [{ event: 'generate_lead', form_id: 'contact', form_name: 'Formulario de contato', form_source: 'Formulario de contato', page_path: '/contato' }]);
});

test('falhas da API, resultado ambíguo e honeypot não geram conversão', async () => {
  for (const fetch of [async () => reply({ ok: false }, 400), async () => { throw new Error('offline'); }, async () => reply({}), async () => new Response('invalid', { headers: { 'content-type': 'application/json' } })]) {
    const { submit, layer } = setup(fetch);
    await submit(payload, conversion).catch(() => {});
    assert.equal(layer.length, 0);
  }
  const { submit, layer } = setup(async () => reply({ ok: true }));
  await submit({ ...payload, website: 'bot.example' }, conversion);
  assert.equal(layer.length, 0);
});

test('outros formulários não recebem evento duplicado e falha de analytics não impede confirmação', async () => {
  const { submit, layer } = setup(async () => reply({ ok: true }));
  await submit({ ...payload, source: 'Diagnóstico ECA Digital' });
  assert.equal(layer.length, 0);
  const broken = setup(async () => reply({ ok: true }), { push() { throw new Error('analytics unavailable'); } });
  assert.equal((await broken.submit(payload, conversion)).ok, true);
});

test('resposta sem confirmação explícita não pode apresentar sucesso ao visitante', async () => {
  for (const data of [{}, null, { ok: 'true' }]) {
    const { submit, layer } = setup(async () => reply(data));
    await assert.rejects(submit(payload, conversion));
    assert.equal(layer.length, 0);
  }
});
