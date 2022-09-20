import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import { useIntl } from "react-intl";
import {
  inaktiveOppgaverApiUrl,
  inaktiveBeskjederApiUrl,
  inaktiveInnboksApiUrl,
  minSideVarslingerUrl,
} from "../../api/urls";
import { komponent, logAmplitudeEvent } from "../../utils/amplitude";
import InngangVarslingerCSS from "./InngangVarslinger.module.css";
import { Link } from "react-router-dom";

const InngangVarslinger = () => {
  const { data: inaktiveOppgaver } = useQuery(inaktiveOppgaverApiUrl, fetcher);
  const { data: inaktiveBeskjeder } = useQuery(inaktiveBeskjederApiUrl, fetcher);
  const { data: inaktiveInnboks } = useQuery(inaktiveInnboksApiUrl, fetcher);

  const translate = useIntl();

  const skjulInngang =
    inaktiveOppgaver?.length === 0 && inaktiveBeskjeder?.length === 0 && inaktiveInnboks?.length === 0;

  return (
    <>
      {skjulInngang ? null : (
        <a
          className={InngangVarslingerCSS.inngang}
          href={minSideVarslingerUrl}
          onClick={() => logAmplitudeEvent(komponent.inngangVarslinger)}
        >
          {translate.formatMessage({ id: "inngang.varslinger" })}
        </a>
      )}
      <Link to="/varslinger">Test link</Link>
      <Link to="/minside/varslinger">Test link</Link>
    </>
  );
};

export default InngangVarslinger;
