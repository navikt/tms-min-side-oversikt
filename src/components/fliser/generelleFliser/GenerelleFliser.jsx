import { Bandage, DirectionSign, Notes, Saving } from "@navikt/ds-icons";
import { arbeidUrl, dinPensjonUrl, soknadUrl, sykefravaerUrl } from "../../../api/urls";
import Flis from "./Flis";
import "./GenerelleFliser.css";

const GenerelleFliser = () => {
  return (
    <section className="generelle-fliser">
      <Flis
        tittel="generellefliser.sykefravaer-tittel"
        ingress="generellefliser.sykefravaer-ingress"
        ikon={<Bandage className="generelle-fliser-ikon" />}
        href={sykefravaerUrl}
      />
      <Flis
        tittel="generellefliser.mistet.jobb-tittel"
        ingress="generellefliser.mistet-jobb-ingress"
        ikon={<DirectionSign className="generelle-fliser-ikon" />}
        href={arbeidUrl}
      />
      <Flis
        tittel="generellefliser.skjemaer-tittel"
        ingress="generellefliser.skjemaer-ingress"
        ikon={<Notes className="generelle-fliser-ikon" />}
        href={soknadUrl}
      />
      <Flis
        tittel="generellefliser.pensjon-tittel"
        ingress="generellefliser.pensjon-ingress"
        ikon={<Saving className="generelle-fliser-ikon" />}
        href={dinPensjonUrl}
      />
    </section>
  );
};

export default GenerelleFliser;
