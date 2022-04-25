import React from "react";
import { useIntl } from "react-intl";
import { BodyShort, Heading, LinkPanel, Panel } from "@navikt/ds-react";
import { MinusCircle } from "@navikt/ds-icons";
import OppgaveIkon from "../../../assets/OppgaveIkon";
import BeskjedIkon from "../../../assets/BeskjedIkon";
import { loginserviceStepUpUrl } from "../../../api/urls";
import "./MeldingsBoks.css";

const MeldingsBoks = ({ tekst, dato, href, type, isMasked, remove, beskjed }) => {
  const translate = useIntl();
  const isOppgave = type === "oppgave";
  const isInnboks = type === "innboks";
  const hasNoHref = href === undefined || href === null || href === "";

  const isArkiverbarBeskjed = hasNoHref && !isOppgave && !isInnboks;
  const printTekst = isMasked
    ? translate.formatMessage({ id: isOppgave ? "oppgave.maskert.tekst" : "beskjed.maskert.tekst" })
    : tekst;

  const lenke = isMasked ? loginserviceStepUpUrl : href;

  return (
    <>
      {!isArkiverbarBeskjed ? (
        <LinkPanel className="brukernotifikasjon-wrapper" href={lenke} border={false}>
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gap: "var(--navds-spacing-8)",
              alignItems: "center",
            }}
          >
            {isOppgave ? <OppgaveIkon /> : <BeskjedIkon />}
            <div className="brukernotifikasjon-tekst-wrapper">
              <LinkPanel.Title className="brukernotifikasjon-tekst">{printTekst}</LinkPanel.Title>
              <LinkPanel.Description className="brukernotifikasjon-dato">
                {isMasked ? null : dato}
              </LinkPanel.Description>
            </div>
          </div>
        </LinkPanel>
      ) : (
        <Panel className="beskjed-arkiver" onClick={() => remove(beskjed)}>
          <div className="beskjed-arkiver-content">
            <BeskjedIkon className="beskjed-arkiver-ikon" />
            <div className="beskjed-arkiver-tekst-wrapper">
              <Heading spacing level="2" size="medium">
                {printTekst}
              </Heading>
              <BodyShort>{dato}</BodyShort>
            </div>
          </div>
          <MinusCircle className="beskjed-arkiver-knapp-ikon" />
        </Panel>
      )}
    </>
  );
};

export default MeldingsBoks;
