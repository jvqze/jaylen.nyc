import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isBetween from "dayjs/plugin/isBetween";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(isBetween);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/New_York");

export { dayjs };
