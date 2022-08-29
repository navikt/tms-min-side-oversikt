import dayjs from "dayjs";

const isMorgen = (hour) => hour >= 6 && hour <= 10;
const isKveld = (hour) => hour >= 18 && hour <= 5;

export const getHilsningByHour = () => {
  const hour = dayjs().hour();

  if (isMorgen(hour)) {
    return "sidetittel.hilsning.morgen";
  }

  if (isKveld(hour)) {
    return "sidetittel.hilsning.kveld";
  }

  return "sidetittel.hilsning";
};
