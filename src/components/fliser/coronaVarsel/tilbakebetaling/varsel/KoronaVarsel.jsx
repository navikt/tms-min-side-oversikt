import React from "react";
import { useIntl } from "react-intl";
import { LinkPanel } from "@navikt/ds-react";
import { koronaVeiviserUrl } from "../../../../../api/urls";
import "./KoronaVarsel.css";
const KoronaVarsel = () => {
  const translate = useIntl();

  return (
    <>
      <LinkPanel className="korona-varsel" href={koronaVeiviserUrl} border={true}>
        <LinkPanel.Title>{translate.formatMessage({ id: "korona.varsel.lenketekst" })}</LinkPanel.Title>
        <LinkPanel.Description>{translate.formatMessage({ id: "korona.varsel.ingress" })}</LinkPanel.Description>
      </LinkPanel>
    </>
  );
};

export default KoronaVarsel;
