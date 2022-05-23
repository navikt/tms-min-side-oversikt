import React from "react";
import { useIntl } from "react-intl";
import { LinkPanel } from "@navikt/ds-react";
import { utbetalingsoversiktUrl } from "../../../api/urls";

const Utbetaling = () => {
  const translate = useIntl();

  return (
    <>
      <LinkPanel href={utbetalingsoversiktUrl} border={false}>
        <LinkPanel.Title>{translate.formatMessage({ id: "utbetalinger.lenketekst" })}</LinkPanel.Title>
      </LinkPanel>
    </>
  );
};

export default Utbetaling;
