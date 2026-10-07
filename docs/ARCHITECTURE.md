# Arquitetura Técnica — MCS Sollar, V1

Status: scaffold inicial criado conforme esta arquitetura. O site institucional ainda não foi implementado. [SPEC.md](SPEC.md) define o produto e as informações comerciais; este documento define a organização técnica.

## 1. Stack escolhida e justificativa

- **Astro:** componentes `.astro` renderizados em HTML durante o build, com `output: 'static'` explícito. Adequado ao conteúdo institucional e à indexação sem depender de execução no navegador.
- **Tailwind CSS:** estilos compilados no build, integração oficial via `@tailwindcss/vite`, com tokens de cor e tipografia centralizados. Não usar CDN de estilos em produção.
- **TypeScript onde útil:** dados locais, props e utilitários; não exige runtime no cliente. Evitar abstrações sem necessidade.
- **HTML nativo:** links, navegação por âncoras e controles de expansão. Nenhum framework de UI com hidratação é necessário em V1.

O scaffold usa as versões estáveis mais recentes disponíveis na sua criação, registra os limites de Node compatíveis e mantém o lockfile npm. Conferir compatibilidade ao atualizar as dependências.

## 2. Estrutura de diretórios proposta

Estrutura do scaffold e próximos diretórios previstos. Arquivos `.gitkeep` mantêm diretórios ainda vazios no Git; os módulos de negócio e seções serão adicionados nas próximas etapas:

```text
src/
  pages/
    index.astro          # Única página institucional
  layouts/
    site-layout.astro    # Documento HTML e metadados
  components/
    site-header.astro
    site-footer.astro
    sections/            # Apresentação, serviços, atendimento, sobre, FAQ, contato
    ui/                  # Links de WhatsApp, contêineres e títulos reutilizáveis
  data/
    business.ts          # Fatos comerciais confirmados
    content.ts           # Textos pt-BR e listas de seções
    seo.ts               # Configuração de metadados e endereço público
  types/                 # Tipos compartilhados somente quando necessários
  utils/                 # Composição de links e metadados no build
  assets/
    brand/               # Marca aprovada para uso no site
    images/              # Imagens processadas pelo Astro
  styles/
    global.css           # Entrada Tailwind, tokens e estilos globais
public/                  # Favicon e arquivos servidos sem transformação
docs/                    # Documentação e referências recebidas
dist/                    # Resultado gerado; não versionar
```

Usar nomes de arquivo em kebab-case, conforme AGENTS.md. Configurações futuras ficam na raiz; a árvore não representa um scaffold existente.

## 3. Arquitetura de componentes

`site-layout.astro` controla `lang="pt-BR"`, metadados, estilos e link para pular ao conteúdo. A página compõe cabeçalho, um único `main`, seções e rodapé. Cada componente de seção mantém sua responsabilidade visual e recebe conteúdo por props tipadas.

Um componente reutilizável de link de WhatsApp recebe a intenção de contato ou orçamento e usa o número centralizado. O utilitário de composição codifica a mensagem com `encodeURIComponent` durante o build; o resultado é um link HTML normal. Não duplicar telefone ou textos comerciais nos componentes.

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

## 5. Organização de conteúdo e dados

Manter módulos TypeScript locais, sem CMS ou coleções de conteúdo desnecessárias para uma página. Separar fatos confirmados, textos provisórios e configurações técnicas. Edições exigem novo build e publicação.

Fatos já fornecidos, que devem ser preservados:

| Informação | Valor confirmado |
| --- | --- |
| Nome público | MCS Sollar |
| Localidade atendida | Manaus, AM |
| Serviços | Projetos, instalações e manutenção em energia solar |
| WhatsApp | +55 92 99996-0878 |
| Número para link | `5592999960878` |
| Mensagem de orçamento | “Olá! Gostaria de solicitar um orçamento de energia solar.” |

Informações pendentes:

| Informação | Estado |
| --- | --- |
| Prioridade de público e segmentos específicos | TBD |
| Endereço físico, horários, e-mail e perfis sociais | TBD |
| Razão social, CNPJ e outros identificadores não fornecidos | TBD |
| Cobertura além de Manaus | TBD |
| Etapas técnicas/comerciais e diferenciais comprovados | TBD |
| Anos de atuação, estatísticas e certificações | TBD |
| Preços, garantias e condições comerciais | TBD |
| Projetos reais, fotos autorizadas e depoimentos | TBD |
| Aprovação final dos textos e da marca | TBD |

Registrar pendências como **TBD** na documentação. Nos futuros dados, representar campos opcionais não resolvidos como ausentes; não renderizar o texto “TBD”, inventar valores nem incluir pendências em dados estruturados. Conteúdo obrigatório ainda não aprovado impede a publicação daquele conteúdo.

## 6. Organização de assets

Os arquivos em `docs/references/` são referências recebidas, não assets finais de produção. A versão limpa da marca deve ser revisada; não reutilizar o anúncio inteiro como logo.

Importar fotografias locais de `src/assets/` para processamento com as ferramentas de imagem do Astro. Gerar tamanhos responsivos, formatos eficientes e dimensões explícitas. Usar `public/` apenas para arquivos que precisam permanecer inalterados. SVGs podem ser usados para marca e ícones após revisão.

Registrar origem, licença/autorização e condição ilustrativa de cada imagem. Começar com fontes de sistema; qualquer fonte adicional deverá ser licenciada e hospedada localmente.

## 7. Estratégia responsiva

Aplicar estilos de base para celular, contêineres fluidos, espaçamento consistente e colunas empilhadas. Usar breakpoints do Tailwind para distribuir conteúdo em grades quando houver espaço, sem depender de modelos específicos de aparelho.

Garantir ausência de overflow desde 320 px, leitura confortável, zoom e orientação horizontal. O menu móvel usa `<details>/<summary>`; a navegação ampla permanece visível no desktop. Evitar conteúdo essencial exposto apenas em hover. Ações fixas, se utilizadas, devem respeitar conteúdo, foco e área segura do dispositivo.

## 8. Arquitetura de SEO

Gerar título, descrição, metadados sociais e HTML semântico no build. Manter um H1, hierarquia coerente e textos úteis em pt-BR, com foco na localidade confirmada.

**URL pública/domínio: TBD.** Centralizar a origem de produção na configuração e utilizá-la para `site` do Astro, canonical, sitemap e URLs de compartilhamento. Gerar sitemap e robots como arquivos estáticos após definir a origem; fragmentos de seção não são páginas adicionais. Não publicar canonical fictício ou apontado para localhost. Prévias devem usar `noindex`, sem depender apenas de robots para impedir indexação.

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

## 12. Conteúdo estático e JavaScript no cliente

| Recurso | Implementação prevista |
| --- | --- |
| Conteúdo, layout, serviços e imagens | HTML/CSS gerados no build |
| Links de navegação e WhatsApp | Âncoras HTML estáticas |
| Menu móvel e FAQ | `<details>/<summary>` nativos |
| Metadados, sitemap, robots e JSON-LD | Saída estática; JSON-LD não é script executável |
| Analytics, pixels e integrações | Fora da V1 |

Nenhum JavaScript de aplicação no cliente é necessário na arquitetura inicial. Não adicionar hidratação com `client:*`, roteador de SPA ou framework de UI. Um script futuro só poderá atender uma interação documentada, com melhoria progressiva e conteúdo/contato utilizáveis sem ele; não faz parte desta entrega.

## Riscos e verificações futuras

- **Marca de captura:** resolução e fidelidade precisam de revisão antes do uso final.
- **Contraste:** a paleta proposta não garante conformidade em todas as combinações; verificar especialmente os acentos laranja.
- **Compatibilidade:** confirmar versões Astro/Tailwind/Node na preparação do projeto, usando a integração oficial atual.
- **Origem de produção:** TBD impede finalizar canonical, sitemap e compartilhamento para lançamento.
- **SEO de página única:** limita páginas dedicadas a serviços; manter conteúdo útil sem prometer ranking.
- **WhatsApp:** número confirmado não comprova disponibilidade da conta; testar destino e mensagem em dispositivos reais.
- **Qualidade:** metas de acessibilidade/desempenho são requisitos, não resultados medidos nesta etapa. Validar o site quando existir.

## Referências técnicas

Documentação oficial consultada nesta definição: [componentes Astro](https://docs.astro.build/en/basics/astro-components/), [configuração Astro](https://docs.astro.build/en/reference/configuration-reference/), [Tailwind com Astro](https://tailwindcss.com/docs/installation/framework-guides/astro) e [imagens Astro](https://docs.astro.build/en/guides/images/).
