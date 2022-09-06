import { parseISO, format } from 'date-fns';//2 Funstion from date-nfs lib
//Component to format date
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}