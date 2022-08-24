import { useIntl } from "react-intl";
import { logAmplitudeEvent } from "../../../utils/amplitude";
import { LinkPanel } from "@navikt/ds-react";
import { loginserviceStepUpUrl } from "../../../api/urls";
import { SpeechBubble } from "@navikt/ds-icons";
import BeskjedCSS from "../beskjed/Beskjed.module.css";

const InnboksBeskjed = ({ tekst, dato, href, isMasked }) => {
  const translate = useIntl();

  const printTekst = isMasked ? translate.formatMessage({ id: "beskjed.maskert.tekst" }) : tekst;

  const lenke = isMasked ? loginserviceStepUpUrl : href;

  return (
    <LinkPanel
      className={BeskjedCSS.wrapper}
      href={lenke}
      border={false}
      onClick={() => logAmplitudeEvent("Innboks Beskjed")}
    >
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-8)",
          alignItems: "center",
        }}
      >
        <div className={BeskjedCSS.ikon_wrapper}>
          <SpeechBubble />
        </div>
        <div className={BeskjedCSS.tekst_wrapper}>
          <LinkPanel.Title className={BeskjedCSS.tekst}>{printTekst}</LinkPanel.Title>
          <LinkPanel.Description className={BeskjedCSS.dato}>{isMasked ? null : dato}</LinkPanel.Description>
        </div>
      </div>
    </LinkPanel>
  );
};

export default InnboksBeskjed;
