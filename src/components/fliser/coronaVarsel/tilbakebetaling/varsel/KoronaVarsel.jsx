import React from "react";
import { useIntl } from "react-intl";
import { LinkPanel } from "@navikt/ds-react";
import { koronaVeiviserUrl } from "../../../../../api/urls";
const KoronaVarsel = () => {
  const translate = useIntl();

  return (
    <>
      <LinkPanel href={koronaVeiviserUrl} border={false}>
        <LinkPanel.Title>{translate.formatMessage({ id: "korona.varsel.lenketekst" })}</LinkPanel.Title>
        <LinkPanel.Description>{translate.formatMessage({ id: "korona.varsel.ingress" })}</LinkPanel.Description>
      </LinkPanel>
    </>
  );
};

export default KoronaVarsel;
