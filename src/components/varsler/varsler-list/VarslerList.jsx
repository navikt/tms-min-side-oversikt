import { useQuery } from "react-query";
import { fetcher } from "../../../api/api";
import { oppgaverApiUrl, beskjederApiUrl, innboksApiUrl } from "../../../api/urls";
import { selectAddBeskjederList, selectBeskjederList } from "../../../store/selectors";
import { sortByEventTidspunkt } from "../../../utils/sorter";
import isMasked from "../../../utils/isMasked";
import useStore from "../../../store/store";
import { selectRemoveBeskjed } from "../../../store/selectors";
import { postDigisosDone, postDone } from "../../../api/api";
import { formatToReadableDate, setLocaleDate } from "../../../language/i18n";
import Oppgave from "../../varsler/oppgave/Oppgave";
import Beskjed from "../../varsler/beskjed/Beskjed";
import ArkiverbarBeskjed from "../../varsler/arkiverbar-beskjed/ArkiverbarBeskjed";
import InnboksBeskjed from "../innboks-beskjed/InnboksBeskjed";

const VarslerList = () => {
  const { data: oppgaver } = useQuery(oppgaverApiUrl, fetcher);
  const { data: innboks } = useQuery(innboksApiUrl, fetcher);

  const addBeskjederList = useStore(selectAddBeskjederList);
  const beskjeder = useStore(selectBeskjederList);
  useQuery(beskjederApiUrl, fetcher, {
    onSuccess: addBeskjederList,
  });

  const removeBeskjed = useStore(selectRemoveBeskjed);
  const hasNoHref = (href) => href === undefined || href === null || href === "";

  const remove = (beskjed) => {
    if (beskjed.produsent === "digiSos") {
      postDigisosDone({
        eventId: beskjed.eventId,
        grupperingsId: beskjed.grupperingsId,
      });
    } else {
      postDone({
        eventId: beskjed.eventId,
      });
    }
    removeBeskjed(beskjed);
  };

  setLocaleDate();

  return (
    <>
      {oppgaver &&
        oppgaver
          ?.sort(sortByEventTidspunkt)
          .map((o) => (
            <Oppgave
              id={o.eventId}
              tekst={o.tekst}
              dato={formatToReadableDate(o.forstBehandlet)}
              href={o.link}
              type="oppgave"
              isMasked={isMasked(o?.tekst)}
            />
          ))}
      {beskjeder &&
        beskjeder
          .sort(sortByEventTidspunkt)
          .map((b) =>
            hasNoHref(b.link) ? (
              <ArkiverbarBeskjed
                tekst={b.tekst}
                dato={formatToReadableDate(b.forstBehandlet)}
                href={b.link}
                isMasked={isMasked(b?.tekst)}
                remove={remove}
                beskjed={b}
              />
            ) : (
              <Beskjed
                tekst={b.tekst}
                dato={formatToReadableDate(b.forstBehandlet)}
                href={b.link}
                isMasked={isMasked(b?.tekst)}
                remove={remove}
                beskjed={b}
              />
            )
          )}
      {innboks &&
        innboks.map((i) => (
          <InnboksBeskjed
            tekst={i.tekst}
            dato={formatToReadableDate(i.forstBehandlet)}
            href={i.link}
            isMasked={isMasked(i?.tekst)}
          />
        ))}
    </>
  );
};

export default VarslerList;
