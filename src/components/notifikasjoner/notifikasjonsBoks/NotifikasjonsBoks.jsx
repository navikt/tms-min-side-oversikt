import React, { useState } from "react";
import { useIntl } from "react-intl";
import { BodyShort, Heading, LinkPanel, Panel } from "@navikt/ds-react";
import OppgaveIkon from "../../../assets/OppgaveIkon";
import OppgaveIkonInverted from "../../../assets/OppgaveIkonInverted";
import BeskjedIkon from "../../../assets/BeskjedIkon";
import BeskjedIkonInverted from "../../../assets/BeskjedIkonInverted";
import ArkiverIkon from "../../../assets/ArkiverIkon";
import ArkiverKnapp from "../../arkiverknapp/ArkiverKnapp";
import { loginserviceStepUpUrl } from "../../../api/urls";
import "./NotifikasjonsBoks.css";

const NotifikasjonsBoks = ({ key, tekst, dato, href, type, isMasked, remove, beskjed }) => {
  const [isInverted, setIsInverted] = useState(false);
  const [showArkiverIkon, setShowArkiverIkon] = useState(false);
  const translate = useIntl();
  const isOppgave = type === "oppgave";
  const isInnboks = type === "innboks";
  const hasNoHref = href === undefined || href === null || href === "";

  const isArkiverbarBeskjed = hasNoHref && !isOppgave && !isInnboks;
  const printTekst = isMasked
    ? translate.formatMessage({ id: isOppgave ? "oppgave.maskert.tekst" : "beskjed.maskert.tekst" })
    : tekst;

  const lenke = isMasked ? loginserviceStepUpUrl : href;

  const handleNotifikasjonMouseEnter = () => {
    setIsInverted(true);
  };

  const handleNotifikasjonMouseLeave = () => {
    setIsInverted(false);
  };

  const handleArkiverknappMouseEnter = () => {
    setShowArkiverIkon(true);
  };

  const handleArkiverknappMouseLeave = () => {
    setShowArkiverIkon(false);
  };

  return (
    <>
      {!isArkiverbarBeskjed ? (
        <LinkPanel
          className="brukernotifikasjon-wrapper"
          href={lenke}
          border={false}
          key={key}
          onMouseEnter={handleNotifikasjonMouseEnter}
          onMouseLeave={handleNotifikasjonMouseLeave}
        >
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gap: "var(--navds-spacing-8)",
              alignItems: "center",
            }}
          >
            {isInverted ? (
              isOppgave ? (
                <OppgaveIkonInverted />
              ) : (
                <BeskjedIkonInverted />
              )
            ) : isOppgave ? (
              <OppgaveIkon />
            ) : (
              <BeskjedIkon />
            )}
            <div className="brukernotifikasjon-tekst-wrapper">
              <LinkPanel.Title className="brukernotifikasjon-tekst">{printTekst}</LinkPanel.Title>
              <LinkPanel.Description className="brukernotifikasjon-dato">
                {isMasked ? null : dato}
              </LinkPanel.Description>
            </div>
          </div>
        </LinkPanel>
      ) : (
        <Panel className="beskjed-arkiver" onClick={() => remove(beskjed)} key={key}>
          <div className="beskjed-arkiver-content">
            {showArkiverIkon ? <ArkiverIkon /> : <BeskjedIkon />}
            <div className="beskjed-arkiver-tekst-wrapper">
              <Heading spacing level="2" size="medium">
                {printTekst}
              </Heading>
              <BodyShort>{dato}</BodyShort>
            </div>
          </div>
          <ArkiverKnapp
            className="beskjed-arkiver-knapp"
            mouseEnter={handleArkiverknappMouseEnter}
            mouseLeave={handleArkiverknappMouseLeave}
          />
        </Panel>
      )}
    </>
  );
};

export default NotifikasjonsBoks;
