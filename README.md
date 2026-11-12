# Site — Over Barber Conceito

Site estático em **Astro 7** — barbearia premium no Meireles, Fortaleza.

## Rodar / gerar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera /dist (pronto para Netlify, Vercel, Cloudflare Pages, Hostinger etc.)
```

## Antes de publicar (checklist)

1. **Domínio** — troque `https://www.overbarberconceito.com.br` em:
   - `astro.config.mjs` (`SITE`)
   - `src/data/site.ts` (`SITE_URL`)
   - `public/robots.txt` e `public/llms.txt`
2. **CNPJ / razão social / e-mail** — preencha `cnpj`, `legalName` e `email` em `src/data/site.ts` (aparecem no rodapé e nas páginas legais).
3. **Medição** — se for usar, coloque o ID do GA4 e/ou do Meta Pixel em `site.analytics` (`src/data/site.ts`). Eles só carregam depois do consentimento no banner de cookies.
4. **Google Search Console** — envie `https://SEU-DOMINIO/sitemap-index.xml`.
5. **Perfil da Empresa no Google** — coloque o domínio novo no campo "Site" do GMN (hoje aponta para o BarbSuite).

## Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| Endereço, telefone, horários, links | `src/data/site.ts` |
| Serviços, preços, pacotes, Dia do Noivo | `src/data/services.ts` |
| Avaliações (Google) | `src/data/reviews.ts` |
| Perguntas frequentes | `src/data/faq.ts` |
| Artigos do blog | `src/data/posts.ts` |
| Fotos | `src/assets/img/` (o Astro converte para WebP e redimensiona) |
| Vídeo do topo | `public/video/hero-over-barber.mp4` |

## SEO incluído

- Título/descrição únicos por página, canonical, Open Graph/Twitter, geo-tags.
- JSON-LD: `BarberShop` (NAP, geo, horário, avaliação 5,0/55, catálogo de serviços com preços, ReserveAction), `WebSite`, `BreadcrumbList`, `Service`, `FAQPage`, `BlogPosting`, `OfferCatalog`.
- Páginas por serviço (8), páginas locais (Aldeota, Varjota), blog com 4 artigos, FAQ, galeria, avaliações.
- `sitemap-index.xml`, `robots.txt`, `llms.txt`, manifest e favicons.
- LGPD: banner de cookies com categorias, Google Consent Mode v2 (negado por padrão), mapa carregado só com clique, Política de Privacidade, Política de Cookies e Termos de Uso.
