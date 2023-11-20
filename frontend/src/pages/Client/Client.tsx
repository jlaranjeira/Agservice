import FormView from "../../components/forrm/formview/FormView"
import "./client.scss"
//import FormView1 from "../../components/forrm/formview/FormView1"
import Visualizar from "../../components/forrm/formEdit/FormEdit"

const Client = () => {

  //Fetch data and send to Single Component
  
  return (
    <div className="client">
      <FormView slug="client" {...FormView}  />
    </div>
  )
}

export default Client