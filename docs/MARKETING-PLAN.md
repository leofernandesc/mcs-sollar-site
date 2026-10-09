# Plano de Evolução Comercial — MCS Sollar

## Objetivo e fonte de verdade

Evoluir a homepage existente para apresentar melhor os serviços, demonstrar trabalhos reais autorizados e facilitar solicitações de orçamento. Preservar a arquitetura, o desempenho, a acessibilidade e a manutenção simples da V1.

[SPEC.md](SPEC.md) define o produto e as informações comerciais; [ARCHITECTURE.md](ARCHITECTURE.md) define a solução técnica. Este roteiro organiza as entregas e não amplia sozinho o escopo técnico. O site antigo não é fonte de conteúdo, design ou informações comerciais.

## Base e decisões aprovadas

- V1 implementada e integrada ao `main`; a auditoria estrutural confirmou build estático e validação de tipos sem erros.
- Astro, Tailwind CSS, TypeScript onde útil, npm, uma homepage e componentes estáticos. Sem backend, banco de dados, CMS, autenticação ou JavaScript de aplicação no cliente.
- Público inicial: residências e empresas em Manaus, AM. Serviços: projetos, instalações e manutenção em energia solar.
- Conversão principal aprovada: solicitar orçamento pelo WhatsApp. Contato geral é secundário; Instagram continua um canal secundário já implementado.
- A hierarquia do orçamento como ação principal já foi aplicada no Hero e no CTA final. A logo e a paleta foram integradas na etapa 2A. Os textos da etapa 2B estão na interface como proposta editorial e aguardam revisão antes da publicação.
- Logo oficial: `src/assets/images/brand/mcs-sollar-official.jpeg`, cópia sem alterações do JPEG recebido, com sol e painéis, azul-marinho, dourado e creme.
- Acervo recebido: 43 imagens e 9 vídeos, além de um arquivo ZIP. Disponibilidade não comprova autoria, autorização ou dados de um projeto; a seleção será validada pelo responsável.
- Domínio, hospedagem e configuração de publicação: TBD na documentação do projeto. Não presumir produção a partir do preview ou do GitHub.

## Entregas e dependências

Executar uma entrega por vez, com revisão entre etapas. A etapa 1 é documental; não aplicar nela mudanças de interface, copiar mídias ou instalar ferramentas.

| Etapa | Entrega | Condição de conclusão |
| --- | --- | --- |
| 0 — Auditoria | Inspecionar implementação, documentação, Git e acervo; identificar divergências. Auditoria estrutural concluída. | Baseline identificado e build aprovado; revisão visual de novas mudanças ocorrerá em cada entrega. |
| 1 — Especificações | Registrar público, conversões, atendimento, marca e regras de privacidade; manter informações internas fora do Git. Concluída na branch de planejamento. | SPEC, ARCHITECTURE e este roteiro coerentes, com mudanças planejadas explicitamente identificadas. |
| 2A — Marca oficial | Aplicar a logo confirmada; alinhar tokens e favicon, preservando tipografia e linguagem editorial. Revisada em capturas de 375, 768 e 1440 px; escala da logo e H1 ajustados. | Legibilidade, proporções, contraste e foco revisados em celular e desktop. |
| 2B — Conteúdo comercial | Atualizar Hero, Serviços e Sobre com os fatos confirmados; proposta editorial aplicada, pendente de revisão antes da publicação. | Serviço, público, localização e próximo passo claros; texto aprovado antes da publicação. |
| 3 — Atendimento | Explicar as informações necessárias e aplicar a prioridade de orçamento aos CTAs e à mensagem de WhatsApp. Fluxo e mensagem estruturada implementados; revisão do texto ainda necessária antes da publicação. | Solicitação simples, link correto e mensagem útil, sem formulário ou promessa de prazo. |
| 4A — Curadoria | Triagem visual inicial e revisão de privacidade realizadas em material mantido fora do Git; candidatos foram apresentados ao responsável. Nenhum arquivo do acervo foi copiado ao repositório. | Aguardando confirmação de autoria, autorização de publicação e informações dos trabalhos selecionados. |
| 4B — Fotos e trabalhos reais | Após 4A e a revisão da marca, integrar a seleção, criar a seção de trabalhos e substituir a imagem ilustrativa do Hero quando adequada. | Conteúdo autêntico, descrições confirmadas e carregamento preservado. |
| 4C — Vídeos opcionais | Após as fotos, avaliar utilidade comercial, privacidade, áudio e otimização dos vídeos selecionados. | Player acessível e sob demanda; inclusão não é requisito para lançar a homepage. |
| 5 — FAQ e confiança | FAQ atualizado com dados confirmados; não há credenciais ou depoimentos aprovados para acrescentar. Revisão editorial antes da publicação ainda necessária. | Perguntas úteis respondidas sem credenciais ou condições inventadas; inserir provas somente após validação. |
| 6 — SEO e publicação | Finalizar SEO já previsto após confirmar domínio e hospedagem; preparar a substituição do site antigo. | Build aprovado e configuração revisada; publicação depende de autorização própria. |
| 7 — Mensuração | Definir acompanhamento comercial manual, externo ao site. Integrações exigirão proposta técnica futura. | Distinguir cliques, conversas, leads qualificados e vendas, sem prometer atribuição automática. |
| 8 — Página de campanha | Avaliar uma página específica somente se houver necessidade demonstrada. | Novo escopo aprovado; a evolução atual permanece com uma homepage. |

## Direção editorial

Textos aplicados na etapa 2B como proposta editorial, ainda sujeitos à revisão antes da publicação:

- **H1:** “Energia solar para sua residência ou empresa”, com “Manaus, AM” destacado no eyebrow do Hero.
- **Descrição:** “A MCS Sollar oferece projetos, instalações e manutenção de sistemas fotovoltaicos para residências e empresas em Manaus. O orçamento considera o consumo de energia e as características de cada imóvel.”
- **CTA principal:** “Solicitar orçamento”, com a intenção de orçamento no WhatsApp.
- A ação secundária do Hero leva à seção de serviços; não é outro CTA de WhatsApp. O contato geral continuará no cabeçalho e em Atendimento, em seções distintas.

Explicar a finalidade de projetos, instalações e manutenção sem repetir uma chamada de contato em todas as descrições. Não incluir homologação, financiamento, visitas, reparos específicos ou outras especialidades sem confirmação. Sobre deve apresentar a atuação e o atendimento, sem estatísticas artificiais.

Manter linguagem profissional, objetiva e tecnicamente correta. Não criar urgência, promessa absoluta de economia ou retorno garantido. Não acrescentar clientes, avaliações, garantias, certificações, anos de experiência ou quantidade de projetos sem validação.

## Solicitação de orçamento

Na etapa 3, apresentar três orientações comerciais:

1. Informar consumo mensal em **kWh** ou valor aproximado da conta de energia.
2. Informar tipo de telhado e localização do imóvel.
3. Conversar com a equipe sobre a elaboração do orçamento.

Não confundir consumo de energia com potência instalada. A orientação não garante prazo, visita ou proposta automática.

Mensagem usada pelo CTA de orçamento (campos em branco para preenchimento pelo visitante no WhatsApp):

```text
Olá! Gostaria de solicitar um orçamento de energia solar.
Consumo mensal ou valor aproximado da conta:
Tipo de telhado:
Localização do imóvel:
```

Preservar as intenções existentes de contato e orçamento e codificar a mensagem no build. Exibir apenas um CTA do WhatsApp por grupo visual: orçamento no Hero e no contato final; contato geral no cabeçalho e em Atendimento, em locais distintos. Instagram segue secundário. Não adicionar formulário, armazenamento, calculadora ou rejeição automática por consumo.

O FAQ responde quais informações enviar, público atendido em Manaus e relação do orçamento com consumo e características do imóvel. Financiamento e condições técnicas específicas continuam TBD e não são publicados. Incluir provas de confiança apenas quando houver conteúdo real autorizado e verificável.

## Aplicação da marca

Usar a logo oficial recebida, preservando sua composição. O arquivo disponível é um JPEG de 911 × 456 px; não presumir arquivo vetorial ou transparência.

Na etapa 2A, aproximar os tokens do JPEG: azul-marinho `#1F3D55`, dourado `#D9A945`, creme `#F7EAD7`; manter texto escuro `#172A34`. São referências extraídas da imagem, não valores de um manual oficial de marca. Essa paleta já está aplicada.

Azul-marinho com branco oferece contraste aproximado de 11,31:1; dourado com creme, 1,82:1. Restringir dourado a acentos adequados: não usar para texto essencial, foco ou marcadores interativos sobre creme. A aplicação usa a logo completa no cabeçalho e um símbolo simplificado no favicon, sem redesenhar a página. Excluir outras variantes de marca e peças incompatíveis da identidade.

## Curadoria e privacidade das mídias

Preservar os originais no acervo externo ao Git. Não copiar o ZIP, documentos, pranchas privadas ou o conjunto inteiro para o repositório.

- Excluir documentos de conexão, capturas de aplicativos e peças de origem não confirmada da seleção de portfólio.
- Revisar contatos, endereços, placas, identificadores de equipamentos, telas, reflexos e pessoas reconhecíveis nas fotos escolhidas; conferir também nomes de arquivos e metadados.
- Recortar ou ocultar informações quando adequado em versões próprias para publicação, ou descartar o arquivo. Só integrar versões revisadas e autorizadas.
- Apresentar a seleção para confirmação de autoria e autorização. Não inferir localização, potência, cliente ou agrupamento em projetos a partir das imagens.
- Manter legendas de imagem ilustrativa até substituir o conteúdo por fotos reais validadas.

**Estado da curadoria:** a triagem inicial foi feita em materiais privados fora do repositório, e a confirmação de autoria e autorização foi solicitada. Até a resposta, não publicar nem versionar imagens do acervo.

Fotos aprovadas serão processadas pelo Astro, com tamanhos responsivos e dimensões reservadas. A seção de trabalhos ficará após Serviços, com âncora `#projetos`, preservando as âncoras atuais. Legendas e descrições usarão somente informações confirmadas; não criar detalhes para preencher cartões.

Vídeos exigem revisão integral dos quadros e do áudio, seleção e compressão próprias. Astro não comprime vídeo. Usar arquivos otimizados e player HTML nativo, controles, poster e carregamento sob demanda; sem autoplay ou embeds externos. Fornecer legendas ou transcrição quando a fala for essencial. Não adicionar dependências ou publicar os vídeos brutos automaticamente.

## Informações internas, SEO e campanhas

Referências financeiras, ticket médio, capacidade operacional, verba publicitária e critérios numéricos de qualificação ficam fora de todo o repositório e dos recursos enviados ao navegador. Documentos versionados também seguem essa regra. Registrar apenas a política de não divulgar preços, valores mínimos, tabelas ou cálculos genéricos de investimento. A equipe fará a qualificação manualmente, sem bloqueio automático por consumo no site.

Na etapa 6, configurar origem pública, canonical, sitemap, robots, metadados sociais completos e dados estruturados somente com fatos confirmados. Não inventar endereço ou avaliações. O site antigo poderá ter URLs inspecionadas apenas para preparar redirecionamentos; não reutilizar seu conteúdo. DNS, HTTPS e substituição do site em produção exigem verificação e autorização próprias.

Na etapa 7, separar clique no WhatsApp, conversa recebida, contato qualificado e venda no acompanhamento manual. Os nomes `whatsapp_contact_click` e `whatsapp_quote_click` são candidatos para uma futura proposta de mensuração, não eventos implementados. Um clique não comprova orçamento recebido ou venda.

GA4, GTM e Google Ads exigem avaliação de necessidade, privacidade, duplicidade e desempenho, com atualização explícita de escopo antes de instalar tags. Não enviar informações pessoais ou valores individualizados de contas em eventos. Preparar marketing não autoriza criar campanhas nem integrações. Formulários, analytics e páginas adicionais continuam fora da entrega atual.

## Fluxo e validação

O baseline da V1 já foi integrado ao `main`. Criar uma branch por entrega a partir do baseline atualizado; revisar escopo e staged diff, usar commits convencionais e abrir um pull request próprio. A autorização existente permite enviar commits ao remoto; o merge e a publicação seguem seus marcos de revisão. Não juntar todas as etapas em um único PR.

Em cada alteração, executar `npm run check`, `npm run build` e `git diff --check`. Para UI, revisar 375, 768 e 1440 px, overflow em 320 px e cabeçalho em 1024 px; conferir teclado, foco, contraste, menu, FAQ, skip link, âncoras e destinos do WhatsApp. Verificar HTML e assets gerados quanto a informações internas ou sensíveis.

Repetir Lighthouse após mudanças relevantes de marca, mídia ou desempenho, preservando as metas da SPEC; não prometer notas ou resultados de campo. Resumir arquivos alterados, evidências e endereço de visualização. Mudanças apenas documentais não exigem uma nova revisão visual ou Lighthouse do site.

Permanecem TBD os procedimentos especializados, diferenciais, garantias, financiamento, credenciais e demais dados não fornecidos; também a identificação e autorização dos trabalhos selecionados e o destino definitivo de publicação. Avançar somente com informações confirmadas ou propostas editoriais claramente identificadas.
