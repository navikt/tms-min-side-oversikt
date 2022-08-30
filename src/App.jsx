import Sidetittel from "./components/sidetittel/Sidetittel";
import VarslerList from "./components/varsler/varsler-list/VarslerList";
import InngangVarslinger from "./components/inngang-varslinger/InngangVarslinger";
import "@navikt/ds-css";
import "./App.css";
import Meldekort from "./components/meldekort/Meldekort";
import EtterregistreringMeldekort from "./components/meldekort/etterregistrering/EtterregistreringMeldekort";

function App() {
  return (
    <main className="main">
      <div className="app">
        <section className="page-wrapper-microfrontend">
          <Sidetittel />
          <section className="varsler">
            <Meldekort />
            <VarslerList />
            <EtterregistreringMeldekort />
          </section>
          <InngangVarslinger />
        </section>
      </div>
    </main>
  );
}

export default App;
