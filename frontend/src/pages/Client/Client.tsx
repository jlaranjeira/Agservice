import FormView from "../../components/forrm/formview/FormView"
import "./client.scss"

const Client = () => {

  //Fetch data and send to Single Component
  
  return (
    <div className="client">
      <FormView slug="clients"{...FormView}/>
    </div>
  )
}

export default Client