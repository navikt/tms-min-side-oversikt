import dayjs from "dayjs";
import "dayjs/locale/nb";
import localeData from "dayjs/plugin/localeData";

dayjs.locale("nb");

export const setLocaleDate = () => {
  dayjs.extend(localeData);
  dayjs.locale("nb");
};

export const formatToReadableDate = (date) => {
  return dayjs(date).format("D. MMMM YYYY, kl. HH.mm");
};

const i18n = {
  nb: {
    numberToWord: (tall) => {
      const ord = ["ett", "to", "tre", "fire", "fem", "seks", "sju", "åtte", "ni", "ti", "elleve", "tolv"];
      return tall > 12 ? tall : ord[tall - 1];
    },
    formatDate: (date) => new Date(date).toLocaleDateString("nb-NO"),
    oneMasculine: () => "én",
    oneFeminine: () => "éi",
    oneNeuter: () => "ett",
    formatDateMonth: (date) => dayjs(date).format("D. MMMM YYYY"),
    formatDayAndMonth: (date) => dayjs(date).locale("nb").format("DD.MM.YYYY"),
    formatDateAndTime: (date) => dayjs(date).locale("nb").format("DD.MM.YYYY - HH:mm"),
  },
};

export default i18n;
