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
import { useState } from "react";

import DownloadButton from "./DownloadButton";
import SearchTable from "./SearchTable";
import StatusCell from "./StatusCell";
import DateCell from "./DateCell";
import Button from "../ui/Button";
import EditCell from "./EditCell";
import EditCurrency from "./EditCurrency";
import TypeCell from "./Typecell";

function BasicTable({ jobs }) {
  const columnHelper = createColumnHelper();

  const columns = [
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
      cell: EditCell,
      header: "Platform",
    }),
    columnHelper.accessor("status", {
      cell: StatusCell,
      header: "Status",
    }),
  ];

  const [data, setData] = useState(jobs);
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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

  return (
    <div className=" mx-auto  overflow-x-scroll">
      <span className="text-dark font-semibold text-2xl ">
        Job Applications
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
  );
}

export default BasicTable;
