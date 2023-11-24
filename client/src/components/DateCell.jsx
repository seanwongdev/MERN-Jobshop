import { DateTime } from "luxon";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DateCell({ getValue, row, column, table }) {
  const date = DateTime.fromISO(getValue()).toLocaleString();
  console.log(date);
  const { updateData } = table.options.meta;
  const handleDateSelect = () => {};
  const handleDateChange = () => {};
  return (
    <div>
      {" "}
      {date}
      <DatePicker
        // wrapperClassName="date-wrapper"
        // dateFormat="dd MMM YY"
        // selected={date}
        onSelect={handleDateSelect} //when day is clicked
        onChange={handleDateChange} //only when value has changed
      />
    </div>
  );
}

export default DateCell;
