import { DateTime } from "luxon";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DateCell({ getValue, row, column, table }) {
  // const date = DateTime.fromISO(getValue()).toLocaleString();
  const date = new Date(getValue());
  console.log(date);

  const { updateData } = table.options.meta;

  const handleDateChange = (date) => {
    updateData(row.index, column.id, date);
  };
  return (
    <div>
      {" "}
      {/* {date} */}
      <DatePicker
        wrapperClassName="date-wrapper"
        dateFormat="d MMM y"
        selected={date}
        onChange={(clickedDate) => handleDateChange(clickedDate)}
      />
    </div>
  );
}

export default DateCell;
