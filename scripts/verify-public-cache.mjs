import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';

export function assertRevalidation(cacheControl) {
  const directives = cacheControl.toLowerCase().split(',').map(value => value.trim());
  const ages = directives.filter(value => value.startsWith('max-age='));
  assert.ok(ages.length > 0 && ages.every(value => value === 'max-age=0'), `HTML must revalidate: ${cacheControl}`);
  assert.ok(directives.includes('must-revalidate'), `Missing must-revalidate: ${cacheControl}`);
}

export function assertImmutable(cacheControl) {
  const directives = cacheControl.toLowerCase().split(',').map(value => value.trim());
  assert.ok(directives.includes('max-age=31536000') && directives.includes('immutable'), `Versioned assets must keep long cache: ${cacheControl}`);
}

export async function verifyPublicCache(base = 'https://togetherprivacy.tech', request = fetch) {
  const results = [];
  let markup = '';
  for (const route of ['/', '/servicos/consultoria-adequacao', '/servicos/dpo-as-a-service', '/eca-digital']) {
    const response = await request(new URL(route, base), {signal:AbortSignal.timeout(30000)});
    assert.equal(response.status, 200, `Page unavailable: ${route}`);
    const cacheControl = response.headers.get('cache-control') || '';
    assertRevalidation(cacheControl);
    const content = await response.text();
    if(route === '/servicos/consultoria-adequacao') {
      assert.ok(content.includes('id="solicitar-proposta"'), 'Expected LGPD proposal form missing');
      markup = content;
    }
    results.push({route,status:response.status,cacheControl,cacheStatus:response.headers.get('cf-cache-status')});
  }
  for(const extension of ['css','js']) {
    const asset = markup.match(new RegExp(`(?:src|href)="([^" ]*\/_next\/static\/chunks\/[^" ]+\\.${extension})"`))?.[1];
    assert.ok(asset, `Missing exported ${extension} asset`);
    const response = await request(new URL(asset,base),{method:'HEAD',signal:AbortSignal.timeout(30000)});
    assert.equal(response.status,200,`Asset unavailable: ${asset}`);
    const cacheControl=response.headers.get('cache-control')||'';
    assertImmutable(cacheControl);
    results.push({route:asset,status:response.status,cacheControl});
  }
  // GET does not create a contact; the endpoint only accepts POST.
  const api=await request(new URL('/wp-json/together/v1/contact',base),{signal:AbortSignal.timeout(30000)});
  assert.ok([404,405].includes(api.status),`Unexpected response from read-only contact endpoint check: ${api.status}`);
  assert.ok(!(api.headers.get('age') && Number(api.headers.get('age'))>0));
  assert.ok(!['HIT','STALE','UPDATING','REVALIDATED'].includes(api.headers.get('cf-cache-status')),'Contact API must bypass edge cache');
  results.push({route:'/wp-json/together/v1/contact',method:'GET',status:api.status,cacheStatus:api.headers.get('cf-cache-status')});
  return results;
}

if(process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href) {
  verifyPublicCache(process.argv[2]).then(results=>console.log(JSON.stringify(results,null,2))).catch(error=>{console.error(error.message);process.exitCode=1;});
}
