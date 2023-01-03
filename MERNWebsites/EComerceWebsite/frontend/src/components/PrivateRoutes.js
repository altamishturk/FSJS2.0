import {Navigate, Outlet} from 'react-router-dom';
import checkAuthentication from "../utils/Authorization"

function PrivateRoute() {
  const isAuthenticated = checkAuthentication();

  return (
    <>
       {
        isAuthenticated?<Outlet/>: <Navigate to="/login"/>
       }
    </>
  )
}


export default PrivateRoute;


