import ServiceView from "../../components/forrm/formview/ServiceView";
import "./service.scss";



const Service = () => {

  //Fetch data and send to Single Component
  
  return (
    <div className="service">
      <ServiceView slug="service" {...ServiceView}/>
    </div>
  )
}

export default Service;