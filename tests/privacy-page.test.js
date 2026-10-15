import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync(new URL("../src/pages/privacidade.astro", import.meta.url), "utf8");
const consentManager = readFileSync(
  new URL("../src/components/ui/consent-manager.astro", import.meta.url),
  "utf8",
);
const footer = readFileSync(
  new URL("../src/components/sections/site-footer.astro", import.meta.url),
  "utf8",
);
const layout = readFileSync(new URL("../src/layouts/site-layout.astro", import.meta.url), "utf8");
const sitemap = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");
const analyticsConsent = readFileSync(
  new URL("../src/utils/analytics-consent.js", import.meta.url),
  "utf8",
);
const whatsappLink = readFileSync(
  new URL("../src/components/ui/whatsapp-link.astro", import.meta.url),
  "utf8",
);
const privacyDraft = readFileSync(
  new URL("../docs/PRIVACY-POLICY-DRAFT.md", import.meta.url),
  "utf8",
);

test("privacy page contains the supplied company identity and monitored privacy channel", () => {
  for (const value of [
    "M C SILVA LTDA",
    "10.676.289/0001-17",
    "Rua Arquiteto Renato Braga, nº 67, Manaus – AM, CEP 69054-699",
    "mcsparintins@gmail.com",
  ]) {
    assert.ok(page.includes(value), `missing approved company value: ${value}`);
  }
  assert.match(page, /M C SILVA LTDA[\s\S]*?é a controladora dos dados pessoais/);
  assert.match(
    page,
    /utiliza essas informações para atender clientes, analisar o consumo de energia, dimensionar sistemas fotovoltaicos, elaborar propostas e acompanhar solicitações comerciais/,
  );
});

test("public page copy has no internal review markers and uses the current site layout", () => {
  assert.doesNotMatch(page, /\b(?:TBD|TODO|pendente|minuta interna|não publicar)\b/i);
  assert.doesNotMatch(page, /o código do site não confirma|ainda não foi auditad[oa]/i);
  assert.match(page, /<SiteLayout title=\{title\} description=\{description\}>/);
  assert.match(layout, /<link rel="canonical" href=\{canonicalUrl\.href\}/);
  assert.match(layout, /<meta name="robots" content="index, follow"\s*\/>/);
  assert.doesNotMatch(page, /noindex/i);
});

test("privacy policy is linked from consent views and footer, with root-aware footer anchors", () => {
  assert.equal(consentManager.match(/href="\/privacidade\/"/g)?.length, 2);
  assert.match(footer, /href="\/privacidade\/"[\s\S]*?Política de Privacidade/);
  assert.match(footer, /homeSectionHref\(item\.href\)/);
  assert.match(sitemap, /<loc>https:\/\/mcssollar\.com\.br\/privacidade\/<\/loc>/);
});

test("approved consent wording remains unchanged", () => {
  assert.ok(
    consentManager.includes(
      "Usamos cookies opcionais para entender quantas pessoas visitam nosso site, quais páginas acessam e quais botões utilizam. Isso nos ajuda a melhorar sua experiência.",
    ),
  );
  assert.ok(consentManager.includes("Você pode mudar sua escolha a qualquer momento."));
  assert.match(consentManager, />\s*Recusar\s*<\/button>/);
  assert.match(consentManager, />\s*Aceitar\s*<\/button>/);
});

test("local consent validity remains 180 days and is described on the page", () => {
  assert.match(analyticsConsent, /CONSENT_MAX_AGE_DAYS = 180/);
  assert.match(page, /por até 180 dias/);
  assert.match(page, /armazenamento do próprio navegador, fora dos cookies/);
  assert.match(page, /registro é removido quando você voltar ao site/);
});

test("public policy distinguishes providers, retention categories, and LGPD rights", () => {
  for (const provider of ["Google Analytics", "WhatsApp", "Instagram", "HostGator"]) {
    assert.ok(page.includes(provider), `missing provider disclosure: ${provider}`);
  }
  for (const disclosure of [
    "Dados de análise",
    "Propostas não aceitas",
    "Contratos e projetos concluídos",
    "Registros técnicos da hospedagem",
    "possibilidade de não fornecer consentimento",
    "petição à Autoridade Nacional de Proteção de Dados (ANPD)",
    "oposição a tratamento realizado sem consentimento",
  ]) {
    assert.ok(page.includes(disclosure), `missing privacy disclosure: ${disclosure}`);
  }
  assert.doesNotMatch(page, /base legal (?:é|será) (?:o legítimo interesse|a execução de contrato)/i);
});

test("public policy reflects verified GA4 settings and explains the limits of retention", () => {
  for (const disclosure of [
    "Google Analytics 4 (GA4)",
    "medição de rolagens e de cliques que levam a outros sites",
    "somente para acessos do Brasil",
    "pesquisa no site, uso de formulários, vídeos ou downloads",
    "Google Signals",
    "coleta de dados fornecidos pelos usuários",
    "publicidade personalizada",
    "desativada nas 307 regiões",
    "compartilhamento de dados da conta Google está limitado ao apoio técnico",
    "período de dois meses",
    "não é reiniciado por nova atividade",
    "não significa que todos os relatórios ou informações agregadas sejam apagados",
  ]) {
    assert.ok(page.includes(disclosure), `missing GA4 disclosure: ${disclosure}`);
  }
  assert.doesNotMatch(page, /nem todos os ajustes ativos foram confirmados|configurações e o prazo atualmente usados pela conta não foram confirmados/i);
});

test("public policy explains the confirmed GA4 and Google Ads account link", () => {
  for (const disclosure of [
    "vinculada à conta Google Ads da MCS Sollar",
    "importação de métricas de aplicativos e da Web está habilitada",
    "importação de públicos do Analytics está desativada",
    "O Google Signals e a personalização de anúncios também estão desativados",
    "não significa que públicos estejam sendo usados para remarketing",
  ]) {
    assert.ok(page.includes(disclosure), `missing account-link disclosure: ${disclosure}`);
  }
  assert.match(page, /Apenas esse registro específico de orçamento está previsto para uma futura importação como conversão/);
  assert.match(page, /essa conversão ainda não foi configurada/);
});

test("external click measurement and the WhatsApp quote event remain distinct", () => {
  assert.match(page, /medir automaticamente cliques que levam a outros sites[\s\S]*?registra separadamente os cliques nos botões de orçamento/);
  assert.match(whatsappLink, /data-analytics-event=\{intent === "quote" \? "whatsapp_quote_click" : undefined\}/);
  assert.equal(consentManager.match(/consent\.trackQuoteClick\(\)/g)?.length, 1);
  assert.equal(analyticsConsent.match(/gtag\("event", "whatsapp_quote_click"\)/g)?.length, 1);
  assert.doesNotMatch(analyticsConsent, /gtag\("event", "click"/);
  assert.match(privacyDraft, /somente `whatsapp_quote_click` está previsto para futura importação como conversão/i);
});

test("public policy describes confirmed commercial data sources, categories, and purposes", () => {
  for (const disclosure of [
    "por WhatsApp, e-mail e entrega direta",
    "nome, telefone, e-mail, CPF ou CNPJ, endereço do imóvel",
    "contas de energia elétrica, propostas, contratos e outros documentos comerciais",
    "analisar o consumo de energia, dimensionar sistemas fotovoltaicos",
    "não consulta sistemas de distribuidoras",
    "não usa sua base de contatos para enviar publicidade não solicitada",
    "proprietários ou responsáveis autorizados",
    "computadores usados nesses trabalhos são protegidos por senha",
  ]) {
    assert.ok(page.includes(disclosure), `missing commercial privacy disclosure: ${disclosure}`);
  }
});

test("public retention wording gives the approved scope and accurately states its implementation stage", () => {
  for (const disclosure of [
    "em até 30 dias",
    "após o registro formal feito pela empresa",
    "conversa correspondente no WhatsApp e seus anexos",
    "contas de energia, documentos recebidos e arquivos ou registros relacionados em computadores e planilhas",
    "obrigações legais ou exercer regularmente direitos",
    "revisão semestral para avaliar se os dados ainda precisam ser mantidos",
    "Essa revisão está em implantação",
    "A implantação do procedimento de exclusão em até 30 dias também está em andamento",
    "Não há um prazo único de exclusão para todos os documentos contratuais",
    "A exclusão de arquivos pela empresa não apaga automaticamente registros mantidos pelas plataformas ou pela hospedagem",
  ]) {
    assert.ok(page.includes(disclosure), `missing retention disclosure: ${disclosure}`);
  }
  assert.doesNotMatch(page, /dados .*?já foram apagados automaticamente/i);
});

test("public policy accurately describes retention of contracted project records", () => {
  for (const disclosure of [
    "durante a contratação e a instalação, a empresa conserva os dados necessários para realizar os serviços",
    "mantém arquivados contratos, documentos e informações do projeto após a instalação",
    "obrigações legais ou fiscais, atender garantias ou exercer regularmente direitos",
    "Dados que não forem mais necessários deverão ser avaliados para eliminação",
    "deverá incluir documentos de projetos concluídos",
  ]) {
    assert.ok(page.includes(disclosure), `missing project-record retention disclosure: ${disclosure}`);
  }
});

test("internal draft records the confirmed operation, no-backup status, and implementation caveats", () => {
  for (const disclosure of [
    "A empresa informou que atualmente não realiza backups dos arquivos comerciais.",
    "a base de contatos não é usada para publicidade não solicitada",
    "documentos de clientes não são compartilhados com parceiros ou terceiros para executar os serviços",
    "até 30 dias após o encerramento",
    "os procedimentos de exclusão e revisão semestral estão sendo implementados",
    "Propostas aceitas e outros atendimentos comerciais",
    "A empresa mantém contratos, documentos e informações de projetos arquivados após as instalações",
    "prazo único de exclusão para todos os documentos contratuais",
    "não significa exclusão automática de dados já processados",
    "foram verificadas manualmente em 2026-10-15",
    "compartilhamento de dados da conta limitado a apoio técnico",
    "A interface administrativa do GA4 ainda informa que os sinais de consentimento estão inativos",
    "não comprova nem falha nem funcionamento correto do Consent Mode",
    "não foi publicada",
  ]) {
    assert.ok(privacyDraft.includes(disclosure), `missing internal record: ${disclosure}`);
  }
});
