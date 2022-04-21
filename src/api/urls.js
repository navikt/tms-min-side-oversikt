function getEnvironment() {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
}

const NAV_URL = {
  development: "http://localhost:3000",
  production: "https://nav.no",
};

const API_URL = {
  development: "http://localhost:3000/api/endpoint",
  production: "https://person.nav.no/api/endpoint",
};

const DITTNAV_API_URL = {
  development: "http://localhost:3000/dittnav-api",
  production: "https://www.nav.no/person/dittnav-api",
};

const LOGINSERVICE_URL = {
  development: "http://localhost:3000",
  production: "https://loginservice.nav.no",
};

const TJENESTER_URL = {
  development: "http://localhost:3000/tjenester",
  production: "https://tjenester.nav.no",
};

const PERSON_NAV_URL = {
  development: "http://localhost:3000",
  production: "https://person.nav.no",
};

export const apiUrl = API_URL[getEnvironment()];
export const dittNavApiUrl = DITTNAV_API_URL[getEnvironment()];
export const navUrl = NAV_URL[getEnvironment()];
export const loginserviceUrl = LOGINSERVICE_URL[getEnvironment()];
export const tjenesterUrl = TJENESTER_URL[getEnvironment()];
export const personNavUrl = PERSON_NAV_URL[getEnvironment()];

export const meldekortinfoApiUrl = `${dittNavApiUrl}/meldekortinfo`;
export const meldekortUrl = `${navUrl}/meldekort`;
export const oppgaverApiUrl = `${dittNavApiUrl}/oppgaver`;
export const beskjederApiUrl = `${dittNavApiUrl}/beskjeder`;
export const innboksApiUrl = `${dittNavApiUrl}/innboks`;
export const inaktiveOppgaverApiUrl = `${dittNavApiUrl}/oppgaver/inaktiv`;
export const inaktiveBeskjederApiUrl = `${dittNavApiUrl}/beskjeder/inaktiv`;
export const inaktiveInnboksApiUrl = `${dittNavApiUrl}/innboks/inaktiv`;
export const brukernavnApiUrl = `${dittNavApiUrl}/navn`;
export const identApiUrl = `${dittNavApiUrl}/ident`;
export const paabegynteSoknaderApiUrl = `${dittNavApiUrl}/saker/paabegynte`;
export const ubehandledeMeldingerApiUrl = `${dittNavApiUrl}/meldinger/ubehandlede`;
export const sakerApiUrl = `${dittNavApiUrl}/saker`;
export const innloggingsstatusUrl = `${navUrl}/person/innloggingsstatus`;
export const loginserviceStepUpUrl = `${loginserviceUrl}/login?level=Level4&redirect=https://www.nav.no/person/dittnav`;
export const tilbakebetalingsUrl = `${navUrl}/dagpenger/forskudd/oversikt`;
export const koronaVeiviserUrl = `${navUrl}/person/koronaveiviser`;
export const utbetalingsoversiktUrl = `${tjenesterUrl}/utbetalingsoversikt`;
export const mineSakerUrl = `${personNavUrl}/mine-saker`;
export const oppfolgingUrl = `${dittNavApiUrl}/oppfolging`;
