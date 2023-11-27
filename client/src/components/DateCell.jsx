import { DateTime } from "luxon";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

function DateCell({ getValue, row, column, table }) {
  // const date = DateTime.fromISO(getValue()).toLocaleString();
  let date = new Date(getValue());

  const { updateData } = table.options.meta;

  const handleDateChange = async (date) => {
    try {
      const jobId = row.original._id;
      const res = await fetch(`/api/v1/jobs/${jobId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...row.original, [column.id]: date }),
      });
      if (!res.ok) throw new Error("Date not updated");
      const data = await res.json();
      console.log("date updated", data);
      updateData(row.index, column.id, date);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <DatePicker
      wrapperClassName="flex flex-grow group-hover:bg-light transition-colors"
      dateFormat="d MMM y"
      selected={date}
      onChange={(clickedDate) => handleDateChange(clickedDate)}
      className="p-3 outline-none group-hover:bg-light transition-colors w-[130px] "
    />
  );
}

export default DateCell;
