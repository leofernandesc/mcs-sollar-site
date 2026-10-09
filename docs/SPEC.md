# Especificação do Produto — MCS Sollar, V1

Status: página institucional V1 implementada em português brasileiro (`pt-BR`). A evolução comercial aprovada está registrada em [MARKETING-PLAN.md](MARKETING-PLAN.md). A identidade visual e a proposta de conteúdo da etapa 2B estão aplicadas; a frase do Hero foi aprovada, com redução de escala solicitada. Fotos selecionadas aparecem no Hero, junto aos serviços e na seção Sobre; não há seção separada de trabalhos nem vídeo publicado. O endereço atual do Cloudflare Pages é apenas provisório; domínio próprio continua TBD.

## Objetivo do projeto

Criar um site institucional estático para a **MCS Sollar**, empresa brasileira de energia solar com atendimento em **Manaus, AM**. Apresentar projetos, instalações e manutenção, demonstrar trabalhos reais autorizados, favorecer a descoberta em buscas locais e facilitar solicitações de orçamento pelo WhatsApp.

## Público-alvo

Clientes residenciais e empresas que buscam serviços de energia solar em Manaus. Segmentos especializados, serviços adicionais e atendimento em outras localidades permanecem TBD; não divulgar essas possibilidades sem confirmação.

## Conversões principais e secundárias

- **Principal aprovada para a evolução:** solicitar orçamento pelo botão “Solicitar orçamento”, via WhatsApp.
- **Secundária:** iniciar contato geral pelo WhatsApp, inclusive para outras necessidades de atendimento.
- **Estado atual da interface:** o Hero e o CTA final oferecem um único botão “Solicitar orçamento”. Contato geral permanece no cabeçalho e em Atendimento, em posições distintas.
- Número informado e corrigido pelo responsável: **+55 92 99996-0878**; formato do link: `5592999960878`.
- Mensagem de orçamento: texto estruturado com campos para consumo, tipo de telhado e localização; o visitante pode preenchê-los na conversa do WhatsApp. A mensagem é codificada durante o build.
- Contato geral abre a conversa sem mensagem obrigatória. Um clique não comprova uma conversa ou orçamento concluído. Testar o destino real antes da publicação.
- Instagram confirmado: **[@mcssollar](https://www.instagram.com/mcssollar/)**. Acesso no cabeçalho desktop, menu móvel e rodapé, como ação secundária à conversão pelo WhatsApp. Links abrem na mesma aba, sem feed incorporado.

## Estrutura inicial da página

Página única, com navegação por seções:

1. **Cabeçalho:** marca, menu, WhatsApp e Instagram.
2. **Apresentação:** energia solar em Manaus, resumo dos serviços e chamadas para ação.
3. **Serviços:** projetos, instalações e manutenção.
4. **Atendimento:** três orientações para compartilhar consumo, características do imóvel e iniciar a conversa de orçamento.
5. **Sobre a MCS Sollar:** apresentação institucional breve.
6. **Perguntas frequentes:** dúvidas sobre serviços e solicitação de orçamento.
7. **Contato e rodapé:** WhatsApp, Manaus e identificação da empresa; Instagram no rodapé.

Imagens ilustrativas devem ser identificadas. As fotos usadas no Hero, nos serviços e em Sobre foram indicadas pelo responsável e publicadas sem metadados. Sobre reúne duas fotos: a instalação de um inversor e uma placa de alerta, sem afirmar conformidade ou certificação; marcas manuscritas na parede foram removidas do derivado da placa. A foto do alicate usa o JPEG original aprovado, mantendo o quadro completo e o visor legível como registrado, sem reconstruir ou alterar a leitura. A foto dos painéis usada no Hero não mostra a numeração da casa vizinha nem uma pessoa que aparecia na borda. Não associar as mídias a endereço, cliente, potência ou localização específica. Endereço, horários e outros contatos ficam ausentes até serem fornecidos. Vídeos não são publicados nesta versão.

## Identidade visual e imagens

- Referências históricas: [anúncio](references/mcs-sollar-announcement.png) e [logo do Instagram](references/mcs-sollar-instagram-logo.png).
- **Logo oficial confirmada:** `WhatsApp Image 2026-10-08 at 22.38.08.jpeg`, recebida no acervo local, com 911 × 456 px. É um JPEG; não presumir disponibilidade de arquivo vetorial ou transparente. Outras variantes não orientam a identidade do site.
- Preservar a grafia **MCS Sollar** e o símbolo de sol sobre painéis.
- Paleta aplicada, aproximada a partir do JPEG oficial: azul-marinho `#1F3D55`, dourado `#D9A945`, creme `#F7EAD7` e texto escuro `#172A34`. São referências extraídas da imagem, não valores de um manual oficial de marca. Dourado sobre creme não serve para texto essencial, foco ou marcadores interativos.
- Tipografia sem serifa, legível e profissional; evitar reproduzir a tipografia condensada do anúncio em textos longos.
- Usar a logo oficial recebida, preservando sua composição e proporções. A versão JPEG fornecida está em `src/assets/images/brand/mcs-sollar-official.jpeg`; o Astro gera uma versão otimizada para o cabeçalho. O favicon é uma simplificação vetorial do símbolo, usando as cores aproximadas da marca.
- Revisar a legibilidade da logo e a paleta nos tamanhos de tela suportados antes da publicação. O arquivo original continua sendo raster; não há versão vetorial ou transparente confirmada.
- Fotografias ilustrativas devem ter licença adequada e legenda “Imagem ilustrativa”. As fotos reais selecionadas foram autorizadas pelo responsável; não inferir potência, localização, cliente ou quantidade de projetos.
- As mídias aprovadas ficam em `src/assets/images/hero/`, `src/assets/images/services/` e `src/assets/images/about/`; o JPEG original do alicate e a logo oficial são mantidos como originais aprovados sem metadados EXIF. Os demais originais não selecionados permanecem no acervo externo. Revisar enquadramentos e metadados antes de publicar outras mídias.
- Preservar fora do repositório os originais não selecionados. Publicar somente mídias selecionadas e revisadas quanto a documentos, contatos, endereços, placas, identificadores, telas, pessoas e metadados.

## Conteúdo comercial e atendimento

Os textos comerciais abaixo foram aplicados como proposta editorial e devem ser revisados antes da publicação. Não representam credenciais ou resultados comerciais.

- **H1 aprovado:** “Energia solar para sua residência ou empresa”; o eyebrow do Hero informa “Manaus, AM”. A escala maior do título foi reduzida a pedido do responsável.
- **Apresentação atual:** “A MCS Sollar oferece projetos, instalações e manutenção de sistemas fotovoltaicos para residências e empresas em Manaus. O orçamento considera o consumo de energia e as características de cada imóvel.”
- **Ação principal do Hero:** “Solicitar orçamento”; a ação secundária leva à seção de serviços. Há apenas um CTA de WhatsApp no grupo visual.
- **Serviços e Sobre:** descrevem projetos, instalações, manutenção e atendimento residencial/comercial, sem adicionar procedimentos ou especialidades não confirmados.
- **FAQ atual:** informa quais dados enviar para orçamento, o atendimento residencial e empresarial em Manaus e os fatores considerados na proposta. Financiamento, garantias e condições técnicas específicas continuam TBD e não são mencionados.

Para iniciar o orçamento, a equipe solicita: consumo mensal em **kWh** ou valor aproximado da conta; tipo de telhado; e localização do imóvel. A seção de Atendimento orienta o visitante a compartilhar esses dados e conversar com a equipe sobre a elaboração da proposta. Não garantir prazo, visita técnica ou proposta automática.

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
- O preview `mcs-sollar-site.pages.dev` deve permanecer com `noindex` enquanto for provisório; `robots.txt` permite rastreamento para que os buscadores leiam a diretiva. URL canônica, sitemap e indexação pública aguardam a conexão do domínio próprio.
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

**Preview atual:** [mcs-sollar-site.pages.dev](https://mcs-sollar-site.pages.dev/) no Cloudflare Pages, endereço provisório. O domínio próprio e a URL definitiva permanecem TBD. Manter a arquitetura de produção independente de fornecedor, com arquivos estáticos em `dist/`, sem adaptador ou runtime específico. O preview deve usar `noindex`; remover essa diretiva e configurar canonical, sitemap e indexação quando o domínio final estiver conectado. Substituir o site antigo requer confirmação da infraestrutura e autorização própria; ele não é fonte de conteúdo ou design.

## Escopo da V1

Uma página institucional em português, serviços confirmados para residências e empresas em Manaus, orçamento personalizado pelo WhatsApp, contato geral secundário e Instagram. Inclui fotos reais selecionadas no Hero e nos três blocos de serviço; Sobre contém duas fotos, da instalação de inversor e da placa de sinalização de risco elétrico. Não publica vídeo. Preservar SEO local, acessibilidade e desempenho.

## Fora do escopo

Portal do cliente, login, administração, CMS, banco de dados, formulários de pré-qualificação ou envio, CRM, pagamentos, agendamento, cálculo de economia, orçamento automático, chatbot, blog e múltiplos idiomas. Analytics, pixels, mapas incorporados, páginas adicionais para campanhas e demais integrações exigem avaliação e ampliação de escopo futuras. A preparação comercial para Google Ads não autoriza instalar tags nem criar campanhas.

## Pendências

- **Antes de publicar no domínio próprio:** revisar a aplicação responsiva da logo e os textos; testar WhatsApp e mensagem; conectar o domínio; remover `noindex`; configurar canonical, sitemap e metadados sociais definitivos.
- **Mídias:** fotos selecionadas pelo responsável foram revisadas para publicação sem metadados. A imagem do alicate usa o original aprovado, com o visor legível e a leitura preservada exatamente como registrada; as imagens de Instalações e Manutenção mantêm o quadro completo. Marcas manuscritas foram removidas do derivado da placa, agora exibida em Sobre ao lado da foto da instalação de inversor. A foto dos painéis usada no Hero omite a numeração vizinha e uma pessoa na borda. A placa aparece como registro visual, sem alegação de conformidade. Capturas de aplicativo e peças promocionais com informações ou afirmações pendentes não são publicadas; vídeos foram retirados do escopo atual.
- **TBD comercial:** segmentos especializados, procedimentos técnicos adicionais, diferenciais comprovados, garantias, financiamento, credenciais, endereço, horários e outros contatos não fornecidos.
- **Depois:** definir quem fará atualizações e avaliar mensuração com escopo e requisitos de privacidade próprios. Distinguir clique, conversa recebida, lead qualificado e venda.
