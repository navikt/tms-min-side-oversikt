import dayjs from "dayjs";

export const sortByEventTidspunkt = (a, b) => (dayjs(a.forstBehandlet).isAfter(dayjs(b.forstBehandlet)) ? -1 : 1);
