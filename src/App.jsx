import React from "react";
import Sidetittel from "./components/sidetittel/Sidetittel";
import VarslerList from "./components/varsler/varsler-list/VarslerList";
import InngangVarslinger from "./components/inngang-varslinger/InngangVarslinger";
import { meldekortMikrofrontendUrl } from "./api/urls";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import Utkast from "./components/utkast/Utkast";
import { Heading } from "@navikt/ds-react";
import { useIntl } from "react-intl";
import "@navikt/ds-css";
import CSS from "./App.module.css";

const MeldekortMikrofrontend = React.lazy(() => import(meldekortMikrofrontendUrl));

function App() {
  const { formatMessage } = useIntl();

  return (
    <main className={CSS.main}>
      <div className={CSS.app}>
        <section className="page-wrapper-microfrontend">
          <Sidetittel />
          <Heading size="medium" level="2" spacing>
            {formatMessage({ id: "varsler.tittel" })}
          </Heading>
          <ul className={CSS.varsler}>
            <React.Suspense fallback={null}>
              <ErrorBoundary>
                <MeldekortMikrofrontend />
              </ErrorBoundary>
            </React.Suspense>
            <VarslerList />
          </ul>
          <InngangVarslinger />
          <Utkast />
        </section>
      </div>
    </main>
  );
}

export default App;
