# Minuta de privacidade — MCS Sollar

Esta minuta registra o tratamento realizado pelo código de Google Analytics 4 incluído nesta versão. A identidade jurídica do controlador e a aprovação final do texto permanecem pendentes. Este arquivo fica em `docs/`, fora das rotas do Astro e do conteúdo de `dist/`; não há página pública de política. A rota só deve ser criada depois da confirmação dos dados e da aprovação do texto. `noindex` não restringe acesso a uma página.

## Tratamento implementado no código do site

- O site é estático, não possui formulário próprio e não recebe as informações trocadas depois que a pessoa abre o WhatsApp.
- A medição usa o fluxo GA4 `mcssollar`, ID `G-DN2JNCM7VC`. A tag externa só é solicitada depois de uma autorização explícita para analytics. Os comandos de consentimento começam com `analytics_storage`, `ad_storage`, `ad_user_data` e `ad_personalization` negados. Se a escolha for recusada ou revogada, o código atualiza o estado para negado e tenta apagar cookies GA acessíveis no navegador. Se o tag já estiver carregado, o documento também restringe conexões externas via CSP para bloquear requisições analíticas adiadas e recarrega para descartar o tag em memória. Uma autorização futura é aplicada no documento reaberto.
- Depois do consentimento, uma única configuração do Google tag permite a visualização automática de página. Não há `page_view` manual. A medição otimizada configurada no fluxo registra visualizações, deslocamentos e cliques de saída; pesquisa interna, formulários, vídeos e downloads estão desativados.
- O clique de saída pode incluir a URL de destino no evento automático. Para orçamento, ela contém o número público da MCS Sollar e uma mensagem padrão. O evento personalizado `whatsapp_quote_click` é enviado somente pelos links com intenção de orçamento, sem propriedades personalizadas nem conteúdo fornecido pela pessoa visitante. Links gerais de contato não geram esse evento personalizado. O evento automático de saída e o evento personalizado são registros distintos.
- A coleta de Google Signals, dados fornecidos pelos usuários e personalização de anúncios está desativada. A personalização de anúncios está desativada nas 307 regiões configuradas. A coleta detalhada de localização e dispositivo está ativada.
- A retenção informada para o fluxo é de dois meses para eventos e usuários; a renovação por atividade nova está desativada. O compartilhamento de dados está limitado ao apoio técnico. Essas opções são administradas na conta GA4 e não são controladas pelo HTML do site.
- A escolha de consentimento é guardada em `localStorage` por até 180 dias. Esse prazo permanece provisório até aprovação. O código não configura separadamente o prazo dos cookies analíticos; confirmar o valor aplicável nas configurações da tag antes da publicação.
- O botão “Preferências de privacidade” permite reabrir e modificar a escolha. A página continua navegável quando a medição é recusada.

## Contato e informações pendentes

O canal de contato indicado para solicitações de privacidade é **mcsparintins@gmail.com**. A razão social, o CNPJ, o endereço e a identidade formal do controlador ainda não foram fornecidos. Não inserir dados presumidos. Também precisa ser confirmado quem acompanhará as solicitações recebidas por esse canal e se há informação sobre encarregado de dados que deva constar no texto.

## Confirmações antes de publicar uma política

1. Informar os dados jurídicos verdadeiros do controlador e aprovar como serão apresentados.
2. Confirmar que `mcsparintins@gmail.com` será monitorado para solicitações de privacidade e definir quem responderá.
3. Aprovar o consentimento analítico, os textos do banner e o prazo de 180 dias da preferência armazenada.
4. Conferir na interface da propriedade `mcssollar` os valores de retenção, renovação por atividade, Google Signals, dados fornecidos pelos usuários, regiões de personalização, coleta detalhada de localização/dispositivo, eventos de medição otimizada e compartilhamento de dados. O inventário acima reflete as configurações informadas para este trabalho; o código local não comprova a configuração da conta.
5. Confirmar o prazo dos cookies GA e revisar quais informações de localização, dispositivo e URL serão descritas no aviso final.
6. Confirmar com a hospedagem quais registros técnicos são gerados, sua finalidade, retenção e acesso.
7. Revisar os termos aplicáveis ao uso do Google Analytics, o papel das partes e os tratamentos/transferências pertinentes com quem aprovará o aviso.
8. Aprovar o texto final antes de criar uma rota pública de política.

## Publicação

Esta é uma minuta de trabalho, não uma política pronta. O site não inclui `src/pages/privacidade.astro`, e este documento não é copiado para `dist/`; assim, o build não disponibiliza uma página incompleta. Quando houver aprovação, criar a rota pública e revisar canonical, indexação, sitemap e links antes de uma publicação autorizada.
