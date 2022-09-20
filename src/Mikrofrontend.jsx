import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { initializeAmplitude } from "./utils/amplitude";
import LanguageProvider from "./providers/LanguageProvider";
import queryClient from "./utils/query";
import App from "./App";

const Mikrofrontend = () => {
  initializeAmplitude();

  return (
    <LanguageProvider defaultSprak="nb">
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </LanguageProvider>
  );
};

export default Mikrofrontend;
