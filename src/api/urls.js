const isProduction = window.location.href.includes("www.intern.nav.no") || window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("www.dev.nav.no");

export const getEnvironment = () => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};

const NAV_URL = {
  local: "http://localhost:3000",
  development: "https://www.dev.nav.no",
  production: "https://www.nav.no",
};

const API_URL = {
  local: "http://localhost:3000/api/endpoint",
  development: "https://person.dev.nav.no/api/endpoint",
  production: "https://person.nav.no/api/endpoint",
};

const DITTNAV_API_URL = {
  local: "http://localhost:3000/dittnav-api",
  development: "https://www.dev.nav.no/dittnav-api",
  production: "https://www.nav.no/dittnav-api",
};

const LOGINSERVICE_URL = {
  local: "http://localhost:3000",
  development: "https://loginservice.dev.nav.no",
  production: "https://loginservice.nav.no",
};

const TJENESTER_URL = {
  local: "http://localhost:3000/tjenester",
  development: "https://tjenester.dev.nav.no",
  production: "https://tjenester.nav.no",
};

const PERSON_NAV_URL = {
  local: "http://localhost:3000",
  development: "https://person.dev.nav.no",
  production: "https://person.nav.no",
};

const MIN_SIDE_URL = {
  local: "http://localhost:3000/minside",
  development: "https://www.dev.nav.no/minside",
  production: "https://www.nav.no/minside",
};

const MIN_SIDE_PROXY_URL = {
  local: "http://localhost:3000/login/status",
  development: "https://www.dev.nav.no/tms-min-side-proxy",
  production: "https://www.intern.nav.no/tms-min-side-proxy/login/status",
};

const INNBOKS_URL = {
  local: "http://localhost:3000/innboks",
  development: "https://uat-navdialog.cs108.force.com/Innboks/s/",
  production: "https://innboks.nav.no",
};

const MELDEKORT_MIKROFRONTEND_URL = {
  local: "http://localhost:3000/meldekort/bundle.js",
  development: "https://www.dev.nav.no/tms-meldekort-mikrofrontend/tms-meldekort-mikrofrontend.js",
  production: "https://www.nav.no/tms-meldekort-mikrofrontend/tms-meldekort-mikrofrontend.js",
};

const UTKAST_API_URL = {
  local: "http://localhost:3000/api/endpoint/utkast",
  development: "https://www.dev.nav.no/tms-min-side-proxy/utkast/utkast",
  production: "https://www.nav.no/tms-min-side-proxy/utkast/utkast",
};

const DIGISOS_UTKAST_API_URL = {
  local: "http://localhost:3000/api/endpoint/digisos/utkast/antall",
  development: "https://www.dev.nav.no/dittnav-api/digisos/utkast/antall",
  production: "https://www.nav.no/dittnav-api/digisos/utkast/antall",
};

export const apiUrl = API_URL[getEnvironment()];
export const dittNavApiUrl = DITTNAV_API_URL[getEnvironment()];
export const navUrl = NAV_URL[getEnvironment()];
export const loginserviceUrl = LOGINSERVICE_URL[getEnvironment()];
export const tjenesterUrl = TJENESTER_URL[getEnvironment()];
export const personNavUrl = PERSON_NAV_URL[getEnvironment()];
export const minSideUrl = MIN_SIDE_URL[getEnvironment()];
export const minSideProxyUrl = MIN_SIDE_PROXY_URL[getEnvironment()];
export const innboksUrl = INNBOKS_URL[getEnvironment()];
export const meldekortMikrofrontendUrl = MELDEKORT_MIKROFRONTEND_URL[getEnvironment()];
export const utkastApiUrl = UTKAST_API_URL[getEnvironment()];
export const digisosUtkastApiUrl = DIGISOS_UTKAST_API_URL[getEnvironment()];

export const meldekortinfoApiUrl = `${dittNavApiUrl}/meldekortinfo`;
export const meldekortUrl = `${navUrl}/meldekort`;
export const etterregistreringMeldekortUrl = `${navUrl}/meldekort/etterregistrer-meldekort`;
export const oppgaverApiUrl = `${dittNavApiUrl}/oppgave`;
export const beskjederApiUrl = `${dittNavApiUrl}/beskjed`;
export const innboksApiUrl = `${dittNavApiUrl}/innboks`;
export const inaktiveOppgaverApiUrl = `${dittNavApiUrl}/oppgave/inaktiv`;
export const inaktiveBeskjederApiUrl = `${dittNavApiUrl}/beskjed/inaktiv`;
export const inaktiveInnboksApiUrl = `${dittNavApiUrl}/innboks/inaktiv`;
export const brukernavnApiUrl = `${dittNavApiUrl}/navn`;
export const identApiUrl = `${dittNavApiUrl}/ident`;
export const paabegynteSoknaderApiUrl = `${dittNavApiUrl}/saker/paabegynte`;
export const ubehandledeMeldingerApiUrl = `${dittNavApiUrl}/meldinger/ubehandlede`;
export const sakerApiUrl = `${dittNavApiUrl}/saker`;
export const innloggingsstatusUrl = `${navUrl}/person/innloggingsstatus`;
export const loginserviceStepUpUrl = `${loginserviceUrl}/login?level=Level4&redirect=${minSideUrl}`;
export const tilbakebetalingsUrl = `${navUrl}/dagpenger/forskudd/oversikt`;
export const koronaVeiviserUrl = `${navUrl}/person/koronaveiviser`;
export const utbetalingsoversiktUrl = `${navUrl}/utbetalingsoversikt`;
export const mineSakerUrl = `${personNavUrl}/mine-saker`;
export const oppfolgingUrl = `${dittNavApiUrl}/oppfolging`;
export const postDigiSosDoneUrl = `${dittNavApiUrl}/digisos/paabegynte/done`;
export const postDoneUrl = `${dittNavApiUrl}/produce/done`;
export const sykefravaerUrl = `${navUrl}/syk/sykefravaer`;
export const arbeidUrl = `${navUrl}/arbeid`;
export const soknadUrl = `${navUrl}/soknader`;
export const dinPensjonUrl = `${tjenesterUrl}/pselv/publisering/dinpensjon.jsf`;
export const minInnboksUrl = "https://www.nav.no/no/ditt-nav/meldingene-dine-er-flyttet";
export const dialogMedVeilederUrl = `${navUrl}/person/dittnav/veientilarbeid/dialog`;
export const minSideProxyLoginStatusUrl = `${minSideProxyUrl}//login/status`;
export const minSideVarslingerUrl = `${minSideUrl}/varslinger`;
export const antallUtkastUrl = `${utkastApiUrl}/antall`;
export const minSideUtkastUrl = `${minSideUrl}/utkast`;
