// Artigos do blog — conteúdo em HTML simples. Cada post mira uma intenção de busca local.
export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string; // ISO
  image: string;
  imageAlt: string;
  readTime: string;
  tags: string[];
  body: string;
};

export const posts: Post[] = [
  {
    slug: 'dia-do-noivo-na-barbearia-guia-completo',
    title: 'Dia do Noivo na barbearia: guia completo para o grande dia em Fortaleza',
    seoTitle: 'Dia do Noivo na Barbearia: Guia Completo | Over Barber',
    description:
      'Quando agendar, quantos convidados levar, o que fazer no cabelo, na barba e na pele. Tudo sobre o Dia do Noivo na barbearia, com pacotes e preços.',
    date: '2026-11-10',
    image: 'dia-do-noivo',
    imageAlt: 'Sapatos, perfume e convite de casamento preparados para o Dia do Noivo',
    readTime: '6 min',
    tags: ['Dia do Noivo', 'Casamento'],
    body: `
<p>O dia do casamento é um dos mais fotografados da sua vida. E, diferente do vestido da noiva, o visual do noivo depende quase inteiro de três coisas: <strong>cabelo, barba e pele</strong>. Por isso o Dia do Noivo na barbearia virou tradição — um momento para chegar no altar alinhado e, de quebra, viver uma experiência com os amigos mais próximos.</p>
<h2>Quando agendar o Dia do Noivo?</h2>
<p>O ideal é fazer a preparação <strong>no dia do casamento ou na véspera</strong>. Mas o planejamento começa antes:</p>
<ul>
<li><strong>4 a 6 semanas antes:</strong> faça um corte de teste. Assim o barbeiro entende o seu cabelo e você define o estilo sem pressa.</li>
<li><strong>2 semanas antes:</strong> último corte "de base" se o seu estilo for mais longo; limpeza facial para a pele chegar renovada.</li>
<li><strong>No grande dia:</strong> acabamento do corte, barba desenhada na navalha, sobrancelha e finalização.</li>
</ul>
<h2>Cabelo: o corte certo para as fotos</h2>
<p>Evite mudanças radicais perto do casamento. Prefira um corte que você já conhece e que combine com o traje. Para ternos clássicos, cortes sociais na tesoura e estilos <em>old money</em> funcionam muito bem nas fotos — e não "desmontam" ao longo da festa.</p>
<h2>Barba: desenho e hidratação</h2>
<p>Se você usa barba, ela precisa estar <strong>desenhada e hidratada</strong>. Uma barboterapia com toalha quente e óleo deixa os fios macios e reduz o brilho excessivo da pele nas fotos. Se prefere o rosto liso, a navalha com preparação adequada evita irritações.</p>
<h2>Pele e detalhes</h2>
<p>Limpeza facial, sobrancelha na navalha (só tirando o excesso) e manicure fazem diferença nas fotos de aliança — aquelas em que suas mãos aparecem em close.</p>
<h2>Quantos convidados levar?</h2>
<p>Padrinhos, pai, irmãos, aquele amigo de infância. Na Over Barber Conceito, os pacotes de Dia do Noivo foram pensados para diferentes tamanhos de grupo:</p>
<ul>
<li><strong>Noivo Essence</strong> — noivo + 4 convidados — R$ 1.999</li>
<li><strong>Noivo Select</strong> — noivo + 6 convidados — R$ 2.499</li>
<li><strong>Noivo Privilege</strong> — noivo + 8 convidados — R$ 2.999</li>
</ul>
<p>Tudo isso com ambiente exclusivo, bebidas e valet gratuito na porta, no Meireles.</p>
<h2>Checklist rápido do noivo</h2>
<ol>
<li>Corte de teste agendado com antecedência</li>
<li>Pacote do Dia do Noivo reservado (datas de sábado esgotam rápido)</li>
<li>Lista de convidados confirmada</li>
<li>Traje pronto antes da barbearia</li>
<li>Perfume, abotoaduras e alianças separados</li>
</ol>
<p>Quer reservar a data? <a href="/dia-do-noivo/">Conheça os pacotes de Dia do Noivo</a> ou fale com a equipe pelo WhatsApp.</p>
`,
  },
  {
    slug: 'camuflagem-de-fios-brancos-como-funciona',
    title: 'Camuflagem de fios brancos: o que é, como funciona e quanto dura',
    seoTitle: 'Camuflagem de Fios Brancos: Como Funciona e Quanto Dura',
    description:
      'Entenda a diferença entre camuflagem e coloração, quanto tempo dura, se fica natural e quanto custa a camuflagem de cabelo e barba em Fortaleza.',
    date: '2026-11-03',
    image: 'cliente-corte-masculino-perfil',
    imageAlt: 'Homem de perfil com cabelo e barba alinhados após camuflagem natural',
    readTime: '5 min',
    tags: ['Camuflagem', 'Cabelo', 'Barba'],
    body: `
<p>Os primeiros fios brancos costumam aparecer na barba e nas laterais do cabelo. Alguns homens assumem o grisalho com orgulho — e fica ótimo. Outros querem apenas <strong>suavizar o contraste</strong> sem parecer que pintaram o cabelo. É aí que entra a camuflagem.</p>
<h2>O que é a camuflagem?</h2>
<p>A camuflagem é uma técnica de pigmentação suave que <strong>reduz a aparência dos fios brancos</strong> sem cobri-los 100%. O resultado é um tom mais uniforme, natural, que parece o seu. A ideia é que ninguém perceba que algo foi feito — só que você parece mais descansado.</p>
<h2>Camuflagem x coloração</h2>
<ul>
<li><strong>Camuflagem:</strong> cobertura parcial, efeito natural, sai de forma gradual, sem marcação de raiz.</li>
<li><strong>Coloração:</strong> cobertura total, muda o tom de forma mais evidente e exige retoque de raiz.</li>
</ul>
<h2>Onde dá para fazer?</h2>
<p>Cabelo, barba e sobrancelha. Muitos clientes fazem só a barba, que é onde o branco aparece primeiro.</p>
<h2>Quanto tempo dura?</h2>
<p>Em média de <strong>3 a 4 semanas</strong>. Como sai aos poucos, não há aquele efeito de raiz marcada — e dá para refazer junto com o corte.</p>
<h2>Quanto custa em Fortaleza?</h2>
<p>Na Over Barber Conceito, no Meireles: camuflagem de cabelo R$ 100, de barba R$ 80 e de sobrancelha R$ 40, cerca de 30 minutos cada, no mesmo horário do corte ou da barba.</p>
<p><a href="/servicos/camuflagem-de-fios-brancos/">Veja detalhes do serviço de camuflagem</a>.</p>
`,
  },
  {
    slug: 'barboterapia-o-que-e-beneficios',
    title: 'Barboterapia: o que é, benefícios e por que vale a pena',
    seoTitle: 'Barboterapia: O Que É e Benefícios | Over Barber',
    description:
      'Barboterapia é o ritual completo de cuidado com a barba: vapor, toalhas quentes, navalha, massagem e hidratação. Veja os benefícios e quando fazer.',
    date: '2026-10-27',
    image: 'barba-na-navalha-detalhes',
    imageAlt: 'Barbeiro desenhando a barba do cliente com navalha',
    readTime: '4 min',
    tags: ['Barba', 'Barboterapia'],
    body: `
<p>Aparar a barba resolve o comprimento. A <strong>barboterapia</strong> resolve a barba inteira — fio, pele e desenho — e ainda é um dos momentos mais relaxantes que você pode ter numa barbearia.</p>
<h2>Como funciona a barboterapia</h2>
<ol>
<li><strong>Vapor e toalha quente:</strong> abrem os poros e amaciam os fios.</li>
<li><strong>Limpeza e esfoliação:</strong> removem impurezas e células mortas, ajudando contra pelos encravados.</li>
<li><strong>Desenho na navalha:</strong> linhas definidas de acordo com o formato do seu rosto.</li>
<li><strong>Massagem e hidratação:</strong> óleos e balms deixam a barba macia e alinhada.</li>
<li><strong>Toalha fria:</strong> fecha os poros e finaliza o ritual.</li>
</ol>
<h2>Benefícios</h2>
<ul>
<li>Menos irritação e pelos encravados</li>
<li>Barba mais macia e com aspecto saudável</li>
<li>Pele limpa e hidratada sob a barba</li>
<li>Desenho que dura mais tempo</li>
<li>Relaxamento real — muita gente cochila na cadeira</li>
</ul>
<h2>De quanto em quanto tempo fazer?</h2>
<p>A cada 2 a 4 semanas, dependendo do crescimento e do estilo. Entre uma sessão e outra, use óleo ou balm diariamente.</p>
<p>Na Over Barber Conceito, a barboterapia custa R$ 100 e a barba tradicional R$ 80. <a href="/servicos/barba-e-barboterapia/">Conheça o serviço</a>.</p>
`,
  },
  {
    slug: 'de-quanto-em-quanto-tempo-cortar-cabelo-masculino',
    title: 'De quanto em quanto tempo cortar o cabelo masculino?',
    seoTitle: 'De Quanto em Quanto Tempo Cortar o Cabelo Masculino?',
    description:
      'Degradê, social, médio ou longo: veja a frequência ideal de corte para cada estilo e como o pezinho ajuda a manter o visual entre um corte e outro.',
    date: '2026-10-20',
    image: 'acabamento-barba-maquina',
    imageAlt: 'Acabamento com máquina na nuca durante corte masculino',
    readTime: '4 min',
    tags: ['Corte masculino', 'Dicas'],
    body: `
<p>O cabelo cresce, em média, <strong>1 a 1,5 cm por mês</strong>. Em cortes curtos, isso já é suficiente para o desenho perder a forma. A frequência ideal depende do estilo:</p>
<h2>Frequência por estilo</h2>
<ul>
<li><strong>Degradê / fade:</strong> a cada 2 a 3 semanas — o degradê é o primeiro a "sumir".</li>
<li><strong>Social curto:</strong> a cada 3 a 4 semanas.</li>
<li><strong>Médio / texturizado:</strong> a cada 4 a 6 semanas.</li>
<li><strong>Longo:</strong> a cada 6 a 8 semanas, para tirar pontas e manter o formato.</li>
</ul>
<h2>O truque do pezinho</h2>
<p>Entre um corte e outro, o <strong>pezinho</strong> refaz a linha da nuca e do contorno. É rápido, deixa o corte alinhado por mais tempo e custa menos que um corte completo (R$ 40 na Over Barber Conceito).</p>
<h2>Sinais de que já passou da hora</h2>
<ul>
<li>O cabelo não obedece mais ao pente nem ao produto</li>
<li>A nuca e a costeleta perderam a linha</li>
<li>As laterais começaram a "abrir"</li>
</ul>
<p>Quer manter o corte sempre em dia? <a href="/servicos/corte-masculino/">Agende seu corte masculino no Meireles</a>.</p>
`,
  },
];
