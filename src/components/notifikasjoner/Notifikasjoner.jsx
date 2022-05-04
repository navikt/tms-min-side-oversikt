import React from "react";
import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import {
  oppgaverApiUrl,
  beskjederApiUrl,
  innboksApiUrl,
  innloggingsstatusUrl,
  meldekortinfoApiUrl,
} from "../../api/urls";
import Brukernotifikasjoner from "../viktigeMeldinger/brukernotifikasjoner/Brukernotifikasjoner";
import { selectAddBeskjederList, selectBeskjederList } from "../../store/selectors";
import useStore from "../../store/store";
import Meldekort from "../viktigeMeldinger/meldekort/Meldekort";

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

  return (
    <>
      <Meldekort meldekort={meldekort} />
      <Brukernotifikasjoner
        innloggingsstatus={innloggingsstatus?.authLevel}
        oppgaver={oppgaver}
        beskjeder={beskjeder}
        innboks={innboks}
      />
    </>
  );
};

export default Notifikasjoner;
