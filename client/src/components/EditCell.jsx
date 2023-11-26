import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { toast } from "react-toastify";

function EditCell({ getValue, row, column, table }) {
  const initValue = getValue();
  const [value, setValue] = useState(initValue);
  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  const handleEditCell = async (cellValue) => {
    try {
      const jobId = row.original._id;
      const res = await fetch(`/api/v1/jobs/${jobId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...row.original, cellValue }),
      });
      if (!res.ok) throw new Error("Update failed");
      const { data } = await res.json();
      console.log("Job updated", data);
      updateData(row.index, column.id, cellValue);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        border={0}
        rounded={0}
        padding={1.5}
        height="100%"
      ></Input>
    </div>
  );
}

export default EditCell;
