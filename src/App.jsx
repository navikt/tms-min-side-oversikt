import { useQuery } from "react-query";
import { apiUrl } from "./api/urls";
import { fetcher } from "./api/api";
import MainComponent from "./components/MainComponent/MainComponent";
import "@navikt/ds-css";
import "./App.css";

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
