import { business } from "./business";

export const pageContent = {
  seo: {
    title: `${business.name} | Energia Solar em Manaus`,
    description:
      "Projetos, instalações e manutenção em energia solar em Manaus. Converse com a MCS Sollar pelo WhatsApp.",
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
    title: "Energia solar em Manaus",
    description:
      "Projetos, instalações e manutenção em energia solar. Converse com a MCS Sollar e solicite um orçamento para sua necessidade.",
    contactLabel: "Fale pelo WhatsApp",
    quotationLabel: "Solicitar orçamento",
  },
  services: [
    {
      title: business.services[0],
      description: "Precisa de um projeto de energia solar? Fale com a MCS Sollar sobre sua necessidade.",
    },
    {
      title: business.services[1],
      description: "Solicite um orçamento para instalação de energia solar em Manaus.",
    },
    {
      title: business.services[2],
      description: "Entre em contato para consultar os serviços de manutenção em energia solar.",
    },
  ],
  service: {
    title: "Como solicitar atendimento",
    description: "Abra uma conversa no WhatsApp e conte qual serviço procura.",
  },
  about: {
    title: "Sobre a MCS Sollar",
    description:
      "A MCS Sollar oferece projetos, instalações e manutenção em energia solar em Manaus. Entre em contato pelo WhatsApp para conhecer os serviços e solicitar um orçamento.",
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
