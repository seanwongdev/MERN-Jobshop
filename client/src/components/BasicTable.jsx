import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { DateTime } from "luxon";
import DownloadButton from "./DownloadButton";
import SearchTable from "./SearchTable";
import StatusCell from "./StatusCell";

function BasicTable({ jobs }) {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("", {
      id: "S/N",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "S/N",
    }),
    columnHelper.accessor("company", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Company",
    }),
    columnHelper.accessor("createdAt", {
      cell: (info) => (
        <span>
          {DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED)}
        </span>
      ),
      header: "Date Applied",
    }),
    columnHelper.accessor("position", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Position",
    }),
    columnHelper.accessor("type", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Type",
    }),
    columnHelper.accessor("jobPortal", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Platform",
    }),
    columnHelper.accessor("status", {
      cell: StatusCell,
      header: "Status",
    }),
  ];

  console.log(columns);

  const [data, setData] = useState(jobs);
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
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
  console.log(table);
  return (
    <div className="p-2 max-w-5xl mx-auto fill-gray-400">
      <div className="flex justify-between mb-2">
        <SearchTable
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(String(value))}
          className="p-2 w-1/5 focus:w-1/3 duration-300 border-indigo-50 bg-transparent outline-none border-b-2"
          placeholder="Search keywords"
        />
        <DownloadButton data={data} fileName={"jobs"} />
      </div>
      <table className="border border-gray-700 w-full text-left">
        <thead className="bg-indigo-600 text-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="capitalize px-3.5 py-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row, i) => (
              <tr key={row.id} className="">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3.5 py-2">
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
      <div className="flex items-center justify-end mt-2 gap-2">
        <button
          onClick={() => {
            table.previousPage();
          }}
          disabled={!table.getCanPreviousPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {"<"}
        </button>
        <button
          onClick={() => {
            table.nextPage();
          }}
          disabled={!table.getCanNextPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
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
