// Fonte única de verdade (NAP) — mantenha idêntico ao Perfil da Empresa no Google.
export const SITE_URL = 'https://www.overbarberconceito.com.br';

const phoneDigits = '5585981631677';

export const site = {
  name: 'Over Barber Conceito',
  legalName: 'Over Barber Conceito',
  // Preencha com o CNPJ/razão social oficiais para as páginas legais:
  cnpj: '',
  tagline: 'Barbearia premium no Meireles, Fortaleza',
  slogan: 'Onde o cuidado masculino encontra o alto padrão.',
  founded: '2022',
  phone: '(85) 98163-1677',
  phoneE164: '+5585981631677',
  email: '', // preencha se houver e-mail de contato oficial
  whatsapp: `https://wa.me/${phoneDigits}`,
  whatsappMsg: (msg = 'Olá! Vim pelo site e gostaria de agendar um horário na Over Barber Conceito.') =>
    `https://wa.me/${phoneDigits}?text=${encodeURIComponent(msg)}`,
  booking: 'https://app.barbsuite.com/booking/over-barber-conceito',
  instagram: 'https://www.instagram.com/overbarberconceito/',
  instagramHandle: '@overbarberconceito',
  bioSite: 'https://bio.site/overbarberconceito',
  maps: 'https://www.google.com/maps?cid=14704222632365337621',
  mapsSearch:
    'https://www.google.com/maps/search/?api=1&query=Over+Barber+Conceito+Av.+Dom+Lu%C3%ADs+655+Meireles+Fortaleza',
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Over+Barber+Conceito%2C+Av.+Dom+Lu%C3%ADs%2C+655+-+Meireles%2C+Fortaleza+-+CE%2C+60160-230',
  mapsEmbed:
    'https://www.google.com/maps?q=Over+Barber+Conceito,+Av.+Dom+Lu%C3%ADs,+655+-+Meireles,+Fortaleza+-+CE&z=16&output=embed',
  address: {
    street: 'Av. Dom Luís, 655 — Loja 1',
    streetSchema: 'Avenida Dom Luís, 655, Loja 1',
    neighborhood: 'Meireles',
    city: 'Fortaleza',
    state: 'CE',
    zip: '60160-230',
    country: 'BR',
    plusCode: '7G83+GP Meireles, Fortaleza - CE',
  },
  geo: { lat: -3.7336722, lng: -38.4956327 },
  hours: [
    { days: 'Segunda a sábado', time: '9h às 19h' },
    { days: 'Domingo', time: 'Fechado' },
  ],
  hoursSchema: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  rating: { value: '5.0', count: 55 },
  // IDs de medição — só carregam após consentimento no banner de cookies (LGPD).
  analytics: { ga4: '', metaPixel: '' },
  areaServed: ['Meireles', 'Fortaleza'],
  amenities: [
    'Valet gratuito',
    'Café e cappuccino de cortesia',
    'Cerveja gelada',
    'Agendamento online',
    'Manicure e pedicure no mesmo horário',
    'Ambiente climatizado',
    'Espaço acolhedor para a comunidade LGBTQ+',
    'Atendimento infantil',
  ],
};

export const nav = [
  { href: '/', label: 'Início' },
  { href: '/quem-somos/', label: 'Quem somos' },
  { href: '/servicos/', label: 'Serviços' },
  { href: '/pacotes/', label: 'Pacotes' },
  { href: '/dia-do-noivo/', label: 'Dia do Noivo' },
  { href: '/avaliacoes/', label: 'Avaliações' },
  { href: '/galeria-de-fotos/', label: 'Galeria' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contato/', label: 'Contato' },
];
