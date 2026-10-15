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
- A versão atual tem saída estática configurada para `https://mcssollar.com.br/` e destino informado HostGator/cPanel. A publicação manual da nova versão continua separada deste trabalho.
- A integração GA4 com consentimento explícito está no código, mas não foi publicada. A rota `/privacidade/` existe nesta versão local e a minuta segue sem aprovação jurídica. O responsável confirmou M C SILVA LTDA como controladora; recebimento direto por WhatsApp, e-mail e entrega; categorias e finalidades dos dados comerciais; restrição de acesso interno e computadores protegidos por senha; ausência atual de backups dos arquivos comerciais; não consulta a sistemas de distribuidoras por meio de contas de energia; não uso de contatos para publicidade não solicitada; e não compartilhamento de documentos com parceiros/terceiros para executar serviços. A exclusão em até 30 dias para propostas não aceitas após encerramento e a revisão semestral foram aprovadas, mas estão em implantação. A empresa também confirmou que mantém contratos, documentos e informações de projetos arquivados após as instalações; dados que não forem mais necessários devem ser avaliados para eliminação e não há prazo único para todos os documentos contratuais. A revisão semestral deverá incluir esses arquivos. O canal `mcsparintins@gmail.com` e a validade de 180 dias estão confirmados. As configurações administrativas da propriedade `mcssollar` foram verificadas em 2026-10-15; permanecem pendentes bases legais, verificação dos procedimentos, critérios de retenção/eliminação por finalidade, dados da hospedagem, compartilhamentos/transferências e validação do comportamento de consentimento e coleta em produção.
- Logo oficial: `src/assets/images/brand/mcs-sollar-official.jpeg`, cópia sem alterações do JPEG recebido, com sol e painéis, azul-marinho, dourado e creme.
- O responsável indicou as fotos para a página. As mídias publicadas não têm metadados; a foto de Instalações usa o JPEG original aprovado com o visor nítido e a leitura mantida como registrada, sem reconstrução ou alteração. As fotos de Instalações e Manutenção mantêm o quadro completo. A foto dos painéis no Hero não mostra a numeração vizinha nem uma pessoa na borda.
- A captura da visualização do projeto enviada pelo responsável é usada como imagem estática. Um vídeo autorizado de carregamento veicular também foi incluído na coluna Projetos, abaixo da imagem; é silencioso e não usa autoplay.
- A captura de monitoramento anteriormente aprovada foi removida de Sobre e dos assets ativos do projeto; esta versão não publica capturas de aplicativo. Anúncios e flyer continuam fora até revisão das alegações comerciais. O acervo bruto continua fora do Git.
- A configuração atual usa `https://mcssollar.com.br/`, geração estática e hospedagem informada HostGator/cPanel. O site antigo permanece separado até publicação manual autorizada; este documento não determina envio de arquivos ou alteração de DNS.

## Entregas e dependências

Executar uma entrega por vez, com revisão entre etapas. A etapa 1 é documental; não aplicar nela mudanças de interface, copiar mídias ou instalar ferramentas.

| Etapa | Entrega | Condição de conclusão |
| --- | --- | --- |
| 0 — Auditoria | Inspecionar implementação, documentação, Git e acervo; identificar divergências. Auditoria estrutural concluída. | Baseline identificado e build aprovado; revisão visual de novas mudanças ocorrerá em cada entrega. |
| 1 — Especificações | Registrar público, conversões, atendimento, marca e regras de privacidade; manter informações internas fora do Git. Concluída na branch de planejamento. | SPEC, ARCHITECTURE e este roteiro coerentes, com mudanças planejadas explicitamente identificadas. |
| 2A — Marca oficial | Aplicar a logo confirmada; alinhar tokens e favicon, preservando tipografia e linguagem editorial. Revisada em capturas de 375, 768 e 1440 px; escala da logo e H1 ajustados. | Legibilidade, proporções, contraste e foco revisados em celular e desktop. |
| 2B — Conteúdo comercial | Atualizar Hero, Serviços e Sobre com os fatos confirmados; proposta editorial aplicada. O H1 foi aprovado e teve a escala maior reduzida. | Serviço, público, localização e próximo passo claros; revisar os demais textos antes da publicação. |
| 3 — Atendimento | Explicar as informações necessárias e aplicar a prioridade de orçamento aos CTAs e à mensagem de WhatsApp. Fluxo e mensagem estruturada implementados; revisão do texto ainda necessária antes da publicação. | Solicitação simples, link correto e mensagem útil, sem formulário ou promessa de prazo. |
| 4A — Curadoria | Seleção indicada pelo responsável; os originais não usados permanecem fora do Git. A captura de monitoramento aprovada foi removida posteriormente da versão atual; as mídias mantidas foram revisadas para privacidade. | Concluída para os arquivos incluídos; anúncios e flyer seguem fora até revisão das alegações comerciais. |
| 4B — Fotos em serviços | Hero usa uma foto dos módulos; há uma imagem sob cada serviço e Sobre reúne duas imagens: instalação de inversor e placa de alerta. | Implementada; as fotos de Instalações e Manutenção mantêm o quadro completo; o visor do alicate está nítido e preserva a leitura original aprovada. A navegação antiga de trabalhos foi removida. A placa é apenas um registro visual, sem alegação de conformidade. A foto da fachada e a captura de monitoramento foram retiradas de Sobre. |
| 4C — Vídeo | Um vídeo autorizado de carregamento veicular está na coluna Projetos, abaixo da imagem e legenda; é silencioso, com controles, capa e carregamento sob demanda. | Implementado na versão atual; preservar o arquivo aprovado e conferir a reprodução no build estático. |
| 5 — FAQ e confiança | FAQ atualizado com dados confirmados; não há credenciais ou depoimentos aprovados para acrescentar. Revisão editorial antes da publicação ainda necessária. | Perguntas úteis respondidas sem credenciais ou condições inventadas; inserir provas somente após validação. |
| 6 — SEO e publicação | Título, descrição, canonical, Open Graph, JSON-LD `WebSite`, favicon, robots e sitemap usam o domínio oficial configurado. A saída é estática para a raiz do domínio. | SEO técnico implementado; publicar manualmente só após as revisões e autorizações aplicáveis. |
| 7 — Mensuração e privacidade | Integração GA4 com Consent Mode v2 básico; medição automática de cliques externos separada do evento `whatsapp_quote_click`, exclusivo dos botões de orçamento. A propriedade GA4 foi vinculada à conta Google Ads, com importação de métricas de aplicativos e Web habilitada e importação de públicos desativada. Somente `whatsapp_quote_click` está planejado para futura importação como conversão; a conversão ainda não foi configurada. | A publicação depende da aprovação jurídica da política e das bases legais, implantação/verificação da exclusão aprovada em até 30 dias para propostas não aceitas e da revisão semestral (inclusive para arquivos de projetos concluídos), definição dos critérios de retenção/eliminação por finalidade, confirmação de transferências e teste em ambiente controlado do consentimento e da coleta após publicar. Separar cliques, conversas, leads qualificados e vendas. |
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

- Excluir documentos de conexão, capturas de aplicativos e peças de origem não confirmada da seleção de portfólio. A captura de monitoramento anteriormente aprovada não faz parte da versão atual do site.
- Revisar contatos, endereços, placas, identificadores de equipamentos, telas, reflexos e pessoas reconhecíveis nas fotos escolhidas; conferir também nomes de arquivos e metadados.
- Recortar ou ocultar informações quando adequado em versões próprias para publicação, ou descartar o arquivo. Só integrar versões revisadas e autorizadas.
- A seleção atual foi indicada pelo responsável. Para novas mídias, confirmar autoria e autorização antes da publicação; não inferir localização, potência, cliente ou agrupamento em projetos a partir das imagens.
- Identificar como ilustrativas somente imagens que não sejam registros reais fornecidos e aprovados para uso.

**Estado da curadoria:** o responsável indicou as fotos atuais para uso no site. O original aprovado do alicate está em `src/assets/images/services/installation-measurement.jpeg`, sem metadados; os demais originais permanecem no acervo externo. Astro gera variantes WebP responsivas. A imagem de Instalações mantém o enquadramento integral e mostra o visor nítido, com a leitura original preservada sem reconstrução ou alteração; a foto de Manutenção também mantém o quadro completo. Sobre reúne duas imagens: instalação de inversor e placa de sinalização de risco elétrico. A foto da fachada comercial e a captura de monitoramento não aparecem na versão atual. A placa é um registro visual, sem alegação de conformidade. Marcas manuscritas na parede acima da placa foram removidas do derivado. A foto dos painéis no Hero exclui a numeração da casa vizinha e uma pessoa na borda. A captura estática da visualização do projeto foi enviada pelo responsável. O vídeo autorizado de carregamento veicular aparece abaixo da imagem da coluna Projetos, sem áudio ou autoplay. Nenhuma legenda informa cliente, endereço, potência ou resultado típico de geração.

As imagens em `src/assets/` são processadas pelo Astro, com tamanhos responsivos e dimensões reservadas. Uma foto está associada a cada serviço, sem galeria independente ou âncora `#projetos`. Legendas e descrições usam somente características visíveis e aprovadas; não criar detalhes para preencher cartões. O vídeo autorizado de carregamento veicular fica abaixo da imagem de Projetos, em 16:9, sem áudio e sem autoplay.

## Informações internas, SEO e campanhas

Referências financeiras, ticket médio, capacidade operacional, verba publicitária e critérios numéricos de qualificação ficam fora de todo o repositório e dos recursos enviados ao navegador. Documentos versionados também seguem essa regra. Registrar apenas a política de não divulgar preços, valores mínimos, tabelas ou cálculos genéricos de investimento. A equipe fará a qualificação manualmente, sem bloqueio automático por consumo no site.

O domínio oficial configurado é `https://mcssollar.com.br/`; canonical, sitemap, robots, metadados sociais e JSON-LD apontam para essa origem. A home permite indexação. A saída permanece estática e destinada à raiz do domínio na HostGator/cPanel; a substituição do site antigo depende de publicação manual autorizada. Não inventar endereço ou avaliações. O site antigo poderá ter URLs inspecionadas apenas para preparar redirecionamentos; não reutilizar seu conteúdo nem excluir seus arquivos.

Na etapa 7, o GA4 pode registrar automaticamente `click` para links externos; o código dispara separadamente `whatsapp_quote_click` apenas nos botões de orçamento. Um clique externo no botão pode produzir os dois eventos, que têm nomes distintos; isso não é duplicidade do evento personalizado. Apenas `whatsapp_quote_click` está planejado para futura importação como conversão no Google Ads, que ainda não foi configurada. Não importar o `click` automático como conversão. Distinguir ambos de conversa recebida, contato qualificado e venda no acompanhamento manual. Um clique não comprova orçamento recebido ou venda.

O código GA4 usa Consent Mode v2 básico, consentimento analítico explícito e evento separado para clique de orçamento. A documentação de configurações confirmadas e pendências está em [ARCHITECTURE.md](ARCHITECTURE.md) e [PRIVACY-POLICY-DRAFT.md](PRIVACY-POLICY-DRAFT.md). Não enviar informações pessoais ou valores individualizados de contas em eventos. GTM, pixels, remarketing, campanhas, formulários e páginas adicionais continuam fora do escopo.

## Fluxo e validação

O baseline da V1 já foi integrado ao `main`. Criar uma branch por entrega a partir do baseline atualizado; revisar escopo e staged diff, usar commits convencionais e abrir um pull request próprio. Push, merge e publicação exigem autorização explícita no momento de cada ação. Não juntar todas as etapas em um único PR.

Em cada alteração, executar `npm run check`, `npm run build` e `git diff --check`. Para UI, revisar 375, 768 e 1440 px, overflow em 320 px e cabeçalho em 1024 px; conferir teclado, foco, contraste, menu, FAQ, skip link, âncoras e destinos do WhatsApp. Verificar HTML e assets gerados quanto a informações internas ou sensíveis.

Repetir Lighthouse após mudanças relevantes de marca, mídia ou desempenho, preservando as metas da SPEC; não prometer notas ou resultados de campo. Resumir arquivos alterados, evidências e endereço de visualização. Mudanças apenas documentais não exigem uma nova revisão visual ou Lighthouse do site.

Permanecem TBD os procedimentos especializados, diferenciais, garantias, financiamento, credenciais, detalhes específicos dos trabalhos e demais dados não fornecidos. Avançar somente com informações confirmadas ou propostas editoriais claramente identificadas.
