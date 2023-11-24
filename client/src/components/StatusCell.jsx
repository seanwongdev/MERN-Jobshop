import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

function StatusCell({ getValue, row, column, table }) {
  const status = getValue();
  const { updateData } = table.options.meta;
  const allStatusValues = table.options.data.map((row) => row.status);
  const uniqueStatusValues = [...new Set(allStatusValues)];

  return (
    <div>
      <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
        <MenuButton h="100%" w="100%" textAlign="left" p={1.5} color="gray.900">
          {status}
        </MenuButton>
        <MenuList>
          {uniqueStatusValues.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => updateData(row.index, column.id, item)}
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
