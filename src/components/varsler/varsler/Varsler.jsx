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
import { Heading } from "@navikt/ds-react";
import React from "react";
import { useIntl } from "react-intl";
import CSS from "../../../App.module.css";

const Varsler = () => {
  const { data: oppgaver, isLoading: isLoadingOppgaver } = useQuery(oppgaverApiUrl, fetcher);
  const { data: innboks, isLoading: isLoadingInnboks } = useQuery(innboksApiUrl, fetcher);

  const beskjeder = useStore(selectBeskjederList);
  const addBeskjederList = useStore(selectAddBeskjederList);
  const { isLoading: isLoadingBeskjeder } = useQuery(beskjederApiUrl, fetcher, {
    onSuccess: addBeskjederList,
  });

  const { formatMessage } = useIntl();
  const isLoadingVarsler = isLoadingBeskjeder || isLoadingOppgaver || isLoadingInnboks;
  const hasNoHref = (href) => href === undefined || href === null || href === "";
  setLocaleDate();

  if (isLoadingVarsler) {
    return null;
  }

  return (
    <section>
      <ul className={CSS.varsler}>
        <Heading size="medium" level="2" spacing>
          {formatMessage({ id: "varsler.tittel" })}
        </Heading>
        {oppgaver.sort(sortByEventTidspunkt).map((o) => (
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
      </ul>
    </section>
  );
};

export default Varsler;
