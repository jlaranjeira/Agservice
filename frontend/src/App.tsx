import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Clients from "./pages/Clients/Clients";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet, 
} from "react-router-dom";
import "./styles/global.scss"
import Schedule from "./pages/schedule/index"
import Client from "./pages/Client/Client";
import Users from "./pages/Users/Users";
import Service from "./pages/Service/Service";
import User from "./pages/User/User";
import { Login } from "./pages/login";



function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />                       
          </div>
        </div>
        <Footer />
      </div>
    )
  }
    

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },

    {    

      path: "/",
      element: <Layout />,            
      children:[
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/clients",
          element: <Clients />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/service/:id",
          element: <Service />
        },
        {
          path: "/schedule",
          element: <Schedule />
        },
        {
          path: "/client/:id",
          element: <Client />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/user/:id",
          element: <User />
        },

      ]
    },

    /*{
      path: "/login",
      element: <Login />
    },*/
  ]);
 

  return <RouterProvider router={router} />;
  
}

export default App;
