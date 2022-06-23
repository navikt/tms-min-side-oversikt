import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import i18n from "../../../language/i18n";
import { sortByEventTidspunkt } from "../../../utils/sorter";
import isMasked from "../../../utils/isMasked";
import useStore from "../../../store/store";
import { selectRemoveBeskjed } from "../../../store/selectors";
import { postDone, postDigisosDone } from "../../../api/api";
import NotifikasjonsBoks from "../notifikasjonsBoks/NotifikasjonsBoks";

const Brukernotifikasjoner = ({ innloggingsstatus, oppgaver, beskjeder, innboks }) => {
  const translate = useIntl();
  const { formatDateAndTime } = i18n[translate.locale];

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

  return (
    <>
      {oppgaver &&
        oppgaver
          ?.sort(sortByEventTidspunkt)
          .map((o) => (
            <NotifikasjonsBoks
              id={o.eventId}
              tekst={o.tekst}
              dato={formatDateAndTime(o.eventTidspunkt)}
              href={o.link}
              type="oppgave"
              isMasked={isMasked(innloggingsstatus, o?.sikkerhetsnivaa)}
            />
          ))}
      {beskjeder &&
        beskjeder
          .sort(sortByEventTidspunkt)
          .map((b) => (
            <NotifikasjonsBoks
              id={b.eventId}
              tekst={b.tekst}
              dato={formatDateAndTime(b.eventTidspunkt)}
              href={b.link}
              type="beskjed"
              isMasked={isMasked(innloggingsstatus, b.sikkerhetsnivaa)}
              remove={remove}
              beskjed={b}
            />
          ))}
      {innboks &&
        innboks.map((i) => (
          <NotifikasjonsBoks
            id={i.eventId}
            tekst={i.tekst}
            dato={formatDateAndTime(i.eventTidspunkt)}
            href={i.link}
            type="beskjed"
            isMasked={isMasked(innloggingsstatus, i.sikkerhetsnivaa)}
          />
        ))}
    </>
  );
};

export default Brukernotifikasjoner;
