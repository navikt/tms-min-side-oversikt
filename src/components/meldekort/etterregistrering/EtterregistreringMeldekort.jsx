import { useQuery } from "react-query";
import { fetcher } from "../../../api/api";
import { useIntl } from "react-intl";
import Oppgave from "../../varsler/oppgave/Oppgave";
import i18n from "../../../language/i18n";
import { etterregistreringMeldekortUrl, meldekortinfoApiUrl } from "../../../api/urls";

const EtterregistreringMeldekort = () => {
  const { data: meldekort, isSuccess } = useQuery(meldekortinfoApiUrl, fetcher);
  const translate = useIntl();
  const { numberToWord } = i18n[translate.locale];

  const tekst = translate.formatMessage(
    { id: "meldekort.etterregistreringer" },
    { etterregistreringer: numberToWord(meldekort?.etterregistrerteMeldekort) }
  );

  if (!isSuccess) {
    return null;
  }

  if (meldekort.etterregistrerteMeldekort && meldekort.etterregistrerteMeldekort > 0) {
    return (
      <li key={"meldekort-etterregistrering-varsel"}>
        <Oppgave tekst={tekst} href={etterregistreringMeldekortUrl} />
      </li>
    );
  }
  return null;
};

export default EtterregistreringMeldekort;
