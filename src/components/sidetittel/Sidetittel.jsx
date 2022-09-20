import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import { useIntl } from "react-intl";
import { brukernavnApiUrl, identApiUrl } from "../../api/urls";
import { Heading } from "@navikt/ds-react";
import { getVelkomsthilsen } from "./velkomsthilsen";
import SidetittelCSS from "./Sidetittel.module.css";

const Sidetittel = () => {
  const { data: navn, isError: navnFailed } = useQuery(brukernavnApiUrl, fetcher);
  const { data: ident, isError: identFailed } = useQuery(identApiUrl, fetcher);
  const translate = useIntl();

  if ((!navn && !ident) || identFailed) {
    return null;
  }

  const navnOrIdent = navnFailed ? ident?.ident : navn?.navn.toLowerCase();
  const velkomsthilsen = getVelkomsthilsen();

  return (
    <section className={SidetittelCSS.wrapper}>
      <Heading size={"large"} className={SidetittelCSS.hilsning}>
        {translate.formatMessage({ id: velkomsthilsen })}
      </Heading>
      <Heading spacing size="large" level="2" className={SidetittelCSS.tekst}>
        {navnOrIdent}
      </Heading>
    </section>
  );
};

export default Sidetittel;
