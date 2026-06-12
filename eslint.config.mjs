import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "src/components/unused_sections/**",
    "src/components/ui/backgrounds/beams.tsx",
    "src/components/ui/backgrounds/floating-cubes.tsx",
    "src/components/ui/backgrounds/gradient-blinds.tsx",
    "src/components/ui/backgrounds/silk.tsx",
  ]),
]);

export default eslintConfig;
