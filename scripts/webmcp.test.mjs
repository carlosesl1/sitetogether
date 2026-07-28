import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const layoutSource = await readFile(
  new URL("../src/app/layout.tsx", import.meta.url),
  "utf8",
);
const webMcpSource = await readFile(
  new URL("../src/components/ai/webmcp-provider.tsx", import.meta.url),
  "utf8",
);
const contactSource = await readFile(
  new URL("../src/app/contato/page.tsx", import.meta.url),
  "utf8",
);

test("registers progressive WebMCP tools in the global layout", () => {
  assert.match(layoutSource, /WebMcpProvider/);
  assert.match(webMcpSource, /document\.modelContext/);
  assert.match(webMcpSource, /registerTool/);
  assert.match(webMcpSource, /list_privacy_services/);
  assert.match(webMcpSource, /open_together_destination/);
  assert.match(webMcpSource, /readOnlyHint:\s*true/);
  assert.match(webMcpSource, /controller\.abort\(\)/);
});

test("exposes the contact form declaratively without agent auto-submit", () => {
  assert.match(contactSource, /toolname:\s*"request_privacy_consult"/);
  assert.match(contactSource, /tooldescription:/);
  assert.match(contactSource, /name="website"\s+type="hidden"/);
  assert.doesNotMatch(contactSource, /toolautosubmit/);
});
