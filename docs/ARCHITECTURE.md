# Arquitetura Técnica — MCS Sollar, V1

Status: página institucional V1 implementada conforme esta arquitetura, com saída estática para `https://mcssollar.com.br/` e hospedagem informada HostGator/cPanel. [SPEC.md](SPEC.md) registra a evolução comercial aprovada; [MARKETING-PLAN.md](MARKETING-PLAN.md) organiza as entregas. O orçamento tem um CTA único no Hero e no contato final; a logo oficial, a paleta derivada e fotos selecionadas estão aplicadas junto aos serviços e nas seções Hero/Sobre. Em Sobre, o texto fica à esquerda e duas fotos ficam à direita no desktop; em telas menores, conteúdo e imagens empilham. O vídeo autorizado está na coluna Projetos; não há galeria separada. A integração GA4 com consentimento explícito está no código; sua publicação depende das aprovações de privacidade pendentes. As decisões técnicas abaixo permanecem vigentes.

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
    sections/            # Cabeçalho, apresentação, serviços, trabalhos, atendimento, sobre, FAQ, contato, rodapé
    ui/                  # Links de WhatsApp/Instagram, contêineres e títulos reutilizáveis
  data/
    business.ts          # Fatos comerciais confirmados
    content.ts           # Textos pt-BR e listas de seções
  types/                 # Tipos compartilhados somente quando necessários
  utils/                 # Composição de links e metadados no build
  assets/
    images/              # Logo e imagens locais processadas pelo Astro
      projects/          # Derivados WebP autorizados, sem metadados
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

Preservar as intenções existentes `contact` e `quote`. O Hero e o contato final exibem uma única ação de orçamento; contato geral permanece em seções distintas. Não colocar os dois links de WhatsApp lado a lado no mesmo grupo visual. A mensagem estruturada de orçamento é texto estático nos dados locais, sem formulário, interpolação de dados do visitante ou script no navegador. Não ampliar a interface do utilitário sem uma necessidade aprovada.

`instagram-link.astro` usa o perfil centralizado em `business.ts`, com variantes de cabeçalho e rodapé, ícone SVG decorativo e rótulo acessível. O link abre na mesma aba; não há feed, SDK, rastreamento nem recursos carregados do Instagram durante a visita ao site.

Fluxo: dados locais → props e utilitários no build → HTML/CSS e imagens estáticas → navegador. Não há leitura de APIs ou dados comerciais em tempo de execução.

## 4. Arquitetura da página e das seções

Uma rota pública `/`, com navegação por fragmentos:

| Bloco | Identificador | Responsabilidade |
| --- | --- | --- |
| Cabeçalho | — | Marca, navegação e contato |
| Apresentação | `inicio` | H1, resumo e ações de contato/orçamento |
| Serviços | `servicos` | Projetos, instalações e manutenção, cada um acompanhado por uma foto selecionada |
| Atendimento | `atendimento` | Como iniciar a conversa |
| Sobre | `sobre` | Apresentação institucional aprovada |
| FAQ | `duvidas` | Perguntas e respostas em controles nativos |
| Contato | `contato` | WhatsApp e localização confirmada |
| Rodapé | — | Identificação e links pertinentes |

Preservar os identificadores das seções que permanecem no site. Cada serviço tem uma foto no respectivo bloco. Em Sobre, a introdução institucional fica à esquerda e a galeria assimétrica com duas fotos à direita no desktop; em celular e tablet, a introdução fica acima das imagens. A foto do inversor ocupa três quintos da galeria e a placa ocupa dois quintos. Não afirmar que as imagens representam clientes ou projetos específicos nem alegar conformidade ou certificação com base na sinalização. Não criar páginas de projetos, carrossel com JavaScript ou coleção de conteúdo antes de existir necessidade. Os controles nativos de menu e FAQ serão preservados.

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
| Conversão principal aprovada | Solicitar orçamento pelo WhatsApp; um único CTA por grupo visual no Hero e no contato final |
| WhatsApp | +55 92 99996-0878 |
| Número para link | `5592999960878` |
| Mensagem de orçamento | “Olá! Gostaria de solicitar um orçamento de energia solar.” |
| Instagram | [@mcssollar](https://www.instagram.com/mcssollar/) |
| Informações iniciais para orçamento | Consumo mensal em kWh ou valor aproximado da conta, tipo de telhado e localização do imóvel |
| Referência/asset oficial da marca | `src/assets/images/brand/mcs-sollar-official.jpeg`, JPEG recebido e armazenado sem alterações |

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
| Autoria e uso das fotos selecionadas | Mídias indicadas pelo responsável; derivados sem metadados em `src/assets/images/hero/`, `src/assets/images/services/` e `src/assets/images/about/` |
| Detalhes específicos dos trabalhos, clientes, localização e capacidade | TBD; não são exibidos |
| Depoimentos e outras provas de confiança | TBD |
| Revisão final do texto comercial e da aplicação responsiva da logo | TBD |

Registrar pendências como **TBD** na documentação. Nos futuros dados, representar campos opcionais não resolvidos como ausentes; não renderizar o texto “TBD”, inventar valores nem incluir pendências em dados estruturados. Conteúdo obrigatório ainda não aprovado impede a publicação daquele conteúdo.

## 6. Organização de assets

Os arquivos em `docs/references/` são referências históricas, não assets finais de produção. A logo oficial recebida é um JPEG de 911 × 456 px armazenado em `src/assets/images/brand/mcs-sollar-official.jpeg`. O componente do cabeçalho usa `astro:assets` para gerar uma imagem WebP responsiva, mantendo a proporção e a composição completa. O original permanece sem modificação. Não reutilizar o anúncio inteiro nem outras variantes como logo.

O cabeçalho exibe a composição oficial da logo. `public/favicon.svg` mantém um símbolo simplificado para leitura em tamanho pequeno. Os tokens `brand-navy`, `brand-gold` e `brand-cream` usam valores aproximados amostrados do JPEG, não um manual vetorial da marca. O dourado é decorativo e não deve ser usado para texto essencial, foco ou marcadores interativos sobre creme; validar a legibilidade da logo em larguras de celular e desktop.

Importar fotografias locais de `src/assets/` para processamento com as ferramentas de imagem do Astro. Gerar tamanhos responsivos, formatos eficientes e dimensões explícitas. SVGs podem ser usados para marca e ícones após revisão.

Registrar origem, licença/autorização e condição ilustrativa de cada imagem. Começar com fontes de sistema; qualquer fonte adicional deverá ser licenciada e hospedada localmente.

O acervo bruto e os arquivos ZIP permanecem fora do Git e de `public/`. Antes da importação, revisar documentos, contatos, endereços, placas, identificadores, telas, pessoas, nomes de arquivos e metadados. Excluir documentos e capturas de aplicativos. Só incluir versões revisadas e autorizadas; descartar mídia cuja privacidade ou autoria não possa ser confirmada. Pranchas de curadoria com conteúdo privado também permanecem fora do repositório.

As mídias aprovadas estão em `src/assets/images/hero/`, `src/assets/images/services/` e `src/assets/images/about/`; `astro:assets` gera variantes responsivas em WebP. A imagem de Instalações usa o JPEG original aprovado, sem metadados, mantendo o visor nítido e a leitura exatamente como registrada, sem reconstrução ou alteração. As imagens de Instalações e Manutenção mantêm seus quadros completos. Marcas manuscritas acima da placa de alerta foram removidas do derivado. Sobre reúne duas imagens: instalação de inversor e placa de sinalização de risco elétrico. A placa é apenas um registro visual, sem alegação de conformidade ou certificação. A foto dos painéis usada no Hero exclui a numeração da casa vizinha e uma pessoa na borda. O plano foi recebido como captura estática e não é extraído de um vídeo. O vídeo autorizado está na coluna Projetos, servido como arquivo estático, sem áudio, com controles e sem autoplay. Não deduzir detalhes técnicos nem associar imagens a clientes ou projetos específicos sem confirmação.

## 7. Estratégia responsiva

Aplicar estilos de base para celular, contêineres fluidos, espaçamento consistente e colunas empilhadas. Usar breakpoints do Tailwind para distribuir conteúdo em grades quando houver espaço, sem depender de modelos específicos de aparelho.

Garantir ausência de overflow desde 320 px, leitura confortável, zoom e orientação horizontal. O menu móvel usa `<details>/<summary>`; a navegação ampla permanece visível no desktop. Evitar conteúdo essencial exposto apenas em hover. Ações fixas, se utilizadas, devem respeitar conteúdo, foco e área segura do dispositivo.

O cabeçalho usa navegação desktop a partir de 1024 px e mantém Instagram como ação secundária ao WhatsApp. Os serviços ficam empilhados abaixo de 768 px e em três colunas a partir desse tamanho.

## 8. Arquitetura de SEO

Gerar título, descrição, metadados sociais e HTML semântico no build. Manter um H1, hierarquia coerente e textos úteis em pt-BR, com foco na localidade confirmada.

**Produção configurada:** `https://mcssollar.com.br/`. O Astro usa essa origem para canonical, sitemap, Open Graph e JSON-LD `WebSite`; a home permite indexação. `public/robots.txt` permite rastreamento e aponta para o sitemap de produção. A hospedagem de produção informada é HostGator/cPanel com saída estática. Fragmentos de seção não são páginas adicionais.

JSON-LD, quando incluído, será gerado no build e conterá somente fatos confirmados e visíveis. Não fabricar endereço para atender requisitos de um tipo de negócio local; omitir tipos/propriedades sem dados suficientes. A ausência de endereço pode limitar recursos de busca local, mas não impede a página institucional.

## 9. Estratégia de acessibilidade

Meta WCAG 2.2 AA: landmarks, títulos em ordem lógica, link para pular navegação, foco visível, nomes acessíveis e contraste adequado. Links de contato continuam sendo links, não botões sem destino; ícones decorativos não substituem rótulos.

Usar controles nativos no menu e FAQ, textos alternativos apropriados, áreas de toque confortáveis e respeito à preferência de movimento reduzido. Conferir teclado, zoom, leitor de tela e contraste das combinações reais; avaliações automáticas não substituem a revisão manual.

## 10. Estratégia de desempenho

Preservar as metas da SPEC: Lighthouse mobile ≥ 90; LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1. Validar em laboratório antes do lançamento e com dados de campo quando houver tráfego.

Não carregar JavaScript de aplicação por padrão. Compilar CSS, otimizar imagens e reservar suas dimensões. Não aplicar lazy loading à imagem principal visível; carregar mídia abaixo da primeira tela sob demanda. Evitar fontes externas, vídeos automáticos, mapas incorporados, bibliotecas de animação e dependências sem função concreta.

## 11. Premissas de deployment

**Hospedagem de produção:** HostGator/cPanel para `https://mcssollar.com.br/`. O build Astro produz `dist/` estático, sem Node.js no servidor; para publicação manual, os arquivos de `dist/` são enviados diretamente à raiz do domínio. O build não publica arquivos na hospedagem.

Não exigir adaptador de hospedagem, SDK de fornecedor, funções serverless ou infraestrutura de backend. O destino deve servir a página de entrada e seus assets; não há necessidade de fallback de SPA. A premissa inicial é publicação na raiz; caso o destino exija subdiretório, configurar `base` e validar URLs antes do build de publicação.

O projeto registra faixa de Node compatível, instalação reproduzível por `package-lock.json` e comandos npm de desenvolvimento, build e preview. A produção usa o domínio próprio configurado em `astro.config.ts`. O código GA4 não altera DNS, hospedagem nem arquivos publicados; o envio do build continua sendo uma ação manual separada.

Não presumir o estado de produção a partir do preview ou do GitHub. A substituição do site antigo depende de confirmação da infraestrutura, revisão do build, HTTPS, DNS e autorização de publicação própria. O site antigo não é fonte de conteúdo ou identidade; suas URLs poderão ser inspecionadas somente para preparar redirecionamentos relevantes.

## 12. Conteúdo estático e JavaScript no cliente

| Recurso | Implementação prevista |
| --- | --- |
| Conteúdo, layout, serviços e imagens | HTML/CSS gerados no build |
| Links de navegação, WhatsApp e Instagram | Âncoras HTML estáticas |
| Orientações e mensagem de orçamento estruturada | HTML e link de WhatsApp gerados no build; sem formulário |
| Menu móvel e FAQ | `<details>/<summary>` nativos |
| SEO, canonical, Open Graph, robots, sitemap e JSON-LD `WebSite` | Saída estática para `https://mcssollar.com.br/` |
| Favicon SVG e PNG de 96 × 96 | Incluídos na saída estática |
| Consentimento e GA4 | Tag carregada somente após autorização analítica explícita; Consent Mode v2 inicia com quatro sinais negados |
| Eventos GA4 | Page view automático pela configuração única; medição otimizada da conta para views, scrolls e cliques de saída; evento próprio somente para clique de orçamento |
| Revogação | Após o tag já ter sido carregado, aplica `ga-disable`, atualiza o Consent Mode, limpa cookies GA acessíveis, restringe conexões externas do documento por CSP e recarrega a página para descartar hits adiados e o tag em memória |
| Publicidade e remarketing | Google Signals, dados fornecidos por usuários e personalização de anúncios desativados; sem GTM, pixels ou remarketing |

JavaScript no cliente fica limitado ao gerenciador de consentimento e à medição autorizada. Sem consentimento, a tag externa não é solicitada e a navegação, o vídeo e os links continuam disponíveis. Não adicionar roteador SPA ou framework de UI.

GA4 está autorizado nesta versão de código com Consent Mode v2 básico. A propriedade `mcssollar` está configurada, conforme informado para este trabalho, com retenção de eventos e usuários por dois meses e sem renovação por atividade; Google Signals, recolha de dados fornecidos por usuários e personalização de anúncios estão desativados. Personalização está desativada nas 307 regiões. A medição otimizada ativa visualizações, deslocamentos e cliques externos; pesquisa interna, formulários, vídeos e downloads estão desativados. A coleta detalhada de localização e dispositivo está ativada. O compartilhamento de dados está limitado a apoio técnico. GTM, pixels e remarketing permanecem fora do escopo. Essas definições da conta devem ser conferidas na propriedade GA4 antes da publicação.

## Riscos e verificações futuras

- **Marca recebida:** a logo oficial é um JPEG; revisar sua legibilidade em tamanhos móveis e desktop antes da publicação.
- **Contraste:** o dourado aproximado da imagem não tem contraste suficiente sobre creme para texto funcional; foco e marcadores usam navy.
- **Compatibilidade:** manter o lockfile e conferir versões Astro/Tailwind/Node ao atualizar dependências.
- **Configuração da conta GA4:** confirmar na interface da propriedade os valores informados antes de publicar; o código não verifica configurações administrativas da conta.
- **SEO de página única:** limita páginas dedicadas a serviços; manter conteúdo útil sem prometer ranking.
- **WhatsApp:** número confirmado não comprova disponibilidade da conta; testar destino e mensagem em dispositivos reais.
- **Privacidade e analytics:** os dados jurídicos do controlador e a aprovação da política continuam pendentes. O contato informado é `mcsparintins@gmail.com`; o prazo de 180 dias para a preferência ainda requer aprovação. A minuta permanece em `docs/` e não possui rota pública no build local. Confirmar também registros da hospedagem e parâmetros da propriedade GA4.
- **Mídias:** disponibilidade de um arquivo não comprova autoria ou autorização; aplicar curadoria, revisão de privacidade e confirmação antes de divulgar.
- **Qualidade:** rodar `npm run check`, `npm run build` e verificações responsivas/de teclado após alterações. Auditorias automáticas devem ser complementadas por inspeção manual de contraste, conteúdo e interação.

## Referências técnicas

Documentação oficial consultada nesta definição: [componentes Astro](https://docs.astro.build/en/basics/astro-components/), [configuração Astro](https://docs.astro.build/en/reference/configuration-reference/), [Tailwind com Astro](https://tailwindcss.com/docs/installation/framework-guides/astro) e [imagens Astro](https://docs.astro.build/en/guides/images/).
