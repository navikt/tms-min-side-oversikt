import { Bandage, DirectionSign, Notes, Saving } from "@navikt/ds-icons";
import { arbeidUrl, dinPensjonUrl, soknadUrl, sykefravaerUrl } from "../../../api/urls";
import BlyantIkon from "../../../assets/BlyantIkon";
import PensjonIkon from "../../../assets/PensjonIkon";
import PlasterIkon from "../../../assets/PlasterIkon";
import VeiskiltIkon from "../../../assets/VeiskiltIkon";
import Flis from "./Flis";
import "./GenerelleFliser.css";

const GenerelleFliser = () => {
  return (
    <section className="generelle-fliser">
      <Flis
        tittel="generellefliser.sykefravaer-tittel"
        ingress="generellefliser.sykefravaer-ingress"
        ikon={<PlasterIkon />}
        href={sykefravaerUrl}
      />
      <Flis
        tittel="generellefliser.mistet.jobb-tittel"
        ingress="generellefliser.mistet-jobb-ingress"
        ikon={<VeiskiltIkon />}
        href={arbeidUrl}
      />
      <Flis
        tittel="generellefliser.skjemaer-tittel"
        ingress="generellefliser.skjemaer-ingress"
        ikon={<BlyantIkon />}
        href={soknadUrl}
      />
      <Flis
        tittel="generellefliser.pensjon-tittel"
        ingress="generellefliser.pensjon-ingress"
        ikon={<PensjonIkon />}
        href={dinPensjonUrl}
      />
    </section>
  );
};

export default GenerelleFliser;
