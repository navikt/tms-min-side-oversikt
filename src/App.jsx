import { useQuery } from "react-query";
import { apiUrl } from "./api/urls";
import { fetcher } from "./api/api";
import Komponent from "./components/Komponent";
import "@navikt/ds-css";
import "./App.css";
import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const { data } = useQuery(apiUrl, fetcher);

  return (
    <main className="main">
      <div className="app">
        <MainComponent />
      </div>
    </main>
  );
}

export default App;
