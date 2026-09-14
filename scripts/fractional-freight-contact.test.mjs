import assert from 'node:assert/strict';
import test from 'node:test';
import { buildIndustryContactHref, getIndustryCtaEvent } from '../src/lib/industry-attribution.ts';

test('freight contact stays on the page and preserves approved campaign data', () => {
  for (const position of ['hero', 'proof', 'final']) {
    const href = buildIndustryContactHref({
      sector: 'transporte-fracionado', position, localForm: true,
      entryUrl: new URL('https://togetherprivacy.tech/solucoes/privacidade-transporte-fracionado?utm_source=google&utm_campaign=lgpd&gclid=123&unsafe=drop#realidade-do-fracionado'),
      allowedAnchors: ['realidade-do-fracionado'],
    });
    const result = new URL(href, 'https://togetherprivacy.tech');
    assert.equal(result.pathname, '/solucoes/privacidade-transporte-fracionado');
    assert.equal(result.hash, '#contato-fracionado');
    assert.equal(result.searchParams.get('cta_position'), position);
    assert.equal(result.searchParams.get('entry_anchor'), 'realidade-do-fracionado');
    assert.equal(result.searchParams.get('utm_campaign'), 'lgpd');
    assert.equal(result.searchParams.get('gclid'), '123');
    assert.equal(result.searchParams.has('unsafe'), false);
  }
});

test('freight CTA keeps the original allowed anchor after reaching the contact section', () => {
  for (const [anchor, expected] of [['realidade-do-fracionado', 'realidade-do-fracionado'], ['unknown', null]]) {
    const href = buildIndustryContactHref({
      sector: 'transporte-fracionado', position: 'proof', localForm: true,
      entryUrl: new URL(`https://togetherprivacy.tech/solucoes/privacidade-transporte-fracionado?entry_anchor=${anchor}#contato-fracionado`),
      allowedAnchors: ['realidade-do-fracionado'],
    });
    assert.equal(new URL(href, 'https://togetherprivacy.tech').searchParams.get('entry_anchor'), expected);
  }
});

test('local freight form does not change contact destinations on other pages', () => {
  for (const sector of ['saas', 'ensino-superior', 'gestao-de-rodovias', 'unknown']) {
    assert.equal(buildIndustryContactHref({sector, position: 'hero', localForm: true, allowedAnchors: []}), `/contato?sector=${sector}&cta_position=hero`);
  }
  assert.equal(getIndustryCtaEvent('capabilities'), 'cta_midpage');
});

test('full truckload CTA preserves attribution and reaches its own local form', () => {
  for (const position of ['hero', 'proof', 'final']) {
    const href = buildIndustryContactHref({
      sector: 'transporte-lotacao', position, localForm: true,
      entryUrl: new URL('https://togetherprivacy.tech/solucoes/privacidade-transporte-lotacao?utm_source=google&utm_campaign=lgpd&gclid=123&unsafe=drop#dpo'),
      allowedAnchors: ['dpo'],
    });
    const result = new URL(href, 'https://togetherprivacy.tech');
    assert.equal(result.pathname, '/solucoes/privacidade-transporte-lotacao');
    assert.equal(result.hash, '#contato-lotacao');
    assert.equal(result.searchParams.get('cta_position'), position);
    assert.equal(result.searchParams.get('entry_anchor'), 'dpo');
    assert.equal(result.searchParams.get('utm_campaign'), 'lgpd');
    assert.equal(result.searchParams.get('gclid'), '123');
    assert.equal(result.searchParams.has('unsafe'), false);
  }
  assert.equal(buildIndustryContactHref({sector: 'transporte-lotacao', position: 'hero', localForm: true, allowedAnchors: []}), '/solucoes/privacidade-transporte-lotacao?sector=transporte-lotacao&cta_position=hero#contato-lotacao');
  assert.equal(buildIndustryContactHref({sector: 'transporte-lotacao', position: 'hero', allowedAnchors: []}), '/contato?sector=transporte-lotacao&cta_position=hero');
});

test('freight contact has a working static fallback before JavaScript initializes', () => {
  assert.equal(buildIndustryContactHref({sector: 'transporte-fracionado', position: 'hero', localForm: true, allowedAnchors: []}), '/solucoes/privacidade-transporte-fracionado?sector=transporte-fracionado&cta_position=hero#contato-fracionado');
});
