import { QueryClientProvider } from "react-query";
import { initializeAmplitude } from "./utils/amplitude";
import LanguageProvider from "./providers/LanguageProvider";
import queryClient from "./utils/query";
import App from "./App";

const Mikrofrontend = () => {
  initializeAmplitude();

  return (
    <LanguageProvider defaultSprak="nb">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </LanguageProvider>
  );
};

export default Mikrofrontend;
