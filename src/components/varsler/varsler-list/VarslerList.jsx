import { useQuery } from "react-query";
import { fetcher } from "../../../api/api";
import { oppgaverApiUrl, beskjederApiUrl, innboksApiUrl } from "../../../api/urls";
import { selectAddBeskjederList, selectBeskjederList } from "../../../store/selectors";
import { sortByEventTidspunkt } from "../../../utils/sorter";
import isMasked from "../../../utils/isMasked";
import useStore from "../../../store/store";
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

  const hasNoHref = (href) => href === undefined || href === null || href === "";
  setLocaleDate();

  return (
    <>
      {oppgaver &&
        oppgaver?.sort(sortByEventTidspunkt).map((o) => (
          <li key={o.eventId}>
            <Oppgave
              id={o.eventId}
              tekst={o.tekst}
              dato={formatToReadableDate(o.forstBehandlet)}
              href={o.link}
              isMasked={isMasked(o?.tekst)}
            />
          </li>
        ))}
      {beskjeder &&
        beskjeder.sort(sortByEventTidspunkt).map((b) =>
          hasNoHref(b.link) ? (
            <li key={b.eventId}>
              <ArkiverbarBeskjed
                tekst={b.tekst}
                dato={formatToReadableDate(b.forstBehandlet)}
                href={b.link}
                isMasked={isMasked(b?.tekst)}
                beskjed={b}
              />
            </li>
          ) : (
            <li key={b.eventId}>
              <Beskjed
                tekst={b.tekst}
                dato={formatToReadableDate(b.forstBehandlet)}
                href={b.link}
                isMasked={isMasked(b?.tekst)}
                beskjed={b}
              />
            </li>
          )
        )}
      {innboks && innboks?.length > 0 ? (
        <li key={"innboks-varsel"}>
          <InnboksBeskjed innboksBeskjeder={innboks} />
        </li>
      ) : null}
    </>
  );
};

export default VarslerList;
