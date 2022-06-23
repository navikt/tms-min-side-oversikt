import React from "react";
import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import { useIntl } from "react-intl";
import { brukernavnApiUrl, identApiUrl } from "../../api/urls";
import { Heading } from "@navikt/ds-react";
import "./Sidetittel.css";

const Sidetittel = () => {
  const { data: navn, isError: navnFailed } = useQuery(brukernavnApiUrl, fetcher);
  const { data: ident, isError: identFailed } = useQuery(identApiUrl, fetcher);
  const translate = useIntl();

  if ((!navn && !ident) || identFailed) {
    return null;
  }

  const navnOrIdent = navnFailed ? ident?.ident : navn?.navn.toLowerCase();

  return (
    <section className="heading-wrapper">
      <Heading spacing size="xlarge" level="2" className="person-tekst">
        {translate.formatMessage({ id: "sidetittel.hilsning" })}
        {navnOrIdent}
      </Heading>
    </section>
  );
};

export default Sidetittel;
