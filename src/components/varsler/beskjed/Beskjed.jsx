import { useIntl } from "react-intl";
import { logAmplitudeEvent } from "../../../utils/amplitude";
import { LinkPanel } from "@navikt/ds-react";
import { loginserviceStepUpUrl } from "../../../api/urls";
import { SpeechBubble } from "@navikt/ds-icons";
import BeskjedCSS from "./Beskjed.module.css";
import { postDigisosDone, postDone } from "../../../api/api";
import useStore from "../../../store/store";
import { selectRemoveBeskjed } from "../../../store/selectors";

const Beskjed = ({ tekst, dato, href, isMasked, beskjed }) => {
  const translate = useIntl();

  const printTekst = isMasked ? translate.formatMessage({ id: "beskjed.maskert.tekst" }) : tekst;

  const lenke = isMasked ? loginserviceStepUpUrl : href;

  const requestDone = (beskjed) => {
    if (beskjed.produsent === "digiSos") {
      postDigisosDone({
        eventId: beskjed.eventId,
        grupperingsId: beskjed.grupperingsId,
      });
    } else {
      postDone({
        eventId: beskjed.eventId,
      });
    }
  };

  const handleOnClick = () => {
    requestDone(beskjed);
    logAmplitudeEvent("Beskjed");
  };

  return (
    <LinkPanel className={BeskjedCSS.wrapper} href={lenke} border={false} onClick={() => handleOnClick()}>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-6)",
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

export default Beskjed;
