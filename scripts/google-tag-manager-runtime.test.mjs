import assert from 'node:assert/strict';
import test from 'node:test';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

const helper = new URL('../src/lib/google-tag-manager.ts', import.meta.url);
const source = await readFile(helper, 'utf8');
const compiled = ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;

function setup(gatewayUrl) {
  const scripts = [];
  const timers = new Map();
  let timerId = 0;
  function makeScript(src = '') {
    const handlers = new Map();
    return {src, id:'', handlers, addEventListener:(name,callback)=>handlers.set(name,callback),removeEventListener:(name)=>handlers.delete(name)};
  }
  if (gatewayUrl) scripts.push(makeScript(gatewayUrl));
  const pendingLead = {event:'generate_lead',form_id:'adequacao-lgpd'};
  const window = {dataLayer:[pendingLead],location:{origin:'https://togetherprivacy.tech'},setTimeout:(fn,delay)=>{const id=++timerId;timers.set(id,{fn,delay});return id;},clearTimeout:id=>timers.delete(id),addEventListener(){},removeEventListener(){}};
  const document = {scripts, getElementById:id=>scripts.find(s=>s.id===id),createElement:()=>makeScript(),head:{appendChild:script=>scripts.push(script)}};
  const sandbox = {window,document,URL,Date,exports:{}};
  vm.runInNewContext(compiled,sandbox);
  const start = () => sandbox.exports.initializeGoogleTagManager();
  return {start,window,scripts,timers,pendingLead,direct:()=>scripts.filter(s=>s.id==='google-tag-manager')};
}

test('reutiliza o Gateway sem baixar outro contêiner e preserva eventos antecipados',()=>{
  const s=setup('https://togetherprivacy.tech/h8ny/');
  s.start();
  assert.equal(s.direct().length,0);
  assert.equal(s.window.dataLayer[0],s.pendingLead);
  assert.equal(s.window.dataLayer.filter(x=>x.event==='gtm.js').length,1);
});

test('sem Gateway, carrega diretamente uma vez mesmo após remontagem',()=>{
  const s=setup();s.start();s.start();
  assert.equal(s.direct().length,1);
  assert.equal(s.window.dataLayer.filter(x=>x.event==='gtm.js').length,1);
  assert.match(s.direct()[0].src,/gtm\.js\?id=GTM-NRXBFNQN$/);
});

test('não confunde script de outro domínio ou recurso secundário com o Gateway',()=>{
  for(const url of ['https://other.invalid/h8ny/','https://togetherprivacy.tech/h8ny/secondary']) {
    const s=setup(url);s.start();assert.equal(s.direct().length,1);
  }
});

test('falha de carregamento do Gateway usa alternativa sem duplicar início ou lead',()=>{
  const s=setup('https://togetherprivacy.tech/h8ny/');s.start();
  s.scripts[0].handlers.get('error')?.();
  assert.equal(s.direct().length,1);
  assert.equal(s.window.dataLayer.filter(x=>x.event==='gtm.js').length,1);
  assert.equal(s.window.dataLayer.filter(x=>x.event==='generate_lead').length,1);
});

test('prazo usa alternativa apenas se o contêiner ainda não inicializou',()=>{
  for(const loaded of [true,false]) {
    const s=setup('https://togetherprivacy.tech/h8ny/');s.start();
    if(loaded)s.window.google_tag_manager={'GTM-NRXBFNQN':{}};
    const timer=[...s.timers.values()].find(t=>t.delay===8000);
    assert.ok(timer);timer.fn();
    assert.equal(s.direct().length,loaded?0:1);
  }
});

test('desmontagem remove a espera e o listener de erro',()=>{
  const s=setup('https://togetherprivacy.tech/h8ny/');const stop=s.start();stop();
  assert.equal(s.timers.size,0);assert.equal(s.scripts[0].handlers.size,0);
});
