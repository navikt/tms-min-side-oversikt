import React from "react";
import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import {
  oppgaverApiUrl,
  beskjederApiUrl,
  innboksApiUrl,
  ubehandledeMeldingerApiUrl,
  paabegynteSoknaderApiUrl,
  innloggingsstatusUrl,
  meldekortinfoApiUrl,
} from "../../api/urls";
import Brukernotifikasjoner from "../viktigeMeldinger/brukernotifikasjoner/Brukernotifikasjoner";
import { selectAddBeskjederList, selectBeskjederList } from "../../store/selectors";
import useStore from "../../store/store";
import Meldekort from "../viktigeMeldinger/meldekort/Meldekort";
import Innboks from "../viktigeMeldinger/innboks/Innboks";

const Notifikasjoner = () => {
  const { data: innloggingsstatus } = useQuery(innloggingsstatusUrl, fetcher);

  const addBeskjederList = useStore(selectAddBeskjederList);
  const beskjeder = useStore(selectBeskjederList);
  useQuery(beskjederApiUrl, fetcher, {
    onSuccess: addBeskjederList,
  });
  const { data: oppgaver } = useQuery(oppgaverApiUrl, fetcher);
  const { data: innboks } = useQuery(innboksApiUrl, fetcher);

  const { data: meldekort } = useQuery(meldekortinfoApiUrl, fetcher);

  //innboks
  const { data: ubehandledeMeldinger } = useQuery(ubehandledeMeldingerApiUrl, fetcher);

  return (
    <>
      <Meldekort meldekort={meldekort} />
      <Brukernotifikasjoner
        innloggingsstatus={innloggingsstatus?.authLevel}
        oppgaver={oppgaver}
        beskjeder={beskjeder}
        innboks={innboks}
      />
      <Innboks meldinger={ubehandledeMeldinger} />
    </>
  );
};

export default Notifikasjoner;
