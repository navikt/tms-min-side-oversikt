import dayjs from "dayjs";

const isMorgen = (hour) => hour >= 5 && hour < 10;
const isKveld = (hour) => hour >= 18;

export const getVelkomsthilsen = () => {
  const hour = dayjs().hour();

  if (isMorgen(hour)) {
    return "sidetittel.velkomsthilsen.morgen";
  }

  if (isKveld(hour)) {
    return "sidetittel.velkomsthilsen.kveld";
  }

  return "sidetittel.velkomsthilsen";
};
