import React from "react";
import { useQuery } from "react-query";
import { useIntl } from "react-intl";
import { fetcher } from "../../../api/api";
import { LinkPanel, Panel, Heading } from "@navikt/ds-react";
import { mineSakerUrl, sakerApiUrl } from "../../../api/urls";
import SakstemaElement from "./SakstemaElement";
import "./SisteSakerPanel.css";
import { FileContent } from "@navikt/ds-icons";

const SisteSakerPanel = () => {
  const { data: saker } = useQuery(sakerApiUrl, fetcher);

  const translate = useIntl();

  const visStortSakspanel = saker?.sakstemaer?.length > 0;

  return (
    <>
      {visStortSakspanel ? (
        <Panel className="siste-saker-panel">
          <Heading spacing level="2" size="small">
            {translate.formatMessage({ id: "lenkepanel.venstre.tittel" })}
          </Heading>
          {saker?.sakstemaer.slice(0, 2).map((sak) => (
            <SakstemaElement href={sak.detaljvisningUrl} sakstema={sak.navn} sistEndret={sak.sistEndret} />
          ))}
        </Panel>
      ) : (
        <LinkPanel href={mineSakerUrl} border={false} className="siste-saker-panel-liten">
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gap: "var(--navds-spacing-8)",
              alignItems: "center",
            }}
          >
            <div className="siste-saker-panel-ikon">
              <FileContent />
            </div>
            <LinkPanel.Title className="siste-saker-panel-liten-tittel">
              {translate.formatMessage({ id: "dine.siste.saker" })}
            </LinkPanel.Title>
          </div>
        </LinkPanel>
      )}
    </>
  );
};

export default SisteSakerPanel;
