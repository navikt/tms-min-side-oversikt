import { useIntl } from "react-intl";
import { Link, Detail } from "@navikt/ds-react";
import { Next } from "@navikt/ds-icons";
import "./KommunikasjonsElement.css";

const KommunikasjonsElement = ({ href, tittel, ingress, ikon }) => {
  const translate = useIntl();

  return (
    <div className="kommunikasjons-element">
      <div className="content-wrapper">
        <div className="kommunikasjons-ikon-wrapper">{ikon}</div>
        <div>
          <Link href={href} className="kommunikasjons-lenke">
            {translate.formatMessage({ id: tittel })}
          </Link>
          <Detail spacing className="dato-label">
            {translate.formatMessage({ id: ingress })}
          </Detail>
        </div>
      </div>
      <Next className="chevron" />
    </div>
  );
};

export default KommunikasjonsElement;
