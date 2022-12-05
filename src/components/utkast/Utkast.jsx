import style from "./Utkast.module.css";
import { LinkPanel } from "@navikt/ds-react";
import { Edit } from "@navikt/ds-icons";
import { useQuery } from "react-query";
import { antallUtkastUrl, minSideUtkastUrl } from "../../api/urls";
import { fetcher } from "../../api/api";
import { useIntl } from "react-intl";

const Utkast = () => {
  const { data: data } = useQuery(antallUtkastUrl, fetcher);
  const translate = useIntl();

  const showUtkast = data?.antall > 0;

  return (
    <>
      {showUtkast ? (
        <LinkPanel className={style.wrapper} href={minSideUtkastUrl} border={false}>
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
                {translate.formatMessage({ id: "utkast.tekst" }, { antall: data?.antall })}
              </LinkPanel.Title>
            </div>
          </div>
        </LinkPanel>
      ) : null}
    </>
  );
};

export default Utkast;
