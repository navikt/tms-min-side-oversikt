import React from "react";
import Notifikasjoner from "../notifikasjoner/Notifikasjoner";
import "./MainPage.css";
import InngangVarslinger from "../inngangVarslinger/InngangVarslinger";
import Tilbakebetaling from "../fliser/coronaVarsel/tilbakebetaling/Tilbakebetaling";
import KoronaVarsel from "../fliser/coronaVarsel/tilbakebetaling/varsel/KoronaVarsel";
import Utbetaling from "../fliser/utbetaling/Utbetaling";
import Sidetittel from "../sidetittel/Sidetittel";
import LenkePanelVenstre from "../fliser/lenkepanelVenstre/LenkePanelVenstre";
import GenerelleFliser from "../fliser/generelleFliser/GenerelleFliser";
import LenkePanelHoyre from "../fliser/lenkepanelHoyre/LenkePanelHoyre";

const MainPage = () => {
  return (
    <section className="page-wrapper">
      <Sidetittel />
      <section className="brukernotifikasjons-liste">
        <Notifikasjoner />
      </section>
      <InngangVarslinger />
      <section className="covid-container">
        <Tilbakebetaling />
        <KoronaVarsel />
      </section>
      <section className="min-side-lenkepanel">
        <section className="lenkepanel-venstre">
          <Utbetaling />
          <LenkePanelVenstre />
        </section>
        <section className="lenkepanel-hoyre">
          <LenkePanelHoyre />
        </section>
      </section>
      <GenerelleFliser />
    </section>
  );
};

export default MainPage;
