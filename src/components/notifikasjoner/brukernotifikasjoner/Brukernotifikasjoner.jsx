import React from "react";
import { useIntl } from "react-intl";
import { sortByEventTidspunkt } from "../../../utils/sorter";
import isMasked from "../../../utils/isMasked";
import useStore from "../../../store/store";
import { selectRemoveBeskjed } from "../../../store/selectors";
import { postDigisosDone, postDone } from "../../../api/api";
import NotifikasjonsBoks from "../notifikasjonsBoks/NotifikasjonsBoks";
import { formatToReadableDate, setLocaleDate } from "../../../language/i18n";

const Brukernotifikasjoner = ({ oppgaver, beskjeder, innboks }) => {
  const removeBeskjed = useStore(selectRemoveBeskjed);

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
            <NotifikasjonsBoks
              id={o.eventId}
              tekst={o.tekst}
              dato={formatToReadableDate(o.eventTidspunkt)}
              href={o.link}
              type="oppgave"
              isMasked={isMasked(o?.tekst)}
            />
          ))}
      {beskjeder &&
        beskjeder
          .sort(sortByEventTidspunkt)
          .map((b) => (
            <NotifikasjonsBoks
              id={b.eventId}
              tekst={b.tekst}
              dato={formatToReadableDate(b.eventTidspunkt)}
              href={b.link}
              type="beskjed"
              isMasked={isMasked(b?.tekst)}
              remove={remove}
              beskjed={b}
            />
          ))}
      {innboks &&
        innboks.map((i) => (
          <NotifikasjonsBoks
            id={i.eventId}
            tekst={i.tekst}
            dato={formatToReadableDate(i.eventTidspunkt)}
            href={i.link}
            type="beskjed"
            isMasked={isMasked(i?.tekst)}
          />
        ))}
    </>
  );
};

export default Brukernotifikasjoner;
