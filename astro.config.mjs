// @ts-check
import { defineConfig } from "astro/config";
import Unocss from "unocss/astro";

import icon from "astro-icon";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [Unocss({ injectReset: true, injectEntry: true }), icon(), db()],
  devToolbar: {
    enabled: false
  }
});