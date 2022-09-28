import React from "react";
import Sidetittel from "./components/sidetittel/Sidetittel";
import VarslerList from "./components/varsler/varsler-list/VarslerList";
import InngangVarslinger from "./components/inngang-varslinger/InngangVarslinger";
import Meldekort from "./components/meldekort/Meldekort";
import EtterregistreringMeldekort from "./components/meldekort/etterregistrering/EtterregistreringMeldekort";
import { meldekortMikrofrontendUrl } from "./api/urls";
import "@navikt/ds-css";
import CSS from "./App.module.css";

const MeldekortMikrofrontend = React.lazy(() => import(meldekortMikrofrontendUrl));

function App() {
  return (
    <main className={CSS.main}>
      <div className={CSS.app}>
        <section className="page-wrapper-microfrontend">
          <Sidetittel />
          <ul className={CSS.varsler}>
            <MeldekortMikrofrontend />
            <Meldekort />
            <EtterregistreringMeldekort />
            <VarslerList />
          </ul>
          <InngangVarslinger />
        </section>
      </div>
    </main>
  );
}

export default App;
