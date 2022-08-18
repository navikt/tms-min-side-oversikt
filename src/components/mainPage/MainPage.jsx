import React from "react";
import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import { oppfolgingUrl } from "../../api/urls";
import Notifikasjoner from "../notifikasjoner/Notifikasjoner";
import InngangVarslinger from "../inngangVarslinger/InngangVarslinger";
import Sidetittel from "../sidetittel/Sidetittel";
import "./MainPage.css";

const MainPage = () => {
  const { data: oppfolging } = useQuery(oppfolgingUrl, fetcher);
  const brukerUnderOppfolging = oppfolging?.erBrukerUnderOppfolging;

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
