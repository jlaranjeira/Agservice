import FormView from "../../components/forrm/formview/FormView";

//import "./user.scss";



const User = () => {

  //Fetch data and send to Single Component
  
  return (
    <div className="user">
      <FormView slug="user" {...FormView}/>
    </div>
  )
}



export default User;