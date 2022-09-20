import { useIntl } from "react-intl";
import { logAmplitudeEvent } from "../../../utils/amplitude";
import { LinkPanel } from "@navikt/ds-react";
import { innboksUrl, loginserviceStepUpUrl } from "../../../api/urls";
import { SpeechBubble } from "@navikt/ds-icons";
import BeskjedCSS from "../beskjed/Beskjed.module.css";
import isMasked from "../../../utils/isMasked";
import { formatToReadableDate } from "../../../language/i18n";

const InnboksBeskjed = ({ innboksBeskjeder }) => {
  const translate = useIntl();

  const needStepup = isMasked(innboksBeskjeder[0]?.tekst);

  const gruppert = innboksBeskjeder?.length > 1;
  const tempTekst = gruppert
    ? translate.formatMessage({ id: "innboks.flere.meldinger" }, { count: innboksBeskjeder?.length })
    : innboksBeskjeder[0]?.tekst;

  const printTekst = needStepup ? translate.formatMessage({ id: "beskjed.maskert.tekst" }) : tempTekst;

  const lenke = needStepup ? loginserviceStepUpUrl : gruppert ? innboksUrl : innboksBeskjeder[0]?.link;

  const skalViseDato = !needStepup && !gruppert;
  const dato = skalViseDato ? formatToReadableDate(innboksBeskjeder[0]?.forstBehandlet) : null;

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
          <SpeechBubble fontSize="1.375rem" />
        </div>
        <div className={BeskjedCSS.tekst_wrapper}>
          <LinkPanel.Title className={BeskjedCSS.tekst}>{printTekst}</LinkPanel.Title>
          <LinkPanel.Description className={BeskjedCSS.dato}>{dato}</LinkPanel.Description>
        </div>
      </div>
    </LinkPanel>
  );
};

export default InnboksBeskjed;
