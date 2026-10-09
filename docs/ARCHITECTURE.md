# Arquitetura Técnica — MCS Sollar, V1

Status: página institucional V1 implementada conforme esta arquitetura. [SPEC.md](SPEC.md) registra a evolução comercial aprovada; [MARKETING-PLAN.md](MARKETING-PLAN.md) organiza as entregas. A nova prioridade de orçamento e a aplicação da logo oficial ainda são mudanças planejadas. Domínio, hospedagem e SEO de publicação seguem TBD. As decisões técnicas abaixo permanecem vigentes.

## 1. Stack escolhida e justificativa

- **Astro:** componentes `.astro` renderizados em HTML durante o build, com `output: 'static'` explícito. Adequado ao conteúdo institucional e à indexação sem depender de execução no navegador.
- **Tailwind CSS:** estilos compilados no build, integração oficial via `@tailwindcss/vite`, com tokens de cor e tipografia centralizados. Não usar CDN de estilos em produção.
- **TypeScript onde útil:** dados locais, props e utilitários; não exige runtime no cliente. Evitar abstrações sem necessidade.
- **HTML nativo:** links, navegação por âncoras e controles de expansão. Nenhum framework de UI com hidratação é necessário em V1.

O scaffold usa as versões estáveis mais recentes disponíveis na sua criação, registra os limites de Node compatíveis e mantém o lockfile npm. Conferir compatibilidade ao atualizar as dependências.

## 2. Estrutura de diretórios

Estrutura atual. Arquivos `.gitkeep` mantêm diretórios ainda vazios no Git; tipos compartilhados e configurações adicionais só entram quando necessários:

```text
src/
  pages/
    index.astro          # Única página institucional
  layouts/
    site-layout.astro    # Documento HTML e metadados
  components/
    sections/            # Cabeçalho, apresentação, serviços, atendimento, sobre, FAQ, contato, rodapé
    ui/                  # Links de WhatsApp/Instagram, contêineres e títulos reutilizáveis
  data/
    business.ts          # Fatos comerciais confirmados
    content.ts           # Textos pt-BR e listas de seções
  types/                 # Tipos compartilhados somente quando necessários
  utils/                 # Composição de links e metadados no build
  assets/
    images/              # Imagens processadas pelo Astro
  styles/
    global.css           # Entrada Tailwind, tokens e estilos globais
public/                  # favicon.svg provisório e arquivos sem transformação
docs/                    # Documentação e referências recebidas
dist/                    # Resultado gerado; não versionar
```

Usar nomes de arquivo em kebab-case, conforme AGENTS.md. Os metadados atuais ficam em `content.ts`; centralizar a origem pública quando ela for definida, sem criar arquivos vazios para funcionalidades futuras.

## 3. Arquitetura de componentes

`site-layout.astro` controla `lang="pt-BR"`, metadados, favicon, estilos e link para pular ao conteúdo. A página compõe cabeçalho, um único `main`, seções e rodapé. As seções importam os dados locais; os componentes de UI expõem props tipadas quando precisam de variações.

Um componente reutilizável de link de WhatsApp recebe a intenção de contato ou orçamento e usa o número centralizado. O utilitário de composição codifica a mensagem com `encodeURIComponent` durante o build; o resultado é um link HTML normal. Não duplicar telefone ou textos comerciais nos componentes.

Preservar as intenções existentes `contact` e `quote`. A evolução comercial dará destaque principal a `quote`; a interface atual ainda prioriza contato geral. A mensagem estruturada de orçamento será texto estático nos dados locais, sem formulário, interpolação de dados do visitante ou script no navegador. Não ampliar a interface do utilitário sem uma necessidade aprovada.

`instagram-link.astro` usa o perfil centralizado em `business.ts`, com variantes de cabeçalho e rodapé, ícone SVG decorativo e rótulo acessível. O link abre na mesma aba; não há feed, SDK, rastreamento nem recursos carregados do Instagram durante a visita ao site.

Fluxo: dados locais → props e utilitários no build → HTML/CSS e imagens estáticas → navegador. Não há leitura de APIs ou dados comerciais em tempo de execução.

## 4. Arquitetura da página e das seções

Uma rota pública `/`, com navegação por fragmentos:

| Bloco | Identificador | Responsabilidade |
| --- | --- | --- |
| Cabeçalho | — | Marca, navegação e contato |
| Apresentação | `inicio` | H1, resumo e ações de contato/orçamento |
| Serviços | `servicos` | Projetos, instalações e manutenção |
| Atendimento | `atendimento` | Como iniciar a conversa |
| Sobre | `sobre` | Apresentação institucional aprovada |
| FAQ | `duvidas` | Perguntas e respostas em controles nativos |
| Contato | `contato` | WhatsApp e localização confirmada |
| Rodapé | — | Identificação e links pertinentes |

Preservar os identificadores para navegação e links compartilhados. Não incluir portfólio ou depoimentos sem material real autorizado. Imagens ilustrativas pertencem à apresentação ou aos serviços e recebem legenda; não são evidência de projetos realizados.

A seção de trabalhos reais está planejada após Serviços, com âncora `projetos` e acesso de navegação, somente após curadoria e validação. Ela continuará na rota `/`; não criar páginas de projetos, carrossel com JavaScript ou uma coleção de conteúdo antes de existir necessidade. Os controles nativos de menu e FAQ serão preservados.

## 5. Organização de conteúdo e dados

Manter módulos TypeScript locais, sem CMS ou coleções de conteúdo desnecessárias para uma página. Separar fatos confirmados, textos provisórios e configurações técnicas. Edições exigem novo build e publicação.

Os módulos conterão somente informações destinadas à divulgação. Referências financeiras, capacidade operacional, verba publicitária e critérios numéricos internos de qualificação não podem entrar no código, na documentação versionada, no histórico ou nos assets. O processamento no build não é uma proteção para informações internas. A qualificação será feita na conversa comercial; o site não coleta nem armazena os dados do visitante.

Fatos já fornecidos, que devem ser preservados:

| Informação | Valor confirmado |
| --- | --- |
| Nome público | MCS Sollar |
| Localidade atendida | Manaus, AM |
| Serviços | Projetos, instalações e manutenção em energia solar |
| Público inicial | Residências e empresas em Manaus |
| Conversão principal aprovada | Solicitar orçamento pelo WhatsApp; aplicação visual planejada |
| WhatsApp | +55 92 99996-0878 |
| Número para link | `5592999960878` |
| Mensagem de orçamento | “Olá! Gostaria de solicitar um orçamento de energia solar.” |
| Instagram | [@mcssollar](https://www.instagram.com/mcssollar/) |
| Informações iniciais para orçamento | Consumo mensal em kWh ou valor aproximado da conta, tipo de telhado e localização do imóvel |
| Referência oficial da marca | `WhatsApp Image 2026-10-08 at 22.38.08.jpeg`, recebida no acervo local |

Informações pendentes:

| Informação | Estado |
| --- | --- |
| Segmentos especializados e serviços adicionais | TBD |
| Endereço físico, horários, e-mail e outros perfis sociais | TBD |
| Razão social, CNPJ e outros identificadores não fornecidos | TBD |
| Cobertura além de Manaus | TBD |
| Procedimentos técnicos adicionais, prazos e diferenciais comprovados | TBD |
| Anos de atuação, estatísticas e certificações | TBD |
| Garantias, financiamento e outras condições comerciais | TBD; preços não serão divulgados |
| Identificação dos trabalhos, autoria, autorização e depoimentos | TBD; acervo recebido, ainda não validado para publicação |
| Revisão dos novos textos e da aplicação da logo oficial | TBD |

Registrar pendências como **TBD** na documentação. Nos futuros dados, representar campos opcionais não resolvidos como ausentes; não renderizar o texto “TBD”, inventar valores nem incluir pendências em dados estruturados. Conteúdo obrigatório ainda não aprovado impede a publicação daquele conteúdo.

## 6. Organização de assets

Os arquivos em `docs/references/` são referências históricas, não assets finais de produção. A logo oficial recebida é um JPEG de 911 × 456 px, ainda fora do repositório; aplicar a composição aprovada preservando proporções. Não reutilizar o anúncio inteiro nem outras variantes como logo.

O cabeçalho e `public/favicon.svg` ainda usam símbolos provisórios. Na entrega de marca, aplicar a logo recebida e alinhar os tokens e o favicon ao azul-marinho, dourado e creme definidos como referência na SPEC. Os valores derivados do JPEG são aproximações, não um manual vetorial da marca; validar contraste e legibilidade na aplicação.

Importar fotografias locais de `src/assets/` para processamento com as ferramentas de imagem do Astro. Gerar tamanhos responsivos, formatos eficientes e dimensões explícitas. Usar `public/` apenas para arquivos que precisam permanecer inalterados. SVGs podem ser usados para marca e ícones após revisão.

Registrar origem, licença/autorização e condição ilustrativa de cada imagem. Começar com fontes de sistema; qualquer fonte adicional deverá ser licenciada e hospedada localmente.

O acervo bruto e os arquivos ZIP permanecem fora do Git e de `public/`. Antes da importação, revisar documentos, contatos, endereços, placas, identificadores, telas, pessoas, nomes de arquivos e metadados. Excluir documentos e capturas de aplicativos da seleção de portfólio. Só incluir versões revisadas e autorizadas; descartar mídia cuja privacidade ou autoria não possa ser confirmada. Pranchas de curadoria com conteúdo privado também permanecem fora do repositório.

As fotos aprovadas poderão ocupar `src/assets/images/projects/`, criado apenas nessa entrega. Não deduzir detalhes técnicos ou agrupar arquivos como um projeto sem confirmação. Remover a legenda de imagem ilustrativa somente ao substituí-la por foto real validada.

Vídeos serão avaliados em entrega posterior. Revisar imagem e áudio integrais; preparar versões otimizadas fora do build de imagens, pois Astro não comprime vídeos. Servir somente derivados aprovados como arquivos estáticos, com player HTML nativo, controles, poster, dimensões reservadas e `preload="none"`. Não usar autoplay nem embeds externos; fornecer legendas ou transcrição quando houver fala essencial. Não criar diretórios ou adicionar dependências de vídeo nesta etapa.

## 7. Estratégia responsiva

Aplicar estilos de base para celular, contêineres fluidos, espaçamento consistente e colunas empilhadas. Usar breakpoints do Tailwind para distribuir conteúdo em grades quando houver espaço, sem depender de modelos específicos de aparelho.

Garantir ausência de overflow desde 320 px, leitura confortável, zoom e orientação horizontal. O menu móvel usa `<details>/<summary>`; a navegação ampla permanece visível no desktop. Evitar conteúdo essencial exposto apenas em hover. Ações fixas, se utilizadas, devem respeitar conteúdo, foco e área segura do dispositivo.

O cabeçalho usa navegação desktop a partir de 1024 px e mantém Instagram como ação secundária ao WhatsApp. Os serviços ficam empilhados abaixo de 768 px e em três colunas a partir desse tamanho.

## 8. Arquitetura de SEO

Gerar título, descrição, metadados sociais e HTML semântico no build. Manter um H1, hierarquia coerente e textos úteis em pt-BR, com foco na localidade confirmada.

**URL pública/domínio: TBD.** Centralizar a origem de produção na configuração e utilizá-la para `site` do Astro, canonical, sitemap e URLs de compartilhamento. Gerar sitemap e robots como arquivos estáticos após definir a origem; fragmentos de seção não são páginas adicionais. Não publicar canonical fictício ou apontado para localhost. Prévias públicas deverão usar `noindex`, sem depender apenas de robots para impedir indexação; essa configuração faz parte da preparação da publicação.

JSON-LD, quando incluído, será gerado no build e conterá somente fatos confirmados e visíveis. Não fabricar endereço para atender requisitos de um tipo de negócio local; omitir tipos/propriedades sem dados suficientes. A ausência de endereço pode limitar recursos de busca local, mas não impede a página institucional.

## 9. Estratégia de acessibilidade

Meta WCAG 2.2 AA: landmarks, títulos em ordem lógica, link para pular navegação, foco visível, nomes acessíveis e contraste adequado. Links de contato continuam sendo links, não botões sem destino; ícones decorativos não substituem rótulos.

Usar controles nativos no menu e FAQ, textos alternativos apropriados, áreas de toque confortáveis e respeito à preferência de movimento reduzido. Conferir teclado, zoom, leitor de tela e contraste das combinações reais; avaliações automáticas não substituem a revisão manual.

## 10. Estratégia de desempenho

Preservar as metas da SPEC: Lighthouse mobile ≥ 90; LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1. Validar em laboratório antes do lançamento e com dados de campo quando houver tráfego.

Não carregar JavaScript de aplicação por padrão. Compilar CSS, otimizar imagens e reservar suas dimensões. Não aplicar lazy loading à imagem principal visível; carregar mídia abaixo da primeira tela sob demanda. Evitar fontes externas, vídeos automáticos, mapas incorporados, bibliotecas de animação e dependências sem função concreta.

## 11. Premissas de deployment

**Provedor de hospedagem: TBD.** A arquitetura permanece independente de fornecedor. O build Astro produz `dist/`, publicável em qualquer serviço de arquivos estáticos com HTTPS. Node é necessário no ambiente de build, não como servidor de produção.

Não exigir adaptador de hospedagem, SDK de fornecedor, funções serverless ou infraestrutura de backend. O destino deve servir a página de entrada e seus assets; não há necessidade de fallback de SPA. A premissa inicial é publicação na raiz; caso o destino exija subdiretório, configurar `base` e validar URLs antes do build de publicação.

O scaffold registra faixa de Node compatível, instalação reproduzível por `package-lock.json` e comandos npm de desenvolvimento, build e preview. Domínio e configuração de produção devem ser definidos antes do lançamento. Não há configuração de provedor nesta etapa.

Não presumir o estado de produção a partir do preview ou do GitHub. A substituição do site antigo depende de confirmação da infraestrutura, revisão do build, HTTPS, DNS e autorização de publicação própria. O site antigo não é fonte de conteúdo ou identidade; suas URLs poderão ser inspecionadas somente para preparar redirecionamentos relevantes.

## 12. Conteúdo estático e JavaScript no cliente

| Recurso | Implementação prevista |
| --- | --- |
| Conteúdo, layout, serviços e imagens | HTML/CSS gerados no build |
| Links de navegação, WhatsApp e Instagram | Âncoras HTML estáticas |
| Orientações e mensagem de orçamento estruturada | Evolução planejada; texto e links gerados no build, sem formulário |
| Menu móvel e FAQ | `<details>/<summary>` nativos |
| Título, descrição e metadados sociais básicos | Saída estática implementada |
| Canonical, sitemap, robots e JSON-LD | Preparação da publicação; saída estática futura |
| Analytics, pixels e integrações | Fora da V1 |

Nenhum JavaScript de aplicação no cliente é necessário na arquitetura inicial. Não adicionar hidratação com `client:*`, roteador de SPA ou framework de UI. Um script futuro só poderá atender uma interação documentada, com melhoria progressiva e conteúdo/contato utilizáveis sem ele; não faz parte desta entrega.

Preparar o conteúdo para Google Ads não autoriza instalar GA4, GTM, pixels ou outros scripts. Inicialmente, o acompanhamento comercial será manual e externo ao site. Uma futura proposta de mensuração deve distinguir clique, conversa, lead qualificado e venda, tratar privacidade e duplicidade e atualizar explicitamente o escopo antes de implementar tags. Páginas adicionais de campanha também continuam fora da V1.

## Riscos e verificações futuras

- **Marca recebida:** a referência oficial é um JPEG; revisar sua aplicação e legibilidade antes da publicação.
- **Contraste:** verificar as combinações reais, especialmente o acento laranja atual e o dourado planejado; manter foco e marcadores interativos com contraste suficiente.
- **Compatibilidade:** manter o lockfile e conferir versões Astro/Tailwind/Node ao atualizar dependências.
- **Origem de produção:** TBD impede finalizar canonical, sitemap e compartilhamento para lançamento.
- **SEO de página única:** limita páginas dedicadas a serviços; manter conteúdo útil sem prometer ranking.
- **WhatsApp:** número confirmado não comprova disponibilidade da conta; testar destino e mensagem em dispositivos reais.
- **Mídias:** disponibilidade de um arquivo não comprova autoria ou autorização; aplicar curadoria, revisão de privacidade e confirmação antes de divulgar.
- **Qualidade:** rodar `npm run check`, `npm run build` e verificações responsivas/de teclado após alterações. Auditorias automáticas devem ser complementadas por inspeção manual de contraste, conteúdo e interação.

## Referências técnicas

Documentação oficial consultada nesta definição: [componentes Astro](https://docs.astro.build/en/basics/astro-components/), [configuração Astro](https://docs.astro.build/en/reference/configuration-reference/), [Tailwind com Astro](https://tailwindcss.com/docs/installation/framework-guides/astro) e [imagens Astro](https://docs.astro.build/en/guides/images/).
