import React from "react";
import Sidetittel from "../sidetittel/Sidetittel";
import InngangVarslinger from "../viktigeMeldinger/inngangVarslinger/InngangVarslinger";
import Tilbakebetaling from "../coronaVarsel/tilbakebetaling/Tilbakebetaling";
import KoronaVarsel from "../coronaVarsel/tilbakebetaling/varsel/KoronaVarsel";
import Utbetaling from "../utbetaling/Utbetaling";
import LenkePanelVenstre from "../lenkepanelVenstre/LenkePanelVenstre";
import LenkePanelHoyre from "../lenkepanelHoyre/LenkePanelHoyre";
import Notifikasjoner from "../notifikasjoner/Notifikasjoner";
import "./MainComponent.css";
import GenerelleFliser from "../generelleFliser/GenerelleFliser";

const MainComponent = () => {
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

export default MainComponent;
