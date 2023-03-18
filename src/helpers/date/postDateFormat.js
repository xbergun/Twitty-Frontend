import moment from "moment";

export default function postDateFormat(date) {
  return moment(date).startOf("hour").fromNow();
}
