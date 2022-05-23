import React from "react";
import { useIntl } from "react-intl";
import { LinkPanel } from "@navikt/ds-react";
import "./Tilbakebetaling.css";
import { tilbakebetalingsUrl } from "../../../../api/urls";

const Tilbakebetaling = () => {
  const translate = useIntl();

  return (
    <>
      <LinkPanel href={tilbakebetalingsUrl} className="tilbakebetaling" border={false}>
        <LinkPanel.Title>{translate.formatMessage({ id: "korona.tilbakebetaling.lenketekst" })}</LinkPanel.Title>
        <LinkPanel.Description>
          {translate.formatMessage({ id: "korona.tilbakebetaling.ingress" })}
        </LinkPanel.Description>
      </LinkPanel>
    </>
  );
};

export default Tilbakebetaling;
