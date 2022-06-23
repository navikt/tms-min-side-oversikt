import { useIntl } from "react-intl";
import { LinkPanel } from "@navikt/ds-react";
import "./Flis.css";

const Flis = ({ tittel, ikon, href }) => {
  const translate = useIntl();

  return (
    <>
      <LinkPanel className="flis-komponent" href={href} border={false}>
        <div
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gap: "var(--navds-spacing-8)",
            alignItems: "center",
          }}
        >
          <div className="flis-komponent-ikon">{ikon}</div>
          <div>
            <LinkPanel.Title className="flis-komponent-tittel">
              {translate.formatMessage({ id: tittel })}
            </LinkPanel.Title>
          </div>
        </div>
      </LinkPanel>
    </>
  );
};

export default Flis;
