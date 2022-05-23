import React from "react";
import { useQuery } from "react-query";
import { useIntl } from "react-intl";
import { fetcher } from "../../../api/api";
import { LinkPanel, Link, Panel, Heading, Detail } from "@navikt/ds-react";
import { mineSakerUrl, sakerApiUrl } from "../../../api/urls";
import i18n from "../../../language/i18n";
import { Next } from "@navikt/ds-icons";
import "./LenkePanelVenstre.css";

const LenkePanelVenstre = () => {
  const { data: saker } = useQuery(sakerApiUrl, fetcher);

  const translate = useIntl();
  const { formatDateAndTime } = i18n[translate.locale];

  const visStortSakspanel = saker?.sakstemaer?.length > 0;

  return (
    <>
      {visStortSakspanel ? (
        <Panel className="lenkepanel-venstre-content">
          <Heading spacing level="2" size="small">
            {translate.formatMessage({ id: "lenkepanel.venstre.tittel" })}
          </Heading>
          <Link href={saker?.sakstemaer[0].detaljvisningUrl}>{saker?.sakstemaer[0].navn}</Link>
          <Detail spacing className="dato-label">
            {translate.formatMessage({ id: "lenkepanel.venstre.lenkedetail" }) +
              formatDateAndTime(saker?.sakstemaer[0].sistEndret)}
          </Detail>
          <Link href={saker?.sakstemaer[1].detaljvisningUrl}>{saker?.sakstemaer[1].navn}</Link>
          <Detail spacing className="dato-label">
            {translate.formatMessage({ id: "lenkepanel.venstre.lenkedetail" }) +
              formatDateAndTime(saker?.sakstemaer[1].sistEndret)}
          </Detail>
          <Link className="alle-saker-inngang" href={mineSakerUrl}>
            {translate.formatMessage({ id: "lenkepanel.venstre.lenketekst.se.saker" })}
            <Next className="chevron" />
          </Link>
        </Panel>
      ) : (
        <LinkPanel href={mineSakerUrl} border={false} className="lenkepanel-venstre-liten">
          <LinkPanel.Title>{translate.formatMessage({ id: "dine.siste.saker" })}</LinkPanel.Title>
        </LinkPanel>
      )}
    </>
  );
};

export default LenkePanelVenstre;
