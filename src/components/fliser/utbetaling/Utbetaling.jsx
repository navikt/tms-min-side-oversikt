import React from "react";
import { useIntl } from "react-intl";
import { LinkPanel } from "@navikt/ds-react";
import { utbetalingsoversiktUrl } from "../../../api/urls";
import "./Utbetaling.css";
import LommebokIkon from "../../../assets/LommebokIkon";

const Utbetaling = () => {
  const translate = useIntl();

  return (
    <>
      <LinkPanel className="utbetalings-flis" href={utbetalingsoversiktUrl} border={false}>
        <div className="content-wrapper">
          <LommebokIkon />
          <LinkPanel.Title className="utbetalings-tekst">
            {translate.formatMessage({ id: "utbetalinger.lenketekst" })}
          </LinkPanel.Title>
        </div>
      </LinkPanel>
    </>
  );
};

export default Utbetaling;
