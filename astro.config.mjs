// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ Troque pelo domínio definitivo antes de publicar (também em src/data/site.ts)
const SITE = 'https://www.overbarberconceito.com.br';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  image: { responsiveStyles: true },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'pt-BR', locales: { 'pt-BR': 'pt-BR' } },
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const u = item.url;
        if (u === SITE + '/') { item.priority = 1.0; item.changefreq = 'weekly'; }
        else if (/servicos|pacotes|dia-do-noivo|barbearia-/.test(u)) { item.priority = 0.9; item.changefreq = 'monthly'; }
        else if (/politica|termos/.test(u)) { item.priority = 0.2; item.changefreq = 'yearly'; }
        else { item.priority = 0.7; item.changefreq = 'monthly'; }
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
});
