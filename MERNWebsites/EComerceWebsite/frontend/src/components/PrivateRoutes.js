import {Navigate, Outlet} from 'react-router-dom';
import {useSelector} from "react-redux";

function PrivateRoute() {
  const loggedInUser = useSelector(state => state.loggedInUser);

  return (
    <>
       {
        loggedInUser?.role === "admin" ?<Outlet/>: <Navigate to="/login"/>
       }
    </>
  )
}


export default PrivateRoute;


