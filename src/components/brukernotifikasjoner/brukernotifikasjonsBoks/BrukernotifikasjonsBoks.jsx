import React from "react";
import { LinkPanel } from "@navikt/ds-react";
import OppgaveIkon from "../../../assets/OppgaveIkon";
import BeskjedIkon from "../../../assets/BeskjedIkon";
import "./BrukernotifikasjonsBoks.css";

const BrukernotifikasjonsBoks = () => {
  const type = "oppgave";

  const isOppgave = type === "oppgave";

  return (
    <LinkPanel className="brukernotifikasjon-wrapper" href="#">
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
          <LinkPanel.Title className="brukernotifikasjon-tekst">
            Vi mangler vedlegg for å kunne behandle søknaden din om dagpenger
          </LinkPanel.Title>
          <LinkPanel.Description className="brukernotifikasjon-dato">24.02.2022 - 11:14</LinkPanel.Description>
        </div>
      </div>
    </LinkPanel>
  );
};

export default BrukernotifikasjonsBoks;
