import { Button } from "@navikt/ds-react";

const ArkiverKnapp = ({ remove, beskjed }) => {
  return (
    <a className="beskjed-arkiver-knapp" onClick={() => remove(beskjed)}>
      Arkiver
    </a>
  );
};

export default ArkiverKnapp;
