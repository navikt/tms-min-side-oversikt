import style from "./Utkast.module.css";
import { LinkPanel } from "@navikt/ds-react";
import { Edit } from "@navikt/ds-icons";
import { useQuery } from "react-query";
import { antallUtkastUrl, minSideUtkastUrl } from "../../api/urls";
import { fetcher } from "../../api/api";
import { useIntl } from "react-intl";
import { logAmplitudeEvent } from "../../utils/amplitude";

const Utkast = () => {
  const { data: data } = useQuery(antallUtkastUrl, fetcher);
  const translate = useIntl();

  const antallUtkast = data?.antall;
  const showUtkast = antallUtkast > 0;
  const isEntall = antallUtkast === 1;

  return (
    <>
      {showUtkast ? (
        <LinkPanel
          className={style.wrapper}
          href={minSideUtkastUrl}
          border={false}
          onClick={() => logAmplitudeEvent("Utkast knapp")}
        >
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gap: "var(--navds-spacing-6)",
              alignItems: "center",
            }}
          >
            <div className={style.ikon_wrapper}>
              <Edit fontSize="1.375rem" />
            </div>
            <div className={style.tekst_wrapper}>
              <LinkPanel.Title className={style.tekst}>
                {translate.formatMessage({ id: "utkast.tittel" })}
              </LinkPanel.Title>
              <LinkPanel.Description className={style.ingress}>
                {isEntall
                  ? translate.formatMessage({ id: "utkast.ingress.entall" })
                  : translate.formatMessage({ id: "utkast.ingress.flertall" }, { antall: data?.antall })}
              </LinkPanel.Description>
            </div>
          </div>
        </LinkPanel>
      ) : null}
    </>
  );
};

export default Utkast;
