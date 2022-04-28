import React from "react";
import { QueryClientProvider } from "react-query";
import LanguageProvider from "./providers/LanguageProvider";
import queryClient from "./utils/query";
import App from "./App";
import "./App.css";

const Mikrofrontend = () => {
  return (
    <LanguageProvider defaultSprak="nb">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </LanguageProvider>
  );
};

export default Mikrofrontend;
