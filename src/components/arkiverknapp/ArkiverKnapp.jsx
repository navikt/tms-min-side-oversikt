import "./ArkiverKnapp.css";

const ArkiverKnapp = ({ mouseEnter, mouseLeave }) => {
  return (
    <a className="beskjed-arkiver-knapp" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      Arkiver
    </a>
  );
};

export default ArkiverKnapp;
