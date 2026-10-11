import { business } from "./business";

export const pageContent = {
  seo: {
    title: `Energia Solar em ${business.city} | ${business.name}`,
    description:
      `Projetos, instalações e manutenção de sistemas de energia solar para residências e empresas em ${business.city}. Solicite seu orçamento.`,
  },
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Atendimento", href: "#atendimento" },
    { label: "Sobre", href: "#sobre" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ],
  hero: {
    title: "Energia solar para sua residência ou empresa",
    description:
      "A MCS Sollar oferece projetos, instalações e manutenção de sistemas fotovoltaicos para residências e empresas em Manaus. O orçamento considera o consumo de energia e as características de cada imóvel.",
    imageAlt:
      "Módulos fotovoltaicos instalados sobre uma cobertura com telhas cerâmicas.",
    imageCaption: "Módulos fotovoltaicos sobre uma cobertura.",
    quotationLabel: "Solicitar orçamento",
    servicesLabel: "Conhecer nossos serviços",
  },
  servicesDescription:
    "Soluções em energia solar para residências e empresas em Manaus.",
  services: [
    {
      title: business.services[0],
      description:
        "Projetos de sistemas fotovoltaicos considerando o consumo de energia e as características do imóvel.",
      imageAlt:
        "Visualização tridimensional de uma cobertura com módulos fotovoltaicos.",
      imageCaption:
        "Visualização de uma cobertura com módulos fotovoltaicos.",
    },
    {
      title: business.services[1],
      description:
        "Instalação de sistemas de energia solar para residências e empresas em Manaus.",
      imageAlt:
        "Alicate amperímetro em primeiro plano, com componentes elétricos ao fundo.",
      imageCaption:
        "Medição com alicate amperímetro em componentes do sistema fotovoltaico.",
    },
    {
      title: business.services[2],
      description:
        "Manutenção de sistemas fotovoltaicos para residências e empresas.",
      imageAlt:
        "Profissional realiza uma atividade junto a um inversor e componentes de proteção.",
      imageCaption:
        "Registro de atividade de manutenção em sistema fotovoltaico.",
    },
  ],
  service: {
    title: "Como solicitar um orçamento",
    description:
      "Reúna algumas informações sobre o consumo e o imóvel para iniciar a conversa com a equipe da MCS Sollar.",
    steps: [
      {
        title: "Informe o consumo",
        description:
          "Conte o consumo mensal em kWh ou o valor aproximado da conta de energia.",
      },
      {
        title: "Descreva o imóvel",
        description:
          "Informe o tipo de telhado e a localização onde seria feita a instalação.",
      },
      {
        title: "Converse com a equipe",
        description:
          "Com essas informações, a equipe poderá orientar os próximos passos para elaborar o orçamento.",
      },
    ],
  },
  about: {
    title: "Sobre a MCS Sollar",
    description:
      "A MCS Sollar atende residências e empresas em Manaus com projetos, instalações e manutenção em energia solar. Cada solicitação de orçamento considera o consumo de energia e as características do imóvel.",
    inverterImageAlt:
      "Inversor fotovoltaico instalado ao lado de componentes de proteção elétrica.",
    inverterImageCaption: "Registro de instalação de inversor fotovoltaico.",
    safetyImageAlt:
      "Placa com alerta de risco de choque elétrico em geração própria.",
    safetyImageCaption:
      "Sinalização de risco elétrico em uma instalação fotovoltaica.",
  },
  faq: [
    {
      question: "Quais informações preciso enviar para pedir um orçamento?",
      answer:
        "Informe o consumo mensal em kWh ou o valor aproximado da conta de energia, o tipo de telhado e a localização do imóvel. A equipe poderá solicitar outras informações conforme a necessidade.",
    },
    {
      question: "A MCS Sollar atende residências e empresas?",
      answer:
        "Sim. O atendimento informado pela MCS Sollar inclui residências e empresas em Manaus, com projetos, instalações e manutenção de sistemas fotovoltaicos.",
    },
    {
      question: "O que é considerado na elaboração do orçamento?",
      answer:
        "O consumo de energia e as características do imóvel. A equipe pode pedir informações adicionais conforme a necessidade de cada solicitação.",
    },
  ],
  contact: {
    title: "Solicite um orçamento de energia solar",
    description: "Converse com a MCS Sollar pelo WhatsApp.",
  },
} as const;
