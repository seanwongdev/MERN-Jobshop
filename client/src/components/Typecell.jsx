import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { jobType } from "../utils/constants";

function TypeCell({ getValue, row, column, table }) {
  const type = getValue();
  const { updateData } = table.options.meta;

  const handleTypeChange = async (newType) => {
    try {
      const jobId = row.original._id;
      const res = await fetch(`/api/v1/jobs/${jobId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...row.original, [column.id]: newType }),
      });
      if (!res.ok) throw new Error("Update failed");
      const { data } = await res.json();
      console.log("Job updated", data);
      updateData(row.index, column.id, newType);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
        <MenuButton
          h="100%"
          textAlign="left"
          className="font-[400] border-0 rounded-none
          focus:outline-0 hover:bg-light w-full px-3.5 py-3"
        >
          {type}
        </MenuButton>
        <MenuList>
          {jobType.map((item, index) => (
            <MenuItem
              key={index}
              // onClick={() => updateData(row.index, column.id, item)}
              onClick={() => handleTypeChange(item)}
              className="hover:border-0 focus:outline-none"
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}

export default TypeCell;
