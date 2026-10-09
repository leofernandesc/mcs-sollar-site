# Plano de Evolução Comercial — MCS Sollar

## Objetivo e fonte de verdade

Evoluir a homepage existente para apresentar melhor os serviços, demonstrar trabalhos reais autorizados e facilitar solicitações de orçamento. Preservar a arquitetura, o desempenho, a acessibilidade e a manutenção simples da V1.

[SPEC.md](SPEC.md) define o produto e as informações comerciais; [ARCHITECTURE.md](ARCHITECTURE.md) define a solução técnica. Este roteiro organiza as entregas e não amplia sozinho o escopo técnico. O site antigo não é fonte de conteúdo, design ou informações comerciais.

## Base e decisões aprovadas

- V1 implementada e integrada ao `main`; a auditoria estrutural confirmou build estático e validação de tipos sem erros.
- Astro, Tailwind CSS, TypeScript onde útil, npm, uma homepage e componentes estáticos. Sem backend, banco de dados, CMS, autenticação ou JavaScript de aplicação no cliente.
- Público inicial: residências e empresas em Manaus, AM. Serviços: projetos, instalações e manutenção em energia solar.
- Conversão principal aprovada: solicitar orçamento pelo WhatsApp. Contato geral é secundário; Instagram continua um canal secundário já implementado.
- A hierarquia do orçamento como ação principal já foi aplicada no Hero e no CTA final. A logo e a paleta foram integradas na etapa 2A. A frase do Hero foi aprovada pelo responsável; a escala maior foi reduzida. Os demais textos comerciais continuam sujeitos à revisão antes da publicação.
- Logo oficial: `src/assets/images/brand/mcs-sollar-official.jpeg`, cópia sem alterações do JPEG recebido, com sol e painéis, azul-marinho, dourado e creme.
- O responsável indicou as fotos para a página. As mídias publicadas não têm metadados; a foto de Instalações usa o JPEG original aprovado com o visor nítido e a leitura mantida como registrada, sem reconstrução ou alteração. As fotos de Instalações e Manutenção mantêm o quadro completo. A foto da fachada exclui anotações dos medidores e a foto dos painéis não mostra a numeração vizinha nem uma pessoa na borda.
- A captura da visualização do projeto enviada pelo responsável é usada como imagem estática. Vídeos foram removidos da versão atual a pedido do responsável.
- A captura do aplicativo foi mantida fora do site por conter identificação de conta e métricas de um sistema; anúncios e flyer também ficaram fora até revisão das alegações comerciais. O acervo bruto continua fora do Git.
- Preview atual no Cloudflare Pages: `https://mcs-sollar-site.pages.dev/`, provisório e com `noindex`; `robots.txt` permite rastreamento para leitura da diretiva. O domínio próprio e a configuração final de SEO continuam TBD.

## Entregas e dependências

Executar uma entrega por vez, com revisão entre etapas. A etapa 1 é documental; não aplicar nela mudanças de interface, copiar mídias ou instalar ferramentas.

| Etapa | Entrega | Condição de conclusão |
| --- | --- | --- |
| 0 — Auditoria | Inspecionar implementação, documentação, Git e acervo; identificar divergências. Auditoria estrutural concluída. | Baseline identificado e build aprovado; revisão visual de novas mudanças ocorrerá em cada entrega. |
| 1 — Especificações | Registrar público, conversões, atendimento, marca e regras de privacidade; manter informações internas fora do Git. Concluída na branch de planejamento. | SPEC, ARCHITECTURE e este roteiro coerentes, com mudanças planejadas explicitamente identificadas. |
| 2A — Marca oficial | Aplicar a logo confirmada; alinhar tokens e favicon, preservando tipografia e linguagem editorial. Revisada em capturas de 375, 768 e 1440 px; escala da logo e H1 ajustados. | Legibilidade, proporções, contraste e foco revisados em celular e desktop. |
| 2B — Conteúdo comercial | Atualizar Hero, Serviços e Sobre com os fatos confirmados; proposta editorial aplicada. O H1 foi aprovado e teve a escala maior reduzida. | Serviço, público, localização e próximo passo claros; revisar os demais textos antes da publicação. |
| 3 — Atendimento | Explicar as informações necessárias e aplicar a prioridade de orçamento aos CTAs e à mensagem de WhatsApp. Fluxo e mensagem estruturada implementados; revisão do texto ainda necessária antes da publicação. | Solicitação simples, link correto e mensagem útil, sem formulário ou promessa de prazo. |
| 4A — Curadoria | Seleção atual indicada pelo responsável; os originais não usados permanecem fora do Git. A foto do alicate aprovada está no Git sem metadados. Mídias revisadas para privacidade antes da publicação. | Concluída para os arquivos incluídos; capturas do aplicativo e peças promocionais aguardam validação. |
| 4B — Fotos em serviços | Hero trocado por foto de instalação; uma imagem aparece sob cada serviço e Sobre reúne registros da fachada, de módulos fotovoltaicos e da placa de alerta. | Implementada; as fotos de Instalações e Manutenção mantêm o quadro completo; o visor do alicate está nítido e preserva a leitura original aprovada. A navegação antiga de trabalhos foi removida. A placa é apenas um registro visual, sem alegação de conformidade. |
| 4C — Vídeo | Vídeos de instalação/recarga não são publicados na versão atual. A captura da visualização de projeto é uma imagem estática enviada pelo responsável. | Fora da versão atual por decisão do responsável. |
| 5 — FAQ e confiança | FAQ atualizado com dados confirmados; não há credenciais ou depoimentos aprovados para acrescentar. Revisão editorial antes da publicação ainda necessária. | Perguntas úteis respondidas sem credenciais ou condições inventadas; inserir provas somente após validação. |
| 6 — SEO e publicação | O preview Pages usa `noindex` e um `robots.txt` que permite rastreamento; não recebe canonical nem sitemap definitivos. Concluir SEO de produção após conectar o domínio próprio. | Domínio ainda TBD; antes da indexação, remover `noindex`, definir canonical e sitemap e validar metadados. |
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

Manter o acervo bruto e os originais não selecionados fora do Git. A exceção aprovada é o JPEG do alicate usado em `src/assets/images/services/installation-measurement.jpeg`. Não copiar o ZIP, documentos, pranchas privadas ou o conjunto inteiro para o repositório.

- Excluir documentos de conexão, capturas de aplicativos e peças de origem não confirmada da seleção de portfólio.
- Revisar contatos, endereços, placas, identificadores de equipamentos, telas, reflexos e pessoas reconhecíveis nas fotos escolhidas; conferir também nomes de arquivos e metadados.
- Recortar ou ocultar informações quando adequado em versões próprias para publicação, ou descartar o arquivo. Só integrar versões revisadas e autorizadas.
- A seleção atual foi indicada pelo responsável. Para novas mídias, confirmar autoria e autorização antes da publicação; não inferir localização, potência, cliente ou agrupamento em projetos a partir das imagens.
- Identificar como ilustrativas somente imagens que não sejam registros reais fornecidos e aprovados para uso.

**Estado da curadoria:** o responsável indicou as fotos atuais para uso no site. O original aprovado do alicate está em `src/assets/images/services/installation-measurement.jpeg`, sem metadados; os demais originais permanecem no acervo externo. Astro gera variantes WebP responsivas. A imagem de Instalações mantém o enquadramento integral e mostra o visor nítido, com a leitura original preservada sem reconstrução ou alteração; a foto de Manutenção também mantém o quadro completo. Marcas manuscritas na parede acima da placa de alerta foram removidas do derivado; a placa aparece em Sobre como registro visual, sem alegação de conformidade, junto às fotos da fachada e dos painéis. A foto da fachada exclui anotações nos medidores e a foto dos painéis exclui a numeração da casa vizinha e uma pessoa na borda. A captura estática da visualização do projeto foi enviada pelo responsável. Nenhuma legenda informa cliente, endereço, potência ou resultado de geração.

As imagens em `src/assets/` são processadas pelo Astro, com tamanhos responsivos e dimensões reservadas. Uma foto está associada a cada serviço, sem galeria independente ou âncora `#projetos`. Legendas e descrições usam somente características visíveis e aprovadas; não criar detalhes para preencher cartões. Vídeos permanecem fora da versão atual.

## Informações internas, SEO e campanhas

Referências financeiras, ticket médio, capacidade operacional, verba publicitária e critérios numéricos de qualificação ficam fora de todo o repositório e dos recursos enviados ao navegador. Documentos versionados também seguem essa regra. Registrar apenas a política de não divulgar preços, valores mínimos, tabelas ou cálculos genéricos de investimento. A equipe fará a qualificação manualmente, sem bloqueio automático por consumo no site.

O endereço `pages.dev` é um preview provisório e recebe `noindex`; seu `robots.txt` permite rastreamento e não aponta sitemap. Não definir canonical ou sitemap para esse endereço. Na etapa 6, configurar a origem pública, canonical, sitemap, regras de robots, metadados sociais completos e dados estruturados somente com fatos confirmados, depois de conectar o domínio próprio. Não inventar endereço ou avaliações. O site antigo poderá ter URLs inspecionadas apenas para preparar redirecionamentos; não reutilizar seu conteúdo. DNS, HTTPS e substituição do site em produção exigem verificação e autorização próprias.

Na etapa 7, separar clique no WhatsApp, conversa recebida, contato qualificado e venda no acompanhamento manual. Os nomes `whatsapp_contact_click` e `whatsapp_quote_click` são candidatos para uma futura proposta de mensuração, não eventos implementados. Um clique não comprova orçamento recebido ou venda.

GA4, GTM e Google Ads exigem avaliação de necessidade, privacidade, duplicidade e desempenho, com atualização explícita de escopo antes de instalar tags. Não enviar informações pessoais ou valores individualizados de contas em eventos. Preparar marketing não autoriza criar campanhas nem integrações. Formulários, analytics e páginas adicionais continuam fora da entrega atual.

## Fluxo e validação

O baseline da V1 já foi integrado ao `main`. Criar uma branch por entrega a partir do baseline atualizado; revisar escopo e staged diff, usar commits convencionais e abrir um pull request próprio. A autorização existente permite enviar commits ao remoto; o merge e a publicação seguem seus marcos de revisão. Não juntar todas as etapas em um único PR.

Em cada alteração, executar `npm run check`, `npm run build` e `git diff --check`. Para UI, revisar 375, 768 e 1440 px, overflow em 320 px e cabeçalho em 1024 px; conferir teclado, foco, contraste, menu, FAQ, skip link, âncoras e destinos do WhatsApp. Verificar HTML e assets gerados quanto a informações internas ou sensíveis.

Repetir Lighthouse após mudanças relevantes de marca, mídia ou desempenho, preservando as metas da SPEC; não prometer notas ou resultados de campo. Resumir arquivos alterados, evidências e endereço de visualização. Mudanças apenas documentais não exigem uma nova revisão visual ou Lighthouse do site.

Permanecem TBD os procedimentos especializados, diferenciais, garantias, financiamento, credenciais, detalhes específicos dos trabalhos e demais dados não fornecidos; também o domínio próprio. Avançar somente com informações confirmadas ou propostas editoriais claramente identificadas.
