import dayjs from "dayjs";

export const sortByEventTidspunkt = (a, b) => (dayjs(a.eventTidspunkt).isAfter(dayjs(b.eventTidspunkt)) ? -1 : 1);
