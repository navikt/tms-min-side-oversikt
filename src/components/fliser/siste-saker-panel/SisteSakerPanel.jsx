import React from "react";
import { useQuery } from "react-query";
import { useIntl } from "react-intl";
import { fetcher } from "../../../api/api";
import { LinkPanel, Panel, Heading } from "@navikt/ds-react";
import { mineSakerUrl, sakerApiUrl } from "../../../api/urls";
import SakstemaElement from "./SakstemaElement";
import "./SisteSakerPanel.css";

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
        <LinkPanel href={mineSakerUrl} border={false} className="lenkepanel-venstre-liten">
          <LinkPanel.Title>{translate.formatMessage({ id: "dine.siste.saker" })}</LinkPanel.Title>
        </LinkPanel>
      )}
    </>
  );
};

export default SisteSakerPanel;
