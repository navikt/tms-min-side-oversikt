import { useIntl } from "react-intl";
import { Link, Detail } from "@navikt/ds-react";
import { Next, FileContent } from "@navikt/ds-icons";
import i18n from "../../../language/i18n";
import "./SakstemaElement.css";

const SakstemaElement = ({ href, sakstema, sistEndret }) => {
  const translate = useIntl();
  const { formatDateAndTime } = i18n[translate.locale];

  return (
    <div className="sakstema-element">
      <div className="content-wrapper">
        <div className="sakstema-ikon">
          <FileContent />
        </div>
        <div>
          <Link href={href} className="sakstema-lenke">
            {sakstema}
          </Link>
          <Detail spacing className="dato-label">
            {translate.formatMessage({ id: "lenkepanel.venstre.lenkedetail" }) + formatDateAndTime(sistEndret)}
          </Detail>
        </div>
      </div>
      <Next className="chevron" />
    </div>
  );
};

export default SakstemaElement;
