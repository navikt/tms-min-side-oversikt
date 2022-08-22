import { logAmplitudeEvent } from "../../utils/amplitude";
import BtnCSS from "./ArkiverKnapp.module.css";

const ArkiverKnapp = ({ mouseEnter, mouseLeave, remove, beskjed }) => {
  return (
    <button
      className={BtnCSS.btn}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={() => {
        remove(beskjed);
        logAmplitudeEvent("Arkiverbar beskjed");
      }}
    >
      Arkiver
    </button>
  );
};

export default ArkiverKnapp;
