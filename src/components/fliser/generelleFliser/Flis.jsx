import { useIntl } from "react-intl";
import { LinkPanel } from "@navikt/ds-react";
import "./Flis.css";

const Flis = ({ tittel, ingress, ikon, href }) => {
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
          {ikon}
          <div>
            <LinkPanel.Title>{translate.formatMessage({ id: tittel })}</LinkPanel.Title>
            <LinkPanel.Description>{translate.formatMessage({ id: ingress })}</LinkPanel.Description>
          </div>
        </div>
      </LinkPanel>
    </>
  );
};

export default Flis;
