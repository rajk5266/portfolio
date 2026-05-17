import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
    integrations: [icon()]
});
