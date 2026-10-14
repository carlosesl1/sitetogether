import assert from 'node:assert/strict';
import test from 'node:test';
import { assertImmutable, assertRevalidation, verifyPublicCache } from './verify-public-cache.mjs';

test('rejects stale HTML cache including contradictory duplicate headers',()=>{
  assertRevalidation('public, max-age=0, must-revalidate');
  for(const value of ['', 'public, max-age=2073600', 'public, max-age=0', 'max-age=0, must-revalidate, max-age=86400']) {
    assert.throws(()=>assertRevalidation(value));
  }
});

test('versioned resources retain immutable caching',()=>{
  assertImmutable('public, max-age=31536000, immutable');
  assert.throws(()=>assertImmutable('no-cache'));
});

test('deployment check only reads pages/assets and rejects cached contact responses',async()=>{
  for(const cached of [false,true]) {
    const calls=[];
    const request=async(url,options)=>{
      calls.push(options?.method||'GET');
      const asset=/\.(css|js)$/.test(url.pathname);
      const api=url.pathname.startsWith('/wp-json/');
      return new Response(api?'{}':'<div id="solicitar-proposta"></div><link href="/_next/static/chunks/abcdef1234567890.css"><script src="/_next/static/chunks/abcdef1234567890.js"></script>',{
        status:api?404:200,headers:{'cache-control':asset?'public, max-age=31536000, immutable':'public, max-age=0, must-revalidate','cf-cache-status':api&&cached?'HIT':'DYNAMIC'}
      });
    };
    if(cached) await assert.rejects(verifyPublicCache('https://example.invalid',request));
    else assert.equal((await verifyPublicCache('https://example.invalid',request)).length,7);
    assert.ok(calls.every(method=>method==='GET'||method==='HEAD'));
  }
});
