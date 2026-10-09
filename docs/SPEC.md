# Especificação do Produto — MCS Sollar, V1

Status: página institucional V1 implementada em português brasileiro (`pt-BR`). Textos, marca e favicon provisórios aguardam aprovação final; domínio e hospedagem seguem pendentes.

## Objetivo do projeto

Criar um site institucional estático para a **MCS Sollar**, empresa brasileira de energia solar com atendimento em **Manaus, AM**. Apresentar projetos, instalações e manutenção, favorecer a descoberta em buscas locais e incentivar conversas pelo WhatsApp.

## Público-alvo

Pessoas que buscam serviços de energia solar em Manaus. A prioridade entre clientes residenciais, comerciais, industriais ou rurais ainda não foi definida; evitar alegações específicas sobre esses segmentos até confirmação.

## Conversões principais e secundárias

- **Principal:** iniciar conversa no WhatsApp pelo botão “Fale pelo WhatsApp”.
- **Secundária:** solicitar orçamento pelo botão “Solicitar orçamento”, também via WhatsApp.
- Número informado e corrigido pelo responsável: **+55 92 99996-0878**; formato do link: `5592999960878`.
- Mensagem do orçamento: **“Olá! Gostaria de solicitar um orçamento de energia solar.”**
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

Imagens ilustrativas podem acompanhar apresentação e serviços. Portfólio e depoimentos só entram quando houver material real autorizado; não criar projetos fictícios. Endereço, horários e outros contatos ficam ausentes até serem fornecidos.

## Identidade visual e imagens

- Referências recebidas: [anúncio](references/mcs-sollar-announcement.png) e [logo do Instagram](references/mcs-sollar-instagram-logo.png). São capturas de referência, sem arquivo original disponível.
- Preservar a grafia **MCS Sollar** e o símbolo de sol sobre painéis.
- Paleta proposta: azul profundo `#0B3D5C`, laranja solar `#F59A16`, fundo creme `#FFF5E8` e texto escuro `#172A34`. Validar contraste nas combinações utilizadas.
- Tipografia sem serifa, legível e profissional; evitar reproduzir a tipografia condensada do anúncio em textos longos.
- A recriação fiel da marca foi autorizada como opção; qualquer versão deverá ser revisada antes da publicação.
- O cabeçalho usa um símbolo SVG de sol sobre painéis; `public/favicon.svg` adapta esse símbolo para tamanhos pequenos. Ambos permanecem provisórios, pendentes de aprovação final.
- Fotografias devem ter licença adequada e identificação de “Imagem ilustrativa” junto ao conteúdo. Não apresentá-las como instalações da empresa.

## Textos iniciais para revisão

Propostas editoriais; não representam validação de processos, credenciais ou resultados.

- **Título:** “Energia solar em Manaus”.
- **Apresentação:** “Projetos, instalações e manutenção em energia solar. Converse com a MCS Sollar e solicite um orçamento para sua necessidade.”
- **Projetos:** “Precisa de um projeto de energia solar? Fale com a MCS Sollar sobre sua necessidade.”
- **Instalações:** “Solicite um orçamento para instalação de energia solar em Manaus.”
- **Manutenção:** “Entre em contato para consultar os serviços de manutenção em energia solar.”
- **Sobre:** “A MCS Sollar oferece projetos, instalações e manutenção em energia solar em Manaus. Entre em contato pelo WhatsApp para conhecer os serviços e solicitar um orçamento.”
- **Atendimento:** “Abra uma conversa no WhatsApp e conte qual serviço procura.” Etapas técnicas e comerciais adicionais dependem de confirmação.
- **FAQ:** “Como solicitar um orçamento?” → “Use o botão Solicitar orçamento para conversar pelo WhatsApp.” “Quais serviços são oferecidos?” → “Projetos, instalações e manutenção em energia solar.”

Não acrescentar anos de atuação, certificações, quantidade de projetos, economia garantida, preços ou garantias sem fonte aprovada.

## Requisitos funcionais

- Menu responsivo, links internos e botões acessíveis em dispositivos móveis e computadores.
- Links de WhatsApp com número consistente e mensagem corretamente codificada.
- Ações de contato visíveis; eventual botão flutuante não deve cobrir conteúdo ou controles.
- Conteúdo essencial disponível sem JavaScript; scripts apenas para melhorias necessárias.
- Sem formulário de envio, armazenamento de dados ou integrações externas em V1.

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

**Provedor: TBD. Domínio/URL pública: TBD.** Manter a arquitetura independente de fornecedor, com publicação dos arquivos gerados em `dist/` em um serviço de hospedagem estática com HTTPS. Não exigir adaptador, SDK ou runtime de servidor específico. Priorizar uma opção gratuita ao selecionar o provedor; a recomendação anterior não fixa uma escolha de hospedagem. Nenhuma conta ou hospedagem foi configurada.

## Escopo da V1

Uma página institucional em português, serviços confirmados, conteúdo provisório sujeito à revisão, imagens ilustrativas identificadas, identidade baseada na marca recebida, contato e orçamento pelo WhatsApp, SEO local, acessibilidade, desempenho e instruções de publicação estática.

## Fora do escopo

Portal do cliente, login, administração, CMS, banco de dados, formulários com envio, CRM, pagamentos, agendamento, cálculo de economia, orçamento automático, chatbot, blog e múltiplos idiomas. Analytics, pixels, mapas incorporados e demais integrações ficam para depois. Portfólio real depende do envio de materiais.

## Pendências

- **Antes de publicar:** revisar textos e versão final da marca; testar o WhatsApp e a mensagem; definir o endereço público e configurar a conta de hospedagem.
- **Para refinar o conteúdo:** informar eventual prioridade de público, etapas reais de atendimento, diferenciais comprovados e endereço público, se desejado. Sem essas informações, usar apresentação geral e omitir detalhes.
- **Depois:** receber fotos reais autorizadas, definir quem fará atualizações e avaliar analytics ou outras integrações.
