import React from "react";
import { useIntl } from "react-intl";
import { LinkPanel, Panel, Heading } from "@navikt/ds-react";
import { dialogMedVeilederUrl, innboksUrl, mineSakerUrl } from "../../../api/urls";
import KommunikasjonsElement from "./KommunikasjonsElement";
import BrevIkon from "../../../assets/BrevIkon";
import DialogIkon from "../../../assets/DialogIkon";
import "./KommunikasjonsFlis.css";

const KommunikasjonsFlis = ({ size }) => {
  const translate = useIntl();
  return (
    <>
      {size === "large" ? (
        <Panel className="kommunikasjonsflis-stor">
          <Heading spacing level="2" size="small">
            {translate.formatMessage({ id: "lenkepanel.hoyre.tittel" })}
          </Heading>
          <KommunikasjonsElement
            href={innboksUrl}
            tittel="lenkepanel.hoyre.lenketekst.innboks"
            ingress="lenkepanel.hoyre.ingress.innboks"
            ikon={<BrevIkon />}
          />
          <KommunikasjonsElement
            href={dialogMedVeilederUrl}
            tittel="lenkepanel.hoyre.lenketekst.dialog"
            ingress="lenkepanel.hoyre.ingress.dialog"
            ikon={<DialogIkon />}
          />
        </Panel>
      ) : (
        <LinkPanel href={mineSakerUrl} border={false} className="kommunikasjonsflis-liten">
          <div className="content-wrapper">
            <BrevIkon />
            <LinkPanel.Title className="kommunikasjonsflis-liten-tittel">
              {translate.formatMessage({ id: "lenkepanel.hoyre.lenketekst.innboks" })}
            </LinkPanel.Title>
          </div>
        </LinkPanel>
      )}
    </>
  );
};

export default KommunikasjonsFlis;
