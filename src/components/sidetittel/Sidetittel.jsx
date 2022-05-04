import React from "react";
import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import { brukernavnApiUrl, identApiUrl } from "../../api/urls";
import { People } from "@navikt/ds-icons";
import { Heading } from "@navikt/ds-react";
import "./Sidetittel.css";

const Sidetittel = () => {
  const { data: navn, isError: navnFailed } = useQuery(brukernavnApiUrl, fetcher);
  const { data: ident, isError: identFailed } = useQuery(identApiUrl, fetcher);

  if ((!navn && !ident) || identFailed) {
    return null;
  }

  const navnOrIdent = navnFailed ? ident?.ident : navn?.navn.toLowerCase();

  return (
    <section className="heading-wrapper">
      <People className="person-logo" />
      <Heading spacing size="xlarge" level="2" className="person-tekst">
        {navnOrIdent}
      </Heading>
    </section>
  );
};

export default Sidetittel;
