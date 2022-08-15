import { logAmplitudeEvent } from "../../utils/amplitude";
import "./ArkiverKnapp.css";

const ArkiverKnapp = ({ mouseEnter, mouseLeave, remove, beskjed }) => {
  return (
    <a
      className="beskjed-arkiver-knapp"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={() => {
        remove(beskjed);
        logAmplitudeEvent("Arkiverbar beskjed");
      }}
    >
      Arkiver
    </a>
  );
};

export default ArkiverKnapp;
