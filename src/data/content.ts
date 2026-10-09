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
    { label: "Atendimento", href: "#atendimento" },
    { label: "Sobre", href: "#sobre" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ],
  hero: {
    title: "Energia solar em Manaus para sua residência ou empresa",
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
  service: {
    title: "Como solicitar atendimento",
    description: "Abra uma conversa no WhatsApp e conte qual serviço procura.",
  },
  about: {
    title: "Sobre a MCS Sollar",
    description:
      "A MCS Sollar atende residências e empresas em Manaus com projetos, instalações e manutenção em energia solar. Cada solicitação de orçamento considera o consumo de energia e as características do imóvel.",
  },
  faq: [
    {
      question: "Como solicitar um orçamento?",
      answer: "Use o botão Solicitar orçamento para conversar pelo WhatsApp.",
    },
    {
      question: "Quais serviços são oferecidos?",
      answer: "Projetos, instalações e manutenção em energia solar.",
    },
  ],
  contact: {
    title: "Solicite um orçamento de energia solar",
    description: "Converse com a MCS Sollar pelo WhatsApp.",
  },
} as const;
