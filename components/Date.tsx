import { parseISO, format } from "date-fns";
import { DateProps } from "@models/types";

const Date: React.FC<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "d/LL/yyyy")}</time>;
};

export default Date;
