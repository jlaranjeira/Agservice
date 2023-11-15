import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useState } from "react";
import AddUser from "../../components/add/AddUser";
//import { userRows } from "../../data";
import { useQuery } from "react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  
  {
    field: "nome",
    type: "string",    
    headerName: "Nome",
    width: 250,
    
  },  
  {
    field: "email",
    type: "string",    
    headerName: "Email",
    width: 200,
  },
  {
    field: "telefone",
    type: "string",
    headerName: "Telefone",
    width: 200,
  },
  {
    field: "password",
    type: "string",
    headerName: "Senha",
    width: 300,
  },
  
  
];

const columnss: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    
    {
      field: "nome",
      type: "string",    
      headerName: "Nome",
      width: 250,
      
    },  
    {
      field: "email",
      type: "string",    
      headerName: "Email",
      width: 200,
    },
    {
      field: "telefone",
      type: "string",
      headerName: "Telefone",
      width: 200,
    },   
    
    
  ];

const Users = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

   const { isLoading, data } = useQuery({
     queryKey: ["allusers"],
     queryFn: () =>
       fetch("http://localhost:3000/users").then(
         (res) => res.json()
       )
   });

  return (
    <div className="client">
      <div className="info">
        <h1>Usuários</h1>
        <button onClick={() => setOpen(true)}>Add Novo Usuário</button>
      </div>
      
      {/* TEST THE API */}

       {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="user" columns={columnss} rows={data} />
      )}
      {open && <AddUser slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;