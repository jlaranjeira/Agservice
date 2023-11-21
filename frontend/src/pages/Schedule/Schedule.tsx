import AgendaView from "../../components/forrm/formview/AgendaView"
import "../Client/client.scss"



const Schedule = () => {

  //Fetch data and send to Single Component
  
  return (
    <div className="client">
      <AgendaView slug="schedule" {...AgendaView}  />
    </div>
  )
}

export default Schedule