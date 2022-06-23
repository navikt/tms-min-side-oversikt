import React from "react";
import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import { useIntl } from "react-intl";
import { inaktiveOppgaverApiUrl, inaktiveBeskjederApiUrl, inaktiveInnboksApiUrl } from "../../api/urls";
import "./InngangVarslinger.css";

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
        <a className="inngang-varslinger">
          {translate.formatMessage({ id: "dittnav.infomeldinger.inngang.varslinger" })}
        </a>
      )}
    </>
  );
};

export default InngangVarslinger;
