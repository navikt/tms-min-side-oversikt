import React from "react";
import Notifikasjoner from "../notifikasjoner/Notifikasjoner";
import InngangVarslinger from "../inngangVarslinger/InngangVarslinger";
import Sidetittel from "../sidetittel/Sidetittel";
import "./MainPage.css";

const MainPage = () => {
  return (
    <section className="page-wrapper-microfrontend">
      <Sidetittel />
      <section className="brukernotifikasjons-liste">
        <Notifikasjoner />
      </section>
      <InngangVarslinger />
    </section>
  );
};

export default MainPage;
