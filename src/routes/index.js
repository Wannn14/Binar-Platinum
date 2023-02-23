import { Navigate } from 'react-router';

import Login from '../pages/Login/Login';
import LandingPage from '../pages/landing-page';
import { useSelector } from "react-redux";
const Routes = () => {
    const  {isAuth} = useSelector ((state)=>state.authStore)
  return [
    {
        path: '',
        element: <LandingPage />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
        path:'*',
        element:<Navigate to={isAuth?'':'/login'}/>
    }
  ]; 
};

export default Routes;