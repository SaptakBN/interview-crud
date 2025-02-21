import dayjs from 'dayjs';
import advancedFormat from "dayjs/plugin/advancedFormat"

dayjs.extend(advancedFormat);

export function format(date: string) {
    return dayjs(date).format('h:mm on Do, MMMM');
}