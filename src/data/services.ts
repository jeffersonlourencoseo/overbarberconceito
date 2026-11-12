// Preços conforme a agenda oficial (BarbSuite) — atualize aqui e o site inteiro muda.
export type Item = { name: string; price: number; duration?: string; note?: string };
export type Service = {
  slug: string;
  title: string;          // H1
  short: string;          // nome curto (cards/menu)
  seoTitle: string;
  seoDescription: string;
  keyword: string;
  image: string;          // nome do arquivo em src/assets/img
  imageAlt: string;
  excerpt: string;
  intro: string[];
  items: Item[];
  benefits: string[];
  steps?: { t: string; d: string }[];
  faq: { q: string; a: string }[];
  related: string[];
};

export const brl = (n: number) =>
  n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: n % 1 ? 2 : 0 });

export const services: Service[] = [
  {
    slug: 'corte-masculino',
    title: 'Corte masculino no Meireles',
    short: 'Corte masculino',
    seoTitle: 'Corte Masculino no Meireles, Fortaleza | Over Barber',
    seoDescription:
      'Corte masculino na tesoura ou máquina com visagismo, no Meireles (Av. Dom Luís, 655). Corte a partir de R$ 80, valet gratuito e agendamento online.',
    keyword: 'corte masculino fortaleza',
    image: 'corte-cabelo-masculino-salao',
    imageAlt: 'Cliente da Over Barber Conceito com corte masculino finalizado no salão do Meireles',
    excerpt: 'Tesoura, máquina e visagismo: o corte pensado para o formato do seu rosto.',
    intro: [
      'Antes de pegar na tesoura, o barbeiro conversa com você. Formato do rosto, tipo de fio, rotina e o estilo que você quer passar — é isso que define o corte. Social na tesoura, degradê, old money, texturizado ou clássico: o resultado é um visual que funciona no espelho do dia a dia, não só na saída da barbearia.',
      'Na Over Barber Conceito, no Meireles, o corte masculino é feito sem pressa, com acabamento na navalha e finalização com produto profissional. Você chega pelo valet gratuito, toma um café ou uma cerveja gelada e sai pronto para a semana.',
    ],
    items: [
      { name: 'Corte adulto', price: 80, duration: '25 min' },
      { name: 'Cabelo e barba', price: 150, duration: '50 min' },
      { name: 'Pezinho de cabelo (acabamento)', price: 40 },
      { name: 'Penteado', price: 55 },
      { name: 'Raspar careca na máquina', price: 50 },
      { name: 'Raspar careca na navalha', price: 70 },
    ],
    benefits: [
      'Consultoria de visagismo antes do corte',
      'Tesoura, máquina ou os dois — você escolhe',
      'Acabamento na navalha e finalização com produto profissional',
      'Lavagem e orientações para manter o corte em casa',
    ],
    steps: [
      { t: 'Conversa', d: 'Entendemos sua rotina, o estilo desejado e analisamos formato do rosto e tipo de fio.' },
      { t: 'Corte', d: 'Execução com calma, na tesoura e/ou máquina, respeitando o caimento natural do cabelo.' },
      { t: 'Acabamento', d: 'Contornos e nuca na navalha para um desenho limpo que dura mais.' },
      { t: 'Finalização', d: 'Produto certo para o seu cabelo e dicas para repetir o resultado em casa.' },
    ],
    faq: [
      { q: 'Quanto custa o corte masculino na Over Barber Conceito?', a: 'O corte adulto custa R$ 80 e leva cerca de 25 minutos. O combo cabelo e barba sai por R$ 150. Na primeira visita, a Over First Experience oferece corte + barba por R$ 135.' },
      { q: 'De quanto em quanto tempo devo cortar o cabelo?', a: 'Para cortes curtos e degradês, o ideal é voltar a cada 3 ou 4 semanas. Entre um corte e outro, o pezinho (R$ 40) mantém nuca e contornos alinhados.' },
      { q: 'Vocês fazem corte na tesoura?', a: 'Sim. O corte na tesoura é uma das especialidades da casa e é muito procurado para estilos sociais, old money e cabelos mais longos.' },
    ],
    related: ['barba-e-barboterapia', 'camuflagem-de-fios-brancos', 'tratamentos-capilares'],
  },
  {
    slug: 'barba-e-barboterapia',
    title: 'Barba e barboterapia',
    short: 'Barba & barboterapia',
    seoTitle: 'Barba na Navalha e Barboterapia em Fortaleza | Over Barber',
    seoDescription:
      'Barba desenhada na navalha com toalha quente e barboterapia completa no Meireles, Fortaleza. Barba R$ 80, barboterapia R$ 100. Agende online.',
    keyword: 'barboterapia fortaleza',
    image: 'barba-na-navalha-detalhes',
    imageAlt: 'Barbeiro fazendo barba na navalha com luvas pretas na Over Barber Conceito',
    excerpt: 'Toalha quente, navalha e o desenho certo para o seu rosto.',
    intro: [
      'Barba bem feita muda o rosto. Na Over Barber Conceito, ela é desenhada respeitando o seu formato de rosto e a sua densidade de fios, com toalha quente, navalha e produtos que hidratam a pele e o fio.',
      'A barboterapia é o cuidado completo: mais tempo de cadeira, vapor, toalhas quentes, esfoliação, massagem e finalização com óleos e balm. É para quem quer sair renovado, e não só com a barba aparada.',
    ],
    items: [
      { name: 'Barba', price: 80, duration: '25 min' },
      { name: 'Barboterapia', price: 100 },
      { name: 'Cabelo e barba', price: 150, duration: '50 min' },
      { name: 'Camuflagem de barba', price: 80, duration: '30 min' },
    ],
    benefits: [
      'Desenho personalizado pelo formato do rosto',
      'Toalha quente para abrir os poros e evitar irritação',
      'Acabamento na navalha com mão firme',
      'Hidratação com óleo e balm profissionais',
    ],
    steps: [
      { t: 'Preparação', d: 'Toalha quente e produto pré-barba para amaciar os fios e proteger a pele.' },
      { t: 'Desenho', d: 'Definição de linhas e volume de acordo com o seu rosto.' },
      { t: 'Navalha', d: 'Contornos precisos e pele lisa nas áreas raspadas.' },
      { t: 'Finalização', d: 'Toalha fria, loção, óleo ou balm para hidratar e alinhar.' },
    ],
    faq: [
      { q: 'Qual a diferença entre barba e barboterapia?', a: 'A barba (R$ 80) é o aparo e o desenho com navalha. A barboterapia (R$ 100) é um ritual mais longo, com vapor, toalhas quentes, esfoliação, massagem e hidratação profunda.' },
      { q: 'Barboterapia resolve pelos encravados?', a: 'A preparação com toalha quente e a esfoliação ajudam bastante a reduzir pelos encravados e a irritação pós-barba. Para casos persistentes, o barbeiro orienta sobre cuidados em casa.' },
    ],
    related: ['corte-masculino', 'camuflagem-de-fios-brancos', 'estetica-masculina'],
  },
  {
    slug: 'camuflagem-de-fios-brancos',
    title: 'Camuflagem de fios brancos',
    short: 'Camuflagem de fios',
    seoTitle: 'Camuflagem de Fios Brancos em Fortaleza | Over Barber',
    seoDescription:
      'Camuflagem de fios brancos no cabelo, barba e sobrancelha com aspecto natural, sem "cara de tinta". No Meireles, Fortaleza, a partir de R$ 40.',
    keyword: 'camuflagem de barba fortaleza',
    image: 'cliente-corte-masculino-perfil',
    imageAlt: 'Cliente com cabelo e barba alinhados após camuflagem natural na Over Barber Conceito',
    excerpt: 'Disfarça o branco mantendo o aspecto natural, no tom que parece o seu.',
    intro: [
      'Fios brancos aparecendo e você quer disfarçar sem ficar com cara de tinta? A camuflagem reduz a aparência do branco mantendo o aspecto natural, no tom que parece o seu — ninguém percebe que foi feito, só percebe que você parece mais descansado.',
      'Dá para fazer no cabelo, na barba e na sobrancelha, junto com o corte ou a barba, no mesmo horário. Leva cerca de 30 minutos.',
    ],
    items: [
      { name: 'Camuflagem de cabelo', price: 100, duration: '30 min' },
      { name: 'Camuflagem de barba', price: 80, duration: '30 min' },
      { name: 'Camuflagem de sobrancelha', price: 40, duration: '30 min' },
    ],
    benefits: [
      'Resultado natural, sem efeito "tinta"',
      'Tom escolhido para o seu fio e pele',
      'Feito junto com o corte ou a barba',
      'Saída gradual, sem marcação de raiz',
    ],
    faq: [
      { q: 'Quanto tempo dura a camuflagem?', a: 'Em média de 3 a 4 semanas, saindo de forma gradual. Muitos clientes refazem junto com o corte.' },
      { q: 'Camuflagem é a mesma coisa que pintar o cabelo?', a: 'Não. A camuflagem não cobre 100% dos brancos: ela suaviza o contraste para um aspecto natural. Para cobertura total, existe a coloração.' },
    ],
    related: ['coloracao-e-luzes', 'corte-masculino', 'barba-e-barboterapia'],
  },
  {
    slug: 'corte-infantil',
    title: 'Corte infantil em Fortaleza',
    short: 'Corte infantil',
    seoTitle: 'Corte Infantil no Meireles, Fortaleza | Over Barber',
    seoDescription:
      'Corte infantil com paciência, no tempo da criança, em barbearia premium no Meireles. R$ 80, valet gratuito e manicure para os pais no mesmo horário.',
    keyword: 'corte infantil fortaleza',
    image: 'cliente-cadeira-barbearia',
    imageAlt: 'Ambiente acolhedor da Over Barber Conceito para corte infantil e de adultos',
    excerpt: 'Paciência, carinho e um corte que deixa pais e filhos satisfeitos.',
    intro: [
      'Criança precisa de um tempo diferente na cadeira. Aqui o corte infantil é feito com a mesma atenção do corte adulto, com paciência e conversa, para o pequeno sair feliz — e a família também.',
      'Enquanto seu filho corta, você pode aproveitar para fazer a barba ou as unhas com nossas manicures, no mesmo horário. E com o valet gratuito, chegar com criança na Av. Dom Luís fica muito mais fácil.',
    ],
    items: [
      { name: 'Corte infantil', price: 80, duration: '25 min' },
      { name: 'Pezinho de cabelo', price: 40 },
    ],
    benefits: [
      'Barbeiros pacientes e acostumados com crianças',
      'Valet gratuito na porta',
      'Pais aproveitam barba ou manicure no mesmo horário',
      'Ambiente climatizado e acolhedor',
    ],
    faq: [
      { q: 'A partir de qual idade vocês cortam?', a: 'Atendemos crianças de todas as idades. Para os bem pequenos, recomendamos agendar em horários mais tranquilos — fale com a gente pelo WhatsApp.' },
      { q: 'Posso fazer meu serviço enquanto meu filho corta?', a: 'Sim! É só agendar os dois horários juntos. Muitos pais aproveitam para fazer a barba ou a manicure.' },
    ],
    related: ['corte-masculino', 'manicure-e-pedicure', 'barba-e-barboterapia'],
  },
  {
    slug: 'manicure-e-pedicure',
    title: 'Manicure e pedicure masculina',
    short: 'Manicure & pedicure',
    seoTitle: 'Barbearia com Manicure e Pedicure | Over Barber Fortaleza',
    seoDescription:
      'Manicure e pedicure masculina na barbearia, no mesmo horário do corte. Mão R$ 39, pé R$ 45, pé e mão R$ 80. Meireles, Fortaleza.',
    keyword: 'barbearia com manicure fortaleza',
    image: 'cliente-satisfeito-over-barber',
    imageAlt: 'Cliente sorrindo após atendimento completo de corte, barba e manicure',
    excerpt: 'Corte, barba e unhas resolvidos numa visita só.',
    intro: [
      'Cuidar das unhas também é parte do visual. Na Over Barber Conceito você corta o cabelo, faz a barba e resolve manicure e pedicure no mesmo horário, sem ter que ir a outro lugar.',
      'Unhas limpas, cutículas tratadas e acabamento natural — sem esmalte, a não ser que você queira. Um detalhe que ninguém comenta, mas todo mundo repara.',
    ],
    items: [
      { name: 'Mão (manicure)', price: 39 },
      { name: 'Pé (pedicure)', price: 45 },
      { name: 'Pé e mão', price: 80 },
      { name: 'Plástica dos pés', price: 120 },
      { name: 'Ajuste de polimento (pé/mão)', price: 8 },
    ],
    benefits: [
      'Feito no mesmo horário do corte ou da barba',
      'Profissionais especializadas',
      'Materiais higienizados e esterilizados',
      'Acabamento natural e masculino',
    ],
    faq: [
      { q: 'Precisa agendar a manicure separadamente?', a: 'Você agenda tudo junto, online ou pelo WhatsApp, e organizamos para os serviços acontecerem no mesmo horário sempre que possível.' },
      { q: 'O que é a plástica dos pés?', a: 'É um tratamento mais completo para os pés, com esfoliação, remoção de calosidades e hidratação profunda.' },
    ],
    related: ['corte-masculino', 'estetica-masculina', 'barba-e-barboterapia'],
  },
  {
    slug: 'tratamentos-capilares',
    title: 'Tratamentos capilares e ozonioterapia',
    short: 'Tratamentos capilares',
    seoTitle: 'Hidratação com Ozônio e Tratamento Capilar | Over Barber',
    seoDescription:
      'Hidratação capilar com ozônio, lavagem anticaspa e spa capilar para homens no Meireles, Fortaleza. A partir de R$ 50. Agende online.',
    keyword: 'tratamento capilar masculino fortaleza',
    image: 'lavagem-capilar',
    imageAlt: 'Cliente recebendo lavagem e tratamento capilar no lavatório da Over Barber Conceito',
    excerpt: 'Ozônio, hidratação e cuidado com o couro cabeludo.',
    intro: [
      'Cuidar do fio vai além do corte. A hidratação com ozônio é feita depois do corte, com calma: ajuda a higienizar o couro cabeludo, controlar a oleosidade e deixar o fio mais forte e com brilho.',
      'Para caspa e descamação, a lavagem anticaspa usa produtos específicos e massagem no couro cabeludo. Você pode adicionar qualquer tratamento ao seu atendimento ou escolher um dos pacotes Over, que já incluem o cuidado.',
    ],
    items: [
      { name: 'Hidratação com ozônio', price: 60, duration: '25 min' },
      { name: 'Lavagem anticaspa', price: 50, duration: '25 min' },
      { name: 'Spa', price: 69 },
    ],
    benefits: [
      'Ozonioterapia: ação higienizante e revitalizante',
      'Controle de oleosidade e caspa',
      'Momento de relaxamento com massagem',
      'Pode ser adicionado ao corte no mesmo horário',
    ],
    faq: [
      { q: 'O que é a hidratação com ozônio?', a: 'É um tratamento em que o ozônio é aplicado no couro cabeludo e nos fios junto com a hidratação. Ele tem ação higienizante, ajuda no controle da oleosidade e deixa o cabelo mais saudável.' },
      { q: 'Algum pacote já inclui tratamento?', a: 'Sim. O Over Essence (corte, barba e ozonioterapia) e o Over Privilege (corte e tratamento dos fios) já incluem o cuidado capilar.' },
    ],
    related: ['corte-masculino', 'coloracao-e-luzes', 'estetica-masculina'],
  },
  {
    slug: 'coloracao-e-luzes',
    title: 'Coloração, luzes e platinado',
    short: 'Coloração & luzes',
    seoTitle: 'Luzes, Platinado e Coloração Masculina | Over Barber',
    seoDescription:
      'Coloração masculina, luzes e platinado com técnica profissional no Meireles, Fortaleza. Coloração R$ 130, luzes R$ 300, platinado R$ 350.',
    keyword: 'platinado masculino fortaleza',
    image: 'corte-masculino-texturizado',
    imageAlt: 'Cliente com corte masculino texturizado e cor uniforme na Over Barber Conceito',
    excerpt: 'Química feita por quem entende de cabelo masculino.',
    intro: [
      'Quer mudar o visual de verdade? Coloração, luzes e platinado são feitos com técnica profissional, produtos de qualidade e cuidado com a saúde do fio — do tom discreto ao platinado total.',
      'Antes de qualquer química, avaliamos o seu cabelo e indicamos o melhor caminho para chegar ao resultado com segurança.',
    ],
    items: [
      { name: 'Coloração', price: 130 },
      { name: 'Cover', price: 120 },
      { name: 'Luzes', price: 300 },
      { name: 'Platinado', price: 350 },
      { name: 'Inteligente — topo', price: 160 },
      { name: 'Inteligente — cabelo completo', price: 200 },
    ],
    benefits: [
      'Avaliação do fio antes da química',
      'Produtos profissionais',
      'Do discreto ao platinado',
      'Orientação de manutenção em casa',
    ],
    faq: [
      { q: 'Quanto tempo leva um platinado?', a: 'Depende do tom de partida e do comprimento do cabelo. Recomendamos agendar um horário mais longo e falar com a equipe pelo WhatsApp antes.' },
      { q: 'Química danifica o cabelo?', a: 'Com avaliação prévia, produtos certos e hidratação, o risco é muito menor. Recomendamos combinar com a hidratação com ozônio.' },
    ],
    related: ['camuflagem-de-fios-brancos', 'tratamentos-capilares', 'corte-masculino'],
  },
  {
    slug: 'estetica-masculina',
    title: 'Limpeza facial, sobrancelha e estética masculina',
    short: 'Estética masculina',
    seoTitle: 'Limpeza Facial e Sobrancelha Masculina | Over Barber',
    seoDescription:
      'Limpeza de pele masculina (R$ 50), sobrancelha na navalha (R$ 30) e depilação de nariz e orelha na cera. Barbearia premium no Meireles, Fortaleza.',
    keyword: 'sobrancelha masculina fortaleza',
    image: 'barboterapia-relaxamento',
    imageAlt: 'Cliente relaxando na cadeira durante cuidado facial na Over Barber Conceito',
    excerpt: 'Pele limpa, sobrancelha natural e os detalhes que fazem diferença.',
    intro: [
      'Pele também precisa de manutenção. A limpeza facial masculina tira a oleosidade e as impurezas, deixa o rosto descansado e ainda ajuda a barba a ficar mais bem tratada. É um cuidado rápido que dá para encaixar no mesmo horário do corte.',
      'Sobrancelha bem feita muda o rosto sem ninguém perceber o motivo. Aqui ela é feita na navalha, de forma natural: só tiramos o excesso e mantemos o desenho do seu rosto. Leva cerca de 10 minutos.',
    ],
    items: [
      { name: 'Limpeza facial', price: 50 },
      { name: 'Sobrancelha na navalha', price: 30, duration: '10 min' },
      { name: 'Depilação de nariz (cera)', price: 30 },
      { name: 'Depilação de orelha (cera)', price: 20 },
    ],
    benefits: [
      'Resultado natural, sem "sobrancelha feita"',
      'Rápido: encaixa no horário do corte',
      'Pele com menos oleosidade e cravos',
      'Barba mais bonita sobre uma pele tratada',
    ],
    faq: [
      { q: 'A sobrancelha fica com cara de feita?', a: 'Não. A proposta é tirar apenas o excesso e manter o desenho natural do seu rosto, na navalha.' },
      { q: 'De quanto em quanto tempo fazer limpeza facial?', a: 'Para a maioria dos homens, uma vez por mês é o suficiente para controlar oleosidade e cravos.' },
    ],
    related: ['barba-e-barboterapia', 'manicure-e-pedicure', 'tratamentos-capilares'],
  },
];

export const packages = [
  {
    slug: 'over-first-experience',
    name: 'Over First Experience',
    includes: 'Cabelo + barba',
    price: 135,
    badge: 'Primeira visita',
    description: 'A condição exclusiva para quem vem pela primeira vez: corte + barba com café de cortesia e valet gratuito.',
    highlight: true,
  },
  {
    slug: 'over-essence',
    name: 'Over Essence',
    includes: 'Corte, barba e ozonioterapia',
    price: 197,
    description: 'O combo completo com o tratamento de ozônio para o couro cabeludo e os fios.',
  },
  {
    slug: 'over-select',
    name: 'Over Select',
    includes: 'Cabelo, barba e unhas',
    price: 267,
    description: 'Cabelo, barba e manicure no mesmo horário. Sai pronto da cabeça aos pés.',
  },
  {
    slug: 'over-privilege',
    name: 'Over Privilege',
    includes: 'Corte e tratamento dos fios',
    price: 297,
    description: 'A experiência premium de cuidado capilar: corte com tratamento completo dos fios.',
  },
  {
    slug: 'open-barber',
    name: 'Open Barber',
    includes: 'Experiência exclusiva',
    price: 500,
    description: 'Nossa experiência mais completa. Fale com a equipe para montar o seu atendimento.',
  },
];

export const groomPackages = [
  {
    slug: 'dia-do-noivo-essence',
    name: 'Noivo Essence',
    guests: 4,
    price: 1999,
    image: 'dia-do-noivo-essence',
    description: 'A experiência essencial para o noivo compartilhar a preparação com o seu círculo mais próximo.',
  },
  {
    slug: 'dia-do-noivo-select',
    name: 'Noivo Select',
    guests: 6,
    price: 2499,
    image: 'dia-do-noivo-select',
    description: 'Uma experiência ampliada, criada para o noivo e um grupo selecionado de convidados.',
    featured: true,
  },
  {
    slug: 'dia-do-noivo-privilege',
    name: 'Noivo Privilege',
    guests: 8,
    price: 2999,
    image: 'dia-do-noivo-privilege',
    description: 'A experiência mais completa e exclusiva para celebrar a preparação do grande dia.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;
