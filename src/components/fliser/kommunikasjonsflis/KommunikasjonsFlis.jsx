import React from "react";
import { useIntl } from "react-intl";
import { LinkPanel, Panel, Heading } from "@navikt/ds-react";
import { dialogMedVeilederUrl, innboksUrl, mineSakerUrl } from "../../../api/urls";
import KommunikasjonsElement from "./KommunikasjonsElement";
import { DialogDots, Email } from "@navikt/ds-icons";
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
            ikon={<Email />}
          />
          <KommunikasjonsElement
            href={dialogMedVeilederUrl}
            tittel="lenkepanel.hoyre.lenketekst.dialog"
            ingress="lenkepanel.hoyre.ingress.dialog"
            ikon={<DialogDots />}
          />
        </Panel>
      ) : (
        <LinkPanel href={mineSakerUrl} border={false} className="kommunikasjonsflis-liten">
          <div className="content-wrapper">
            <div className="kommunikasjons-ikon-wrapper">
              <Email />
            </div>
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
