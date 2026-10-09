# Especificação do Produto — MCS Sollar, V1

Status: página institucional V1 implementada em português brasileiro (`pt-BR`). A evolução comercial aprovada está registrada em [MARKETING-PLAN.md](MARKETING-PLAN.md). O orçamento já tem destaque único no Hero e no CTA final; os textos comerciais e a aplicação da logo oficial ainda serão atualizados em entregas próprias. Domínio e hospedagem seguem TBD na documentação do projeto.

## Objetivo do projeto

Criar um site institucional estático para a **MCS Sollar**, empresa brasileira de energia solar com atendimento em **Manaus, AM**. Apresentar projetos, instalações e manutenção, demonstrar trabalhos reais autorizados, favorecer a descoberta em buscas locais e facilitar solicitações de orçamento pelo WhatsApp.

## Público-alvo

Clientes residenciais e empresas que buscam serviços de energia solar em Manaus. Segmentos especializados, serviços adicionais e atendimento em outras localidades permanecem TBD; não divulgar essas possibilidades sem confirmação.

## Conversões principais e secundárias

- **Principal aprovada para a evolução:** solicitar orçamento pelo botão “Solicitar orçamento”, via WhatsApp.
- **Secundária:** iniciar contato geral pelo WhatsApp, inclusive para outras necessidades de atendimento.
- **Estado atual da interface:** o Hero e o CTA final oferecem um único botão “Solicitar orçamento”. Contato geral permanece no cabeçalho e em Atendimento, em posições distintas.
- Número informado e corrigido pelo responsável: **+55 92 99996-0878**; formato do link: `5592999960878`.
- Mensagem atual do orçamento: **“Olá! Gostaria de solicitar um orçamento de energia solar.”** Uma mensagem estruturada será revisada na etapa de atendimento; o texto atual permanece até essa entrega.
- Contato geral abre a conversa sem mensagem obrigatória. Um clique não comprova uma conversa ou orçamento concluído. Testar o destino real antes da publicação.
- Instagram confirmado: **[@mcssollar](https://www.instagram.com/mcssollar/)**. Acesso no cabeçalho desktop, menu móvel e rodapé, como ação secundária à conversão pelo WhatsApp. Links abrem na mesma aba, sem feed incorporado.

## Estrutura inicial da página

Página única, com navegação por seções:

1. **Cabeçalho:** marca, menu, WhatsApp e Instagram.
2. **Apresentação:** energia solar em Manaus, resumo dos serviços e chamadas para ação.
3. **Serviços:** projetos, instalações e manutenção.
4. **Como solicitar atendimento:** orientação para iniciar conversa e explicar a necessidade.
5. **Sobre a MCS Sollar:** apresentação institucional breve.
6. **Perguntas frequentes:** dúvidas sobre serviços e solicitação de orçamento.
7. **Contato e rodapé:** WhatsApp, Manaus e identificação da empresa; Instagram no rodapé.

Imagens ilustrativas podem acompanhar apresentação e serviços, com identificação explícita. Há um acervo local recebido, ainda fora do site. A seção de trabalhos reais está planejada após Serviços, condicionada à seleção e à confirmação de autoria, autorização e informações de cada trabalho. Não criar projetos fictícios. Endereço, horários e outros contatos ficam ausentes até serem fornecidos.

## Identidade visual e imagens

- Referências históricas: [anúncio](references/mcs-sollar-announcement.png) e [logo do Instagram](references/mcs-sollar-instagram-logo.png).
- **Logo oficial confirmada:** `WhatsApp Image 2026-10-08 at 22.38.08.jpeg`, recebida no acervo local, com 911 × 456 px. É um JPEG; não presumir disponibilidade de arquivo vetorial ou transparente. Outras variantes não orientam a identidade do site.
- Preservar a grafia **MCS Sollar** e o símbolo de sol sobre painéis.
- Paleta atualmente implementada: azul profundo `#0B3D5C`, laranja solar `#F59A16`, fundo creme `#FFF5E8` e texto escuro `#172A34`.
- Paleta planejada, aproximada a partir do JPEG oficial: azul-marinho `#1F3D55`, dourado `#D9A945`, creme `#F7EAD7` e texto escuro `#172A34`. Aplicar na entrega de marca e validar as combinações reais. Dourado sobre creme não serve para texto essencial, foco ou marcadores interativos.
- Tipografia sem serifa, legível e profissional; evitar reproduzir a tipografia condensada do anúncio em textos longos.
- Usar a logo oficial recebida, preservando sua composição e proporções; revisar sua aplicação antes da publicação.
- O cabeçalho e `public/favicon.svg` ainda usam símbolos provisórios. A aplicação da logo e a adaptação do favicon ocorrerão na entrega de marca.
- Fotografias ilustrativas devem ter licença adequada e legenda “Imagem ilustrativa”. Fotos de trabalhos reais só podem receber essa atribuição após validação; não inferir potência, localização, cliente ou quantidade de projetos.
- Preservar originais fora do repositório. Publicar somente versões selecionadas e revisadas quanto a documentos, contatos, endereços, placas, identificadores, telas, pessoas e metadados. A revisão de vídeos inclui imagem e áudio.

## Conteúdo comercial e atendimento

O site ainda usa os textos institucionais iniciais centralizados nos módulos de conteúdo. As propostas abaixo orientarão a entrega de conteúdo e serão revisadas antes da publicação; não representam credenciais ou resultados comerciais.

- **H1 proposto:** “Energia solar em Manaus para sua residência ou empresa”.
- **Apresentação proposta:** “Projetos, instalações e manutenção de sistemas de energia solar. Conte seu consumo e as características do imóvel à MCS Sollar para solicitar um orçamento personalizado.”
- **Ação do Hero:** “Solicitar orçamento” como CTA único da seção.
- **Serviços e Sobre:** explicar a finalidade dos três serviços e a atuação residencial e comercial, sem adicionar procedimentos ou especialidades não confirmados.
- **FAQ:** ampliar as duas perguntas atuais com informações necessárias ao orçamento, público atendido e relação entre orçamento e características do imóvel. Respostas serão revisadas; financiamento, garantias e condições específicas continuam TBD.

Para iniciar o orçamento, a equipe solicita: consumo mensal em **kWh** ou valor aproximado da conta; tipo de telhado; e localização do imóvel. A entrega de atendimento explicará como informar esses dados e conversar com a equipe sobre a elaboração da proposta. Não garantir prazo, visita técnica ou proposta automática.

## Informações públicas e internas

Serviços, Manaus, canais de contato, público confirmado e orientações de atendimento podem integrar o conteúdo público. Referências financeiras, ticket médio, capacidade operacional, verba publicitária e critérios numéricos internos de qualificação ficam fora de todo o repositório, inclusive documentos, histórico, metadados e assets.

Não divulgar preços, valores mínimos, tabelas comerciais ou cálculos genéricos de investimento. Não prometer economia fixa nem retorno garantido. A qualificação é feita pela equipe, sem rejeição automática por consumo; o site não coleta nem armazena os dados informados na conversa.

Não acrescentar anos de atuação, certificações, quantidade de projetos ou garantias sem fonte aprovada. Preços e promessas financeiras permanecem fora do conteúdo público, conforme a política acima.

## Requisitos funcionais

- Menu responsivo, links internos e botões acessíveis em dispositivos móveis e computadores.
- Não colocar contato geral e solicitação de orçamento do WhatsApp lado a lado no mesmo grupo visual. Ações equivalentes podem aparecer em pontos diferentes da página.
- Links de WhatsApp com número consistente e mensagem corretamente codificada.
- Ações de contato visíveis; eventual botão flutuante não deve cobrir conteúdo ou controles.
- Conteúdo essencial disponível sem JavaScript; scripts apenas para melhorias necessárias.
- Orientações de orçamento e mensagens de WhatsApp estáticas, sem formulário de pré-qualificação, envio ou armazenamento de dados no site.
- Sem tags de mensuração, pixels ou embeds externos em V1. Links simples para os canais confirmados permanecem permitidos.

## Requisitos não funcionais

Layout com prioridade para celular, sem rolagem horizontal a partir de 320 px; identidade consistente; compatibilidade com navegadores atuais; manutenção simples; entrega de arquivos estáticos por HTTPS. Conteúdo publicado deve estar aprovado.

## SEO local

- Título proposto: “MCS Sollar | Energia Solar em Manaus”. Descrição baseada nos três serviços confirmados.
- Um H1, hierarquia lógica, HTML semântico e conteúdo útil em português com foco em Manaus.
- Nome e telefone consistentes; não inventar endereço nem criar páginas artificiais de localidades.
- URL canônica, sitemap, configuração de indexação e metadados sociais após definir o endereço público.
- Dados estruturados compatíveis com as informações reais disponíveis, sem endereço ou avaliações fictícias.
- Não prometer posições nos resultados de busca.

## Acessibilidade

Meta WCAG 2.2 AA: navegação por teclado, foco visível, contraste adequado, nomes acessíveis, landmarks semânticos, link para pular navegação e textos alternativos. Respeitar redução de movimento, zoom e áreas de toque confortáveis. Validar com ferramentas automáticas e revisão manual antes da entrega.

## Desempenho

Meta Lighthouse mobile ≥ 90 em desempenho. Metas de Core Web Vitals: LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1; medições reais dependem de tráfego após lançamento. Otimizar imagens responsivas, reservar dimensões, carregar imagens fora da primeira tela sob demanda e minimizar scripts e fontes. Evitar vídeos automáticos e embeds pesados.

## Restrições técnicas

Stack confirmada: **Astro**, **Tailwind CSS** e **TypeScript onde útil**, com saída exclusivamente estática. Preferir componentes Astro renderizados no build e evitar JavaScript desnecessário no cliente; a arquitetura inicial usa controles HTML nativos e não exige scripts de aplicação no navegador.

Sem backend, autenticação, banco de dados ou CMS. A página implementada inclui cabeçalho, apresentação, serviços, atendimento, sobre, FAQ, contato e rodapé. Atualizações de conteúdo ocorrem nos arquivos do projeto, sem painel administrativo. A organização técnica está descrita em [ARCHITECTURE.md](ARCHITECTURE.md).

## Hospedagem

**Provedor: TBD. Domínio/URL pública: TBD.** Manter a arquitetura independente de fornecedor, com publicação dos arquivos gerados em `dist/` em um serviço de hospedagem estática com HTTPS. Não exigir adaptador, SDK ou runtime de servidor específico. Priorizar uma opção gratuita ao selecionar o provedor; a recomendação anterior não fixa uma escolha de hospedagem. O repositório ainda não registra um destino definitivo ou configuração de provedor. Substituir o site antigo requer confirmação da infraestrutura e autorização própria; ele não é fonte de conteúdo ou design.

## Escopo da V1

Uma página institucional em português, serviços confirmados para residências e empresas em Manaus, orçamento personalizado pelo WhatsApp, contato geral secundário e Instagram. Evoluir conteúdo, marca e trabalhos reais em entregas revisadas, preservando SEO local, acessibilidade e desempenho. Mídias reais dependem de curadoria e autorização; conteúdo ainda não aplicado deve permanecer identificado como planejado.

## Fora do escopo

Portal do cliente, login, administração, CMS, banco de dados, formulários de pré-qualificação ou envio, CRM, pagamentos, agendamento, cálculo de economia, orçamento automático, chatbot, blog e múltiplos idiomas. Analytics, pixels, mapas incorporados, páginas adicionais para campanhas e demais integrações exigem avaliação e ampliação de escopo futuras. A preparação comercial para Google Ads não autoriza instalar tags nem criar campanhas.

## Pendências

- **Antes de publicar:** aplicar e revisar a logo oficial e os novos textos; testar o WhatsApp e a mensagem; definir o endereço público, a hospedagem e a configuração de SEO de publicação.
- **Mídias:** confirmar a seleção de fotos, autoria, autorização e informações de cada trabalho após revisão de privacidade. Vídeos serão uma entrega posterior, condicionada à revisão de imagem e áudio.
- **TBD comercial:** segmentos especializados, procedimentos técnicos adicionais, diferenciais comprovados, garantias, financiamento, credenciais, endereço, horários e outros contatos não fornecidos.
- **Depois:** definir quem fará atualizações e avaliar mensuração com escopo e requisitos de privacidade próprios. Distinguir clique, conversa recebida, lead qualificado e venda.
