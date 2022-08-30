import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import { useIntl } from "react-intl";
import { brukernavnApiUrl, identApiUrl } from "../../api/urls";
import { Heading } from "@navikt/ds-react";
import { getHilsningByHour } from "./hilsning";
import SidetittelCSS from "./Sidetittel.module.css";

const Sidetittel = () => {
  const { data: navn, isError: navnFailed } = useQuery(brukernavnApiUrl, fetcher);
  const { data: ident, isError: identFailed } = useQuery(identApiUrl, fetcher);
  const translate = useIntl();

  if ((!navn && !ident) || identFailed) {
    return null;
  }

  const navnOrIdent = navnFailed ? ident?.ident : navn?.navn.toLowerCase();
  const hilsning = getHilsningByHour();

  return (
    <section className={SidetittelCSS.wrapper}>
      <Heading size={"medium"} className={SidetittelCSS.hilsning}>
        {translate.formatMessage({ id: hilsning })}
      </Heading>
      <Heading spacing size="xlarge" level="2" className={SidetittelCSS.tekst}>
        {navnOrIdent}
      </Heading>
    </section>
  );
};

export default Sidetittel;
