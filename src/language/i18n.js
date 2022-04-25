import "dayjs";
import dayjs from "dayjs";

dayjs.locale("nb");

const i18n = {
  nb: {
    numberToWord: (tall) => {
      const ord = ["en", "to", "tre", "fire", "fem", "seks", "sju", "åtte", "ni", "ti", "elleve", "tolv"];
      return tall > 12 ? tall : ord[tall - 1];
    },
    formatDate: (date) => new Date(date).toLocaleDateString("nb-NO"),
    oneMasculine: () => "én",
    oneFeminine: () => "éi",
    oneNeuter: () => "ett",
    formatDateMonth: (date) => dayjs(date).format("DD. MMMM YYYY"),
    formatDayAndMonth: (date) => dayjs(date).locale("nb").format("DD.MM.YYYY"),
    formatDateAndTime: (date) => dayjs(date).locale("nb").format("DD.MM.YYYY - HH:mm"),
  },
};

export default i18n;
