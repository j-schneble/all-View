"use client";

import Header from "@/app/(components)/Header";
import { useGetProductsQuery } from "@/app/state/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 90, cellClassName: "text-zinc-800 px-2 " },
  { field: "name", headerName: "Product Name", width: 100, cellClassName: "text-red-600 px-2 " },
  {
    field: "price",
    headerName: "Price",
    width: 80,
    type: "number",
    cellClassName: "text-green-600 ",
    valueGetter: (value, row) => `$${row.price}`,

  },
  {
    field: "rating",
    headerName: "Rating",
    width: 80,
    type: "number",
    cellClassName: "text-amber-600 ",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 100,
    type: "number",
  },
];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        checkboxSelection
        className="bg-gray-100 shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default Inventory;
