import React from "react";
import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import { oppfolgingUrl } from "../../api/urls";
import Notifikasjoner from "../notifikasjoner/Notifikasjoner";
import InngangVarslinger from "../inngangVarslinger/InngangVarslinger";
import Utbetaling from "../fliser/utbetaling/Utbetaling";
import Sidetittel from "../sidetittel/Sidetittel";
import SisteSakerPanel from "../fliser/siste-saker-panel/SisteSakerPanel";
import GenerelleFliser from "../fliser/generelleFliser/GenerelleFliser";
import KommunikasjonsFlis from "../fliser/kommunikasjonsflis/KommunikasjonsFlis";
import "./MainPage.css";
const MainPage = () => {
  const { data: oppfolging } = useQuery(oppfolgingUrl, fetcher);
  const brukerUnderOppfolging = oppfolging?.erBrukerUnderOppfolging;

  return (
    <section className="page-wrapper">
      <Sidetittel />
      <section className="brukernotifikasjons-liste">
        <Notifikasjoner />
      </section>
      <InngangVarslinger />
      <section className="min-side-lenkepanel">
        <section className={brukerUnderOppfolging ? "lenkepanel-stor-wrapper" : "lenkepanel-liten-wrapper"}>
          <Utbetaling />
          <KommunikasjonsFlis size={brukerUnderOppfolging ? "large" : "small"} />
        </section>
        <SisteSakerPanel />
      </section>
      {brukerUnderOppfolging ? null : <GenerelleFliser />}
    </section>
  );
};

export default MainPage;
