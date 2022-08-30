export default [
  {
    url: "/api/endpoint",
    method: "get",
    response: () => {
      return {
        tekst: "Dette kommer til å bli en awesome mikrofrontend! 😊 🎉",
      };
    },
  },
  {
    url: "/dittnav-api/oppgave",
    method: "get",
    response: () => {
      return [
        {
          forstBehandlet: "2020-03-13T08:53:24.636Z",
          eventId: "1584093204636",
          tekst: "Du har en sykemelding som må godkjennes",
          link: "https://enNyLenke",
          sistOppdatert: "2020-03-13T08:53:25.002983Z",
          sikkerhetsnivaa: 3,
        },
        {
          forstBehandlet: "2020-03-13T09:03:05.733Z",
          eventId: "1584093785733",
          tekst: "Oppgave: Mangelende dokumentasjon til søknad",
          link: "https://enNyLenke",
          sistOppdatert: "2020-03-13T09:03:05.934825Z",
          sikkerhetsnivaa: 4,
        },
      ];
    },
  },
  {
    url: "/dittnav-api/innboks",
    method: "get",
    response: () => {
      return [
        {
          forstBehandlet: "2020-03-13T08:53:31.607Z",
          eventId: "1584093211607",
          tekst: "Svar fra veilederen din i innboksen: Hei, nå har jeg sjekket om...",
          link: "https://enNyLenke",
          sistOppdatert: "2020-03-13T08:53:31.969676Z",
          sikkerhetsnivaa: 3,
        },
        {
          forstBehandlet: "2020-03-13T09:03:09.348Z",
          eventId: "1584093789348",
          tekst: "Samtalereferat fra telefonsamtale 08.12.2019 kl. 11:44",
          link: "https://enNyLenke",
          sistOppdatert: "2020-03-13T09:03:09.555557Z",
          sikkerhetsnivaa: 4,
        },
      ];
    },
  },
  {
    url: "/dittnav-api/beskjed",
    method: "get",
    response: () => {
      return [
        {
          uid: "2313ef1a-a69a-45d9-a3ff-38e4522710e0",
          forstBehandlet: "2020-03-13T08:53:17.47Z",
          eventId: "1584093197470",
          tekst:
            "Vi mottok søknaden din 18. september 2019. Du kan følge med på statusen i Dine foreldrepenger. Her kan du også ettersende vedlegg til sønakden hvis det er noe du ønsker å gjøre.",
          link: "https://enNyLenke",
          sistOppdatert: "2020-03-13T08:53:17.773555Z",
          sikkerhetsnivaa: 3,
        },
        {
          forstBehandlet: "2019-11-27T12:24:34.671Z",
          eventId: "1174857474672",
          uid: "934de6ce-f94f-47de-84d2-639ac2674627",
          tekst:
            "Søknad om forskudd på dagpenger er mottatt. Hvis du trenger forskudd på dagpenger eller ettersende vedlegg til sønakden din kan du trykke deg inn i den nye forskuddskøsningen ved å gå til denne siden.",
          link: null,
          sistOppdatert: "2019-11-27T12:24:35.014517Z",
          sikkerhetsnivaa: 3,
        },
        {
          uid: "b922506b-7789-4416-beab-409a7681f53e",
          forstBehandlet: "2020-03-13T09:03:01.449Z",
          eventId: "1584093781449",
          tekst: "Vi mottok søknaden din 18. september 2019. Du kan følge med på statusen i Dine foreldrepenger.",
          link: "",
          sistOppdatert: "2020-03-13T09:03:01.663016Z",
          sikkerhetsnivaa: 3,
        },
      ];
    },
  },
  {
    url: "/dittnav-api/meldekortinfo",
    method: "get",
    response: () => {
      return {
        etterregistrerteMeldekort: 1,
        meldekortbruker: true,
        nyeMeldekort: {
          antallNyeMeldekort: 1,
          nesteInnsendingAvMeldekort: null,
          nesteMeldekort: {
            fra: "2019-09-09",
            kanSendesFra: "2019-09-21",
            risikererTrekk: true,
            sisteDatoForTrekk: "2019-09-30",
            til: "2019-09-22",
            uke: "37-38",
          },
        },
        resterendeFeriedager: 2,
      };
    },
  },
  {
    url: "/dittnav-api/navn",
    method: "get",
    response: () => {
      return {
        navn: "VINAYAGUM-MASK AMIZIC",
      };
    },
  },
  {
    url: "/dittnav-api/ident",
    method: "get",
    response: () => {
      return {
        ident: "12345678912",
      };
    },
  },
  {
    url: "/dittnav-api/saker/paabegynte",
    method: "get",
    response: () => {
      return {
        url: "https://tjenester-t6.nav.no/",
        antallPaabegynte: 2,
        feilendeBaksystem: [],
      };
    },
  },
  {
    url: "/dittnav-api/beskjeder/inaktiv",
    method: "get",
    response: () => {
      return [
        {
          uid: "2413ef1a-a69a-45d9-a3ff-38e4522710e0",
          eventTidspunkt: "2020-03-13T08:53:17.47Z",
          eventId: "1584093197470",
          tekst: "Vi mottok søknaden din 18. september 2019. Du kan følge med på statusen i Dine foreldrepenger.",
          link: "https://enNyLenke",
          sistOppdatert: "2020-03-13T08:53:17.773555Z",
          sikkerhetsnivaa: 4,
        },
        {
          uid: "2813ef1a-a69a-45d9-a3ff-38e4522710e0",
          eventTidspunkt: "2020-03-13T08:53:17.47Z",
          eventId: "1584493197470",
          tekst: "Vi mottok søknaden om pleiepenger.",
          link: "https://enNyLenke",
          sistOppdatert: "2020-03-13T08:53:17.773555Z",
          sikkerhetsnivaa: 3,
        },
      ];
    },
  },
  {
    url: "/dittnav-api/oppgave/inaktiv",
    method: "get",
    response: () => {
      return [
        {
          eventTidspunkt: "2020-03-13T08:53:24.636Z",
          eventId: "1584093204636",
          tekst: "Du har en sykemelding som må godkjennes",
          link: "https://enNyLenke",
          sistOppdatert: "2020-03-13T08:53:25.002983Z",
          sikkerhetsnivaa: 4,
        },
      ];
    },
  },
  {
    url: "/dittnav-api/innboks/inaktiv",
    method: "get",
    response: () => {
      return [
        {
          eventTidspunkt: "2020-03-13T08:53:31.607Z",
          eventId: "1584093211607",
          tekst: "Svar fra veilederen din i innboksen: Hei, nå har jeg sjekket om...",
          link: "https://enNyLenke",
          sistOppdatert: "2020-03-13T08:53:31.969676Z",
          sikkerhetsnivaa: 4,
        },
      ];
    },
  },
  {
    url: "/dittnav-api/saker",
    method: "get",
    response: () => {
      return {
        dagpengerSistEndret: "2021-02-01T13:42:52.690696+02:00",
        sakerURL: "https//person.nav.no/mine-saker",
        sakstemaer: [
          {
            navn: "Dagpenger og oppfølging",
            kode: "DAG",
            sistEndret: "2020-03-12T12:00:00+01:00",
            detaljvisningUrl: "http://localhost:1234/arbeid/dagpenger/mine-dagpenger",
          },
          {
            navn: "Arbeidsavklaringspenger og oppfølging",
            kode: "AAP",
            sistEndret: "2020-03-17T12:00:00+01:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/AAP",
          },
          {
            navn: "Bil",
            kode: "BIL",
            sistEndret: "2020-03-10T12:00:00+01:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/BIL",
          },
          {
            navn: "Uføretrygd og oppfølging",
            kode: "UFO",
            sistEndret: "2020-03-10T12:00:00+01:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/UFO",
          },
          {
            navn: "Ajourhold - Grunnopplysninger",
            kode: "AGR",
            sistEndret: "2020-03-07T12:00:00+01:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/AGR",
          },
          {
            navn: "Sykmelding, sykepenger og oppfølging",
            kode: "SYK_SYM",
            sistEndret: "2020-03-03T12:00:00+01:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/SYK_SYM",
          },
          {
            navn: "Barnetrygd",
            kode: "BAR",
            sistEndret: "2020-02-14T12:00:00+01:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/BAR",
          },
          {
            navn: "Generell",
            kode: "GEN",
            sistEndret: "2020-01-09T12:00:00+01:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/GEN",
          },
          {
            navn: "Foreldre- og svangerskapspenger",
            kode: "FOR",
            sistEndret: "2019-11-29T12:00:00+01:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/FOR",
          },
          {
            navn: "Pensjon",
            kode: "PEN",
            sistEndret: "2019-11-19T12:00:00+01:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/PEN",
          },
          {
            navn: "Hjelpemidler",
            kode: "HJE",
            sistEndret: "2019-11-01T12:00:00+01:00",
            detaljvisningUrl: "http://localhost:1234/hjelpemidler/dinehjelpemidler",
          },
          {
            navn: "Unntak fra medlemskap",
            kode: "UFM",
            sistEndret: "2019-11-01T12:00:00+01:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/UFM",
          },
          {
            navn: "Yrkesskade / Menerstatning",
            kode: "YRK",
            sistEndret: "2019-10-07T12:00:00+02:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/YRK",
          },
          {
            navn: "Medlemskap",
            kode: "MED",
            sistEndret: "2019-10-07T12:00:00+02:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/MED",
          },
          {
            navn: "Fullmakt",
            kode: "FUL",
            sistEndret: "2019-06-06T12:00:00+02:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/FUL",
          },
          {
            navn: "Serviceklager",
            kode: "SER",
            sistEndret: "2019-05-28T12:00:00+02:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/SER",
          },
          {
            navn: "Enslig forsørger",
            kode: "ENF",
            sistEndret: "2019-05-21T12:00:00+02:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/ENF",
          },
          {
            navn: "Sosialhjelp",
            kode: "KOM",
            sistEndret: "2019-05-15T12:00:00+02:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/KOM",
          },
          {
            navn: "Erstatning",
            kode: "ERS",
            sistEndret: "2017-04-23T12:00:00+02:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/ERS",
          },
          {
            navn: "Trekkhåndtering",
            kode: "TRK",
            sistEndret: "2016-09-08T12:00:00+02:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/TRK",
          },
          {
            navn: "Gravferdsstønad",
            kode: "GRA",
            sistEndret: "2016-08-18T12:00:00+02:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/GRA",
          },
          {
            navn: "Saksomkostninger",
            kode: "SAK",
            sistEndret: "2014-03-13T12:00:00+01:00",
            detaljvisningUrl: "http://localhost:9002/mine-saker/tema/SAK",
          },
        ],
      };
    },
  },
  {
    url: "/person/innloggingsstatus",
    method: "get",
    response: () => {
      return {
        authLevel: 3,
        authenticated: true,
        oidc: {
          authLevel: 3,
          issueTime: "2020-01-01T10:00:00",
          expiryTime: "2020-01-01T11:00:00",
        },
        openAM: {
          authLevel: 4,
        },
      };
    },
  },
  {
    url: "/login/status",
    method: "get",
    response: () => {
      return {
        authenticated: true,
        level: "Level3",
      };
    },
  },
];
