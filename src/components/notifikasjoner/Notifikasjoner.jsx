import React from "react";
import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import { oppgaverApiUrl, beskjederApiUrl, innboksApiUrl, meldekortinfoApiUrl } from "../../api/urls";
import { selectAddBeskjederList, selectBeskjederList } from "../../store/selectors";
import useStore from "../../store/store";
import Meldekort from "../meldekort/Meldekort";
import Brukernotifikasjoner from "./brukernotifikasjoner/Brukernotifikasjoner";

const Notifikasjoner = () => {
  const { data: oppgaver } = useQuery(oppgaverApiUrl, fetcher);
  const { data: innboks } = useQuery(innboksApiUrl, fetcher);
  const { data: meldekort } = useQuery(meldekortinfoApiUrl, fetcher);

  const addBeskjederList = useStore(selectAddBeskjederList);
  const beskjeder = useStore(selectBeskjederList);
  useQuery(beskjederApiUrl, fetcher, {
    onSuccess: addBeskjederList,
  });

  return (
    <>
      <Meldekort meldekort={meldekort} />
      <Brukernotifikasjoner oppgaver={oppgaver} beskjeder={beskjeder} innboks={innboks} />
    </>
  );
};

export default Notifikasjoner;
