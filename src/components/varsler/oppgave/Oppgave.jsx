import { useIntl } from "react-intl";
import { logAmplitudeEvent } from "../../../utils/amplitude";
import { LinkPanel } from "@navikt/ds-react";
import { loginserviceStepUpUrl } from "../../../api/urls";
import { Task } from "@navikt/ds-icons";
import OppgaveCSS from "./Oppgave.module.css";

const Oppgave = ({ tekst, dato, href, isMasked }) => {
  const translate = useIntl();

  const printTekst = isMasked ? translate.formatMessage({ id: "oppgave.maskert.tekst" }) : tekst;

  const lenke = isMasked ? loginserviceStepUpUrl : href;

  return (
    <LinkPanel className={OppgaveCSS.wrapper} href={lenke} border={false} onClick={() => logAmplitudeEvent("Oppgave")}>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-6)",
          alignItems: "center",
        }}
      >
        <div className={OppgaveCSS.ikon_wrapper}>
          <Task fontSize="1.375rem" />
        </div>
        <div className={OppgaveCSS.tekst_wrapper}>
          <LinkPanel.Title className={OppgaveCSS.tekst}>{printTekst}</LinkPanel.Title>
          <LinkPanel.Description className={OppgaveCSS.dato}>{isMasked ? null : dato}</LinkPanel.Description>
        </div>
      </div>
    </LinkPanel>
  );
};

export default Oppgave;
