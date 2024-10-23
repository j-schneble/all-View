"use client";


import Header from "@/app/(components)/Header";
import { useGetUsersQuery } from "@/app/state/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 150 },
  { field: "name", headerName: "Name", width: 100 },
  { field: "email", headerName: "Email", width: 200 },
];

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div className="py-4 ">Loading...</div>;
  }

  if (isError || !users) {
    return (
      <div className="text-center text-red-500 py-4">Failed to fetch users</div>
    );
  }

  return (
    <div className="flex mx-8  flex-col">
      <Header name="Users" />


      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className="bg-gray-50 shadow p-10 rounded-lg border border-gray-900 mt-5 !text-gray-800"
      />

    </div>
  );
};

export default Users;
