import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { toast } from "react-toastify";

function StatusCell({ getValue, row, column, table }) {
  const status = getValue();
  const { updateData } = table.options.meta;
  const allStatusValues = table.options.data.map((row) => row.status);
  const uniqueStatusValues = [...new Set(allStatusValues)];

  const handleStatusChange = async (newStatus) => {
    try {
      const jobId = row.original._id;
      const res = await fetch(`/api/v1/jobs/update-status/${jobId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Update failed");
      const { data } = await res.json();
      console.log("Job updated", data);
      updateData(row.index, column.id, newStatus);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
        <MenuButton h="100%" w="100%" textAlign="left" p={1.5} color="gray.900">
          {status}
        </MenuButton>
        <MenuList>
          {uniqueStatusValues.map((item, index) => (
            <MenuItem
              key={index}
              // onClick={() => updateData(row.index, column.id, item)}
              onClick={() => handleStatusChange(item)}
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}

export default StatusCell;