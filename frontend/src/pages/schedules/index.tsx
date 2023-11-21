import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "../Clients/clients.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
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
        field: "endereco",
        type: "string",
        headerName: "Endereço",
        width: 200,
      },
      {
        field: "msg",
        type: "string",
        headerName: "Observação",
        width: 200,
      },
      {
        field: "start",
        type: "string",
        headerName: "Data",
        width: 200,
      },
    
    
  ];

const Schedules = () => {
    const [open, setOpen] = useState(false);

  // TEST THE API

   const { isLoading, data } = useQuery({
     queryKey: ["allclients"],
     queryFn: () =>
       fetch("http://localhost:3000/clients").then(
         (res) => res.json()
       )
   });

  return (
    <div className="client">
      <div className="info">
        <h1>Agendamentos</h1>
        {/*<button onClick={() => setOpen(true)}>Add Novo</button>*/}
      </div>
      
      {/* TEST THE API */}

       {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="client" columns={columns} rows={data} />
      )}
      {open && <Add slug="client" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Schedules;