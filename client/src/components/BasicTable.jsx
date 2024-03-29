import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  faSortUp,
  faSortDown,
  faMagnifyingGlass,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import DownloadButton from "./DownloadButton";
import SearchTable from "./SearchTable";
import StatusCell from "./StatusCell";
import DateCell from "./DateCell";
import Button from "../ui/Button";
import EditCell from "./EditCell";
import EditCurrency from "./EditCurrency";
import TypeCell from "./Typecell";
import PlatformCell from "./PlatformCell";
import IndeterminateCheckbox from "./IndeterminateCheckbox";

function BasicTable({ jobs }) {
  const columnHelper = createColumnHelper();

  const columns = React.useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-3">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      columnHelper.accessor("", {
        id: "S/N",
        cell: (info) => <span className="p-4">{info.row.index + 1}</span>,
        header: "S/N",
      }),
      columnHelper.accessor("company", {
        // cell: (info) => <span>{info.getValue()}</span>,
        cell: EditCell,
        header: "Company",
      }),
      columnHelper.accessor("position", {
        // cell: (info) => <span>{info.getValue()}</span>,
        cell: EditCell,
        header: "Position",
      }),
      columnHelper.accessor("createdAt", {
        cell: DateCell,
        // cell: (info) => (
        //   <span>
        //     {DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED)}
        //   </span>
        // ),
        header: "Date Applied",
      }),
      columnHelper.accessor("salary", {
        // cell: (info) => <span>{info.getValue()}</span>,
        cell: EditCurrency,
        header: "Salary",
      }),
      columnHelper.accessor("type", {
        // cell: (info) => <span>{info.getValue()}</span>,
        cell: TypeCell,
        header: "Type",
      }),
      columnHelper.accessor("location", {
        cell: EditCell,
        header: "Location",
      }),
      columnHelper.accessor("jobPortal", {
        // cell: (info) => <span>{info.getValue()}</span>,
        cell: PlatformCell,
        header: "Platform",
      }),
      columnHelper.accessor("status", {
        cell: StatusCell,
        header: "Status",
      }),
    ],
    [columnHelper]
  );

  const [data, setData] = useState(jobs);

  const [globalFilter, setGlobalFilter] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      rowSelection,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true, // condition can be set to allow selection only when condition met
    onRowSelectionChange: setRowSelection,
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value,
                }
              : row
          )
        ),
    },
  });

  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    // Update filtered data when global filter changes
    setFilteredData(
      table.getFilteredRowModel().rows.map((row) => row.original)
    );
  }, [globalFilter, table]);

  const handleDeleteRow = async () => {
    try {
      const idsToDelete = table
        .getSelectedRowModel()
        .rows.map((item) => item.original._id);

      const newData = data.filter((row) => !idsToDelete.includes(row._id));

      const res = await fetch("/api/v1/jobs/delete-multiple", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: idsToDelete }),
      });
      if (!res.ok) throw new Error("Failed to delete rows");
      console.log(data);
      console.log(newData);
      setData(newData);
      setFilteredData(newData);
      setRowSelection({});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" mx-auto  overflow-x-scroll">
      <span className="text-dark font-semibold text-2xl ">
        Job Applications (
        <span className="text-xl">{filteredData.length} Results</span>)
      </span>
      <div className="flex justify-between my-2 flex-wrap">
        <div className="w-1/3 flex items-center gap-1">
          <FontAwesomeIcon className="text-primary" icon={faMagnifyingGlass} />
          <SearchTable
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="p-2 w-[150px] focus:w-[300px] duration-300 border-light focus:border-primary bg-transparent outline-none border-b-2"
            placeholder="Search keywords"
          />
        </div>
        <div className="flex items-center  justify-center gap-4">
          {table.getSelectedRowModel().rows.length > 0 && (
            <Button type="dark" onClick={handleDeleteRow}>
              Delete
            </Button>
          )}
          <DownloadButton data={data} fileName={"jobs"} />
          <Button to={"/dashboard"} type="dark">
            <span className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faCirclePlus} /> Add a New Job{" "}
            </span>
          </Button>
        </div>
      </div>
      <table className="w-full text-left ">
        <thead className="bg-light text-secondary border-b border-primary">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="capitalize px-3.5 py-2 "
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {
                    {
                      asc: <FontAwesomeIcon className="ms-2" icon={faSortUp} />,
                      desc: (
                        <FontAwesomeIcon className="ms-2" icon={faSortDown} />
                      ),
                    }[header.column.getIsSorted()]
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border border-primary border-opacity-50 border-t-0 group"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="text-center h-32">
              <td colSpan={12}>No results found!</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex justify-between items-center">
        <span>{table.getSelectedRowModel().rows.length || 0} selected </span>

        <div className="flex items-center justify-end mt-2 gap-2 flex-wrap">
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-primary px-2 disabled:opacity-30"
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-primary px-2 disabled:opacity-30"
          >
            {">"}
          </button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16 bg-transparent"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="p-2 bg-transparent"
          >
            {[10, 20, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default BasicTable;
