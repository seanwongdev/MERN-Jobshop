import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { toast } from "react-toastify";

function EditCell({ getValue, row, column, table }) {
  const initValue = getValue();
  const [value, setValue] = useState(initValue);
  const { updateData } = table.options.meta;

  const handleKeyPress = (e) => {
    const isValidKey = /^\d$/.test(e.key);

    if (!isValidKey) {
      e.preventDefault();
    }
  };

  const handleEditCell = async () => {
    try {
      const jobId = row.original._id;

      const payload = { ...row.original, [column.id]: value };
      const res = await fetch(`/api/v1/jobs/${jobId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Update failed");
      const { data } = await res.json();
      console.log("Job updated", data);
      updateData(row.index, column.id, value);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Input
        htmlSize={8}
        width="full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        border={0}
        onBlur={handleEditCell}
        rounded={0}
        height="100%"
        className="hover:bg-light p-3.5"
      ></Input>
    </div>
  );
}

export default EditCell;
