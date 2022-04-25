import React from "react";
import { useQuery } from "react-query";
import { useIntl } from "react-intl";
import { fetcher } from "../../../api/api";
import { ubehandledeMeldingerApiUrl } from "../../../api/urls";
import i18n from "../../../language/i18n";
import MeldingsBoks from "../meldingsBoks/MeldingsBoks";

const Innboks = () => {
  const { data: ubehandledeMeldinger } = useQuery(ubehandledeMeldingerApiUrl, fetcher);
  const translate = useIntl();
  const { numberToWord } = i18n[translate.locale];

  const flertallEllerEntall = (length, oppslagsString) => `${oppslagsString}${length === 1 ? "en" : "flere"}`;

  const overskrift = (m) =>
    translate.formatMessage(
      { id: flertallEllerEntall(m.antall, `mininnboks.${m.type.toLowerCase()}.meldinger.`) },
      { count: numberToWord(m.antall) }
    );

  return (
    <>
      {ubehandledeMeldinger?.map((m) => (
        <MeldingsBoks tekst={overskrift(m)} type="innboks" href={m.url} />
      ))}
    </>
  );
};

export default Innboks;
