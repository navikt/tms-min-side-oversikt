import Sidetittel from "./components/sidetittel/Sidetittel";
import VarslerList from "./components/varsler/varsler-list/VarslerList";
import InngangVarslinger from "./components/inngang-varslinger/InngangVarslinger";
import "@navikt/ds-css";
import Meldekort from "./components/meldekort/Meldekort";
import EtterregistreringMeldekort from "./components/meldekort/etterregistrering/EtterregistreringMeldekort";
import CSS from "./App.module.css";

function App() {
  return (
    <main className={CSS.main}>
      <div className={CSS.app}>
        <section className="page-wrapper-microfrontend">
          <Sidetittel />
          <section className={CSS.varsler}>
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
