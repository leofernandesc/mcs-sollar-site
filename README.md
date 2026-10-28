# MCS Sollar — Website institucional

Site institucional desenvolvido para a **MCS Sollar**, empresa de energia solar com atuação em Manaus (AM).

**Site:** https://mcssollar.com.br/

## O problema

Criar uma presença digital própria que apresentasse serviços e projetos, facilitasse o contato de potenciais clientes e permitisse acompanhar o interesse comercial gerado pelo site.

## A solução

- Página institucional responsiva com apresentação, serviços, processo de atendimento, dúvidas e contato.
- Chamadas para solicitação de orçamento pelo WhatsApp.
- Estrutura para descoberta em buscadores: metadados, URL canônica, `robots.txt`, sitemap e dados estruturados.
- Instrumentação para análise de interações com o WhatsApp e consentimento de privacidade. A coleta efetiva depende da configuração e publicação adequadas.
- Arquitetura de site estático, sem necessidade de servidor de aplicação para renderizar as páginas.

## IA no processo de desenvolvimento

Ferramentas de IA foram utilizadas como apoio à implementação e à iteração do produto. O papel da IA aqui é **acelerar a construção e revisão**, e não atender visitantes por meio de um chatbot. As decisões de conteúdo, identidade visual, requisitos e validação da experiência devem ser atribuídas ao trabalho humano.

**Tecnologias:** Astro, Tailwind CSS, TypeScript, HTML e integração com serviços de análise de tráfego.

## Executar localmente

Requer Node.js 22.12+ e npm.

```bash
npm ci
npm run dev
```

Para executar verificações e gerar o site estático:

```bash
npm run check
npm test
npm run build
```

A saída de produção é gerada em `dist/`.

## Organização e escopo

- `src/pages/`: páginas e rotas.
- `src/components/`: seções e elementos reutilizáveis.
- `src/data/`: dados e textos de negócio.
- `src/styles/`: estilos e tokens visuais.
- `tests/`: testes automatizados.
- `docs/`: decisões e especificações de desenvolvimento.

Este repositório representa **o código do site**, não uma comprovação de vendas ou resultados de campanhas. Cliques no WhatsApp não equivalem necessariamente a conversas iniciadas ou contratos fechados.

## Documentação

- [Arquitetura técnica](docs/ARCHITECTURE.md)
- [Especificação do produto](docs/SPEC.md)
- [Planejamento de marketing](docs/MARKETING-PLAN.md)
