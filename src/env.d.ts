/// <reference path="../.astro/db-types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface ImportMetaEnv {}

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
