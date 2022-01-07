import React, { useState } from "react";
import "./Users.scss";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../DummyData";

function Users() {
  const [data, setData] = useState(userRows);

  const handleDel = (id) => {
    setData(data.filter((items) => items.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="userlist">
            <img src={params.row.avatar} alt="" />
            {params.row.user}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 160,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 130,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="delete-btn"
              onClick={() => handleDel(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="users">
      <h2>Users</h2>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowHeight={56}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default Users;
