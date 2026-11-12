import type { ImageMetadata } from 'astro';

// Fotos: src/assets/img/galeria/NN-nome.jpg (a ordem segue o número do arquivo).
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/img/galeria/*.jpg', { eager: true });

const captions: Record<string, string> = {
  'corte-masculino-acabamento-nuca': 'Corte masculino com acabamento na nuca, feito na Over Barber Conceito, barbearia no Meireles',
  'barbeiro-atendendo-cliente-salao': 'Barbeiro atendendo cliente no salão da Over Barber Conceito, no Meireles',
  'cliente-perfil-corte-e-barba': 'Cliente de perfil com corte e barba alinhados na barbearia no Meireles',
  'cliente-satisfeito-cadeira': 'Cliente sorrindo na cadeira depois do corte na Over Barber Conceito',
  'barba-toalha-quente-ferramentas': 'Barba com toalha quente, máquinas e tesouras: o ritual da Over Barber Conceito',
  'equipe-e-detalhes-over': 'Equipe, toalha quente e detalhes do atendimento na Over Barber Conceito',
  'barba-na-navalha-detalhes': 'Barba desenhada na navalha com cuidado nos detalhes, na barbearia no Meireles',
  'antes-e-depois-corte-oculos': 'Antes e depois de corte masculino na Over Barber Conceito, em Fortaleza',
  'sua-melhor-versao-corte': 'Barbeiro finalizando corte masculino: sua melhor versão começa aqui',
  'antes-e-depois-corte-masculino': 'Antes e depois de corte masculino com volume na Over Barber Conceito',
  'dia-do-noivo-preparacao': 'Sapatos, perfume e convite preparados para o Dia do Noivo na Over',
  'dia-do-noivo-privilege': 'Noivo de terno ajustando a abotoadura no pacote Noivo Privilege',
  'dia-do-noivo-select': 'Noivo sorridente no pacote Noivo Select da Over Barber Conceito',
  'dia-do-noivo-essence': 'Noivo amarrando o sapato no pacote Noivo Essence',
  'over-first-experience': 'Over First Experience: corte e barba na primeira visita à barbearia no Meireles',
};

export const galleryPhotos = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => {
    const slug = path.split('/').pop()!.replace(/^\d+-/, '').replace(/\.jpg$/, '');
    return { slug, image: mod.default, alt: captions[slug] ?? 'Foto da Over Barber Conceito, barbearia no Meireles, Fortaleza' };
  });

// Vídeos: public/galeria/<slug>.mp4 + <slug>.webp (capa). Comprimidos para ~960 px e áudio leve.
export const galleryVideos: { slug: string; title: string; description: string; landscape?: boolean }[] = [
  { slug: 'video-tour-barbearia-meireles', title: 'Tour pela Over Barber Conceito', description: 'Um passeio pela barbearia no Meireles, na Av. Dom Luís: fachada, salão, café e atendimento.' },
  { slug: 'video-fachada-valet-salao', title: 'Da fachada à cadeira', description: 'O valet na porta, o salão e o atendimento da Over Barber Conceito.' },
  { slug: 'video-historia-over-avenida-dom-luis', title: 'A Over na Av. Dom Luís', description: 'Como nasceu o conceito da Over Barber na Av. Dom Luís, no Meireles.' },
  { slug: 'video-conhecendo-a-over', title: 'Conhecendo a Over', description: 'Estrutura, serviços e o cuidado com cada cliente, inclusive as crianças.' },
  { slug: 'video-equipe-barbearia-meireles', title: 'A equipe da Over', description: 'Barbeiros experientes da barbearia no Meireles em ação.' },
  { slug: 'video-transformacao-corte-masculino', title: 'Transformação no corte', description: 'Corte masculino do começo ao fim, com visagismo e acabamento.' },
  { slug: 'video-corte-masculino-visagismo', title: 'Corte com visagismo', description: 'O barbeiro explica as escolhas do corte para o formato do rosto do cliente.' },
  { slug: 'video-corte-cabelo-ondulado', title: 'Corte em cabelo ondulado', description: 'Corte e finalização em cabelo com ondulação natural.' },
  { slug: 'video-corte-classico-penteado', title: 'Corte clássico penteado', description: 'Corte social clássico com penteado e barba alinhada.' },
  { slug: 'video-corte-tesoura-maquina', title: 'Tesoura e máquina', description: 'Corte masculino com tesoura e máquina, passo a passo.' },
  { slug: 'video-corte-e-barba-cliente', title: 'Corte e barba', description: 'Atendimento completo de corte e barba na Over Barber Conceito.' },
  { slug: 'video-corte-e-barba-visagismo', title: 'Cabelo e barba no detalhe', description: 'Corte, barba e acabamento com atenção aos detalhes.' },
  { slug: 'video-barba-toalha-quente', title: 'Barba com toalha quente', description: 'Barba na navalha com toalha quente: o ritual da barboterapia.' },
  { slug: 'video-cliente-e-barbeiro', title: 'Cliente e barbeiro', description: 'A relação de confiança entre cliente e barbeiro na Over.' },
  { slug: 'video-depoimento-cliente', title: 'Depoimento de cliente', description: 'Cliente conta como foi a experiência na barbearia no Meireles.' },
  { slug: 'video-depoimento-cliente-cadeira', title: 'Depoimento na cadeira', description: 'Cliente fala sobre o atendimento da Over Barber Conceito.', landscape: true },
  { slug: 'video-ambiente-lavatorio-bar', title: 'O ambiente da Over', description: 'Lavatório, bar e os detalhes do espaço da barbearia.', landscape: true },
  { slug: 'video-pacotes-combos', title: 'Pacotes e combos', description: 'Os pacotes Over Essence, Select e Privilege apresentados no salão.' },
  { slug: 'video-dia-do-noivo', title: 'Dia do Noivo', description: 'A preparação do noivo e dos convidados na Over Barber Conceito.' },
];
