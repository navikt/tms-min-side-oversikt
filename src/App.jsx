import React from "react";
import Sidetittel from "./components/sidetittel/Sidetittel";
import Varsler from "./components/varsler/varsler/Varsler.jsx";
import InngangVarslinger from "./components/inngang-varslinger/InngangVarslinger";
import { meldekortMikrofrontendUrl } from "./api/urls";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import Utkast from "./components/utkast/Utkast";
import CSS from "./App.module.css";
import "@navikt/ds-css";

const MeldekortMikrofrontend = React.lazy(() => import(meldekortMikrofrontendUrl));

function App() {
  return (
    <main className={CSS.main}>
      <div className={CSS.app}>
        <div className="page-wrapper-microfrontend">
          <Sidetittel />
          <React.Suspense fallback={null}>
            <ErrorBoundary>
              <MeldekortMikrofrontend />
            </ErrorBoundary>
          </React.Suspense>
          <Varsler />
          <InngangVarslinger />
          <Utkast />
        </div>
      </div>
    </main>
  );
}

export default App;
