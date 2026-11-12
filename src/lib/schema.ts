import { site, SITE_URL } from '../data/site';
import { reviews } from '../data/reviews';
import { services, packages, groomPackages } from '../data/services';

export const BUSINESS_ID = `${SITE_URL}/#barbearia`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const abs = (p: string) => new URL(p, SITE_URL).href;

export const businessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['BarberShop', 'HealthAndBeautyBusiness'],
  '@id': BUSINESS_ID,
  name: site.name,
  alternateName: ['Over Barber Conceito | Barbearia em Fortaleza', 'Over Barber Meireles', 'OVB Conceito'],
  description:
    'Barbearia premium no Meireles, em Fortaleza: corte masculino, corte infantil, barba e barboterapia, camuflagem de fios brancos, coloração, tratamentos capilares com ozônio, manicure e pedicure, estética masculina e pacotes de Dia do Noivo. Valet gratuito.',
  slogan: site.slogan,
  url: `${SITE_URL}/`,
  telephone: site.phoneE164,
  ...(site.email ? { email: site.email } : {}),
  image: [abs('/og-over-barber-conceito.jpg')],
  logo: abs('/icon-512.png'),
  priceRange: 'R$ 30 – R$ 500',
  currenciesAccepted: 'BRL',
  foundingDate: site.founded,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.streetSchema,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: site.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  hasMap: site.maps,
  openingHoursSpecification: site.hoursSchema,
  areaServed: site.areaServed.map((n) => ({ '@type': n === 'Fortaleza' ? 'City' : 'Place', name: n === 'Fortaleza' ? 'Fortaleza' : `${n}, Fortaleza - CE` })),
  sameAs: [site.instagram, site.maps, site.bioSite],
  potentialAction: {
    '@type': 'ReserveAction',
    target: { '@type': 'EntryPoint', urlTemplate: site.booking, actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'] },
    result: { '@type': 'Reservation', name: 'Agendamento na Over Barber Conceito' },
  },
  amenityFeature: site.amenities.map((a) => ({ '@type': 'LocationFeatureSpecification', name: a, value: true })),
  knowsAbout: ['Corte masculino', 'Barba', 'Barboterapia', 'Visagismo', 'Camuflagem de fios brancos', 'Ozonioterapia capilar', 'Dia do Noivo'],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: site.rating.value, reviewCount: site.rating.count, bestRating: '5', worstRating: '1' },
  review: reviews.slice(0, 8).map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: r.text,
    publisher: { '@type': 'Organization', name: 'Google' },
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços da Over Barber Conceito',
    itemListElement: [
      ...services.map((s) => ({
        '@type': 'OfferCatalog',
        name: s.short,
        itemListElement: s.items.map((i) => ({
          '@type': 'Offer',
          price: i.price.toFixed(2),
          priceCurrency: 'BRL',
          itemOffered: { '@type': 'Service', name: i.name, url: abs(`/servicos/${s.slug}/`) },
        })),
      })),
      {
        '@type': 'OfferCatalog',
        name: 'Pacotes Over',
        itemListElement: [...packages, ...groomPackages].map((p) => ({
          '@type': 'Offer',
          price: p.price.toFixed(2),
          priceCurrency: 'BRL',
          itemOffered: { '@type': 'Service', name: p.name },
        })),
      },
    ],
  },
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: site.name,
  inLanguage: 'pt-BR',
  publisher: { '@id': BUSINESS_ID },
});

export const breadcrumbSchema = (items: { name: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.href) })),
});

export const faqSchema = (list: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: list.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const serviceSchema = (s: (typeof services)[number], imageUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': abs(`/servicos/${s.slug}/#servico`),
  name: s.title,
  serviceType: s.short,
  description: s.seoDescription,
  image: imageUrl,
  provider: { '@id': BUSINESS_ID },
  areaServed: { '@type': 'City', name: 'Fortaleza' },
  url: abs(`/servicos/${s.slug}/`),
  offers: s.items.map((i) => ({
    '@type': 'Offer',
    name: i.name,
    price: i.price.toFixed(2),
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: site.booking,
  })),
});
