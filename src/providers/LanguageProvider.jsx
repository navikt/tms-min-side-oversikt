import React from "react";
import { IntlProvider } from "react-intl";
import nbMessages from "../language/nb.json";
import enMessages from "../language/en.json";

const loadMessages = (sprak) =>
  ({
    nb: nbMessages,
    en: enMessages,
  }[sprak]);

const LanguageProvider = ({ defaultSprak, children }) => (
  <IntlProvider locale={defaultSprak} messages={loadMessages(defaultSprak)}>
    {children}
  </IntlProvider>
);

export default LanguageProvider;
