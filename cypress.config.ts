import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    BASE_URL: 'http://localhost:4000',
    TOKEN: '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'
  }
});
