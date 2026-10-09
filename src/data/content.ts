import { business } from "./business";

export const pageContent = {
  seo: {
    title: `${business.name} | Energia Solar em Manaus`,
    description:
      "Projetos, instalações e manutenção de energia solar para residências e empresas em Manaus. Solicite um orçamento personalizado à MCS Sollar pelo WhatsApp.",
  },
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Atendimento", href: "#atendimento" },
    { label: "Sobre", href: "#sobre" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ],
  hero: {
    title: "Energia solar para sua residência ou empresa",
    description:
      "A MCS Sollar oferece projetos, instalações e manutenção de sistemas fotovoltaicos para residências e empresas em Manaus. O orçamento considera o consumo de energia e as características de cada imóvel.",
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
    },
    {
      title: business.services[1],
      description:
        "Instalação de sistemas de energia solar para residências e empresas em Manaus.",
    },
    {
      title: business.services[2],
      description:
        "Manutenção de sistemas fotovoltaicos para residências e empresas.",
    },
  ],
  projects: {
    title: "Trabalhos realizados",
    description:
      "Alguns registros de sistemas fotovoltaicos realizados pela MCS Sollar.",
    items: [
      {
        alt: "Painéis solares sobre o telhado de uma residência.",
        caption: "Sistema fotovoltaico em imóvel residencial.",
      },
      {
        alt: "Módulos solares sobre uma cobertura de telhas cerâmicas.",
        caption: "Instalação sobre cobertura cerâmica.",
      },
      {
        alt: "Fileiras de módulos solares em uma estrutura montada no solo.",
        caption: "Sistema fotovoltaico em estrutura no solo.",
      },
    ],
  },
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
