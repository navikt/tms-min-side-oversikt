import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import LanguageProvider from "./providers/LanguageProvider";
import App from "./App";
import "./App.css";

const Mikrofrontend = () => {
  return (
    <LanguageProvider defaultSprak="nb">
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    </LanguageProvider>
  );
};

export default Mikrofrontend;
