import React, { useState } from "react";
import { useIntl } from "react-intl";
import { BodyShort, Heading, LinkPanel, Panel } from "@navikt/ds-react";
import ArkiverKnapp from "../../arkiverknapp/ArkiverKnapp";
import { loginserviceStepUpUrl } from "../../../api/urls";
import "./NotifikasjonsBoks.css";
import { FileFolder, SpeechBubble, Task } from "@navikt/ds-icons";

const NotifikasjonsBoks = ({ id, tekst, dato, href, type, isMasked, remove, beskjed }) => {
  const [isSelected, setIsSelected] = useState(false);
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
    setIsSelected(true);
  };

  const handleNotifikasjonMouseLeave = () => {
    setIsSelected(false);
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
          className={
            isSelected
              ? isOppgave
                ? "oppgave-wrapper-selected"
                : "beskjed-wrapper-selected"
              : isOppgave
              ? "oppgave-wrapper"
              : "beskjed-wrapper"
          }
          href={lenke}
          border={false}
          key={id}
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
            <div
              className={
                isSelected
                  ? isOppgave
                    ? "oppgave-ikon-wrapper-inverted"
                    : "beskjed-ikon-wrapper-inverted"
                  : isOppgave
                  ? "oppgave-ikon-wrapper"
                  : "beskjed-ikon-wrapper"
              }
            >
              {isOppgave ? <Task /> : <SpeechBubble />}
            </div>
            <div className="brukernotifikasjon-tekst-wrapper">
              <LinkPanel.Title className="brukernotifikasjon-tekst">{printTekst}</LinkPanel.Title>
              <LinkPanel.Description className="brukernotifikasjon-dato">
                {isMasked ? null : dato}
              </LinkPanel.Description>
            </div>
          </div>
        </LinkPanel>
      ) : (
        <Panel className="beskjed-arkiver" onClick={() => remove(beskjed)} key={id}>
          <div className="beskjed-arkiver-content">
            <div className={showArkiverIkon ? "beskjed-arkiver-ikon-inverted" : "beskjed-arkiver-ikon"}>
              {showArkiverIkon ? <FileFolder /> : <SpeechBubble />}
            </div>
            <div className="beskjed-arkiver-tekst-wrapper">
              <Heading spacing level="2" size="medium" className="brukernotifikasjon-tekst">
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
