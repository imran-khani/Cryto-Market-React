import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useContext } from "react";
import { Coin, CoinContext } from "../context/CoinContext";
import { MoonLoader } from "react-spinners";

const columnHelper = createColumnHelper<Coin>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => (
      <div className="flex items-center space-x-2">
        <img
          src={info.row.original.image}
          alt={info.getValue()}
          className="w-6 h-6"
        />
        <span className="text-gray-700">{info.getValue()}</span>
      </div>
    ),
    header: () => <span className="text-gray-700">Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("current_price", {
    cell: (info) => (
      <span className="text-gray-700">${info.getValue().toFixed(2)}</span>
    ),
    header: () => <span className="text-gray-700">Current Price</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("market_cap", {
    cell: (info) => (
      <span className="text-gray-700">${info.getValue().toLocaleString()}</span>
    ),
    header: () => <span className="text-gray-700">Market Cap</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("high_24h", {
    cell: (info) => (
      <span className="text-gray-700">${info.getValue().toFixed(2)}</span>
    ),
    header: () => <span className="text-gray-700">High 24h</span>,
    footer: (info) => info.column.id,
  }),
];

const DataTable = () => {
  const { coins } = useContext(CoinContext);

  const table = useReactTable<Coin>({
    data: coins.slice(0, 10),
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-w-[1200px] min-h-[800px] relative my-5 w-full bg-white divide-y divide-gray-200">
        {coins.length === 0 && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <MoonLoader color="#2563EB" />
            </div>
        )}
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="flex justify-between" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row, index) => (
            <tr key={row.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {index + 1}
              </td>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
