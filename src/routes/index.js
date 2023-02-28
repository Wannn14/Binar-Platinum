import { Navigate } from 'react-router';

import Login from '../pages/Login/Login';
import LandingPage from '../pages/landing-page';
import CariMobil from '../pages/cari-mobil'
import Detail from '../pages/detail'
import Register from '../pages/Register/register';
import { useSelector } from "react-redux";
import Base from './Base';
const Routes = () => {
    const  {isAuth} = useSelector ((state)=>state.authStore)


  return [
    {
      path: 'login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: 'home',
      element: isAuth?<LandingPage/>:<Navigate to = '/login'/>
    },
    {
        path: '/',
        element: isAuth?<LandingPage/>:<Navigate to = '/login'/>
    },
    {
      path: '/cari-mobil',
      element: isAuth?<CariMobil/>:<Navigate replace path to='/Login' />
    },
    {
      path: 'Detail/:id',
      element: isAuth?<Detail/>:<Navigate to = '/login'/>
    },


    {
        path:'*',
        element:<Navigate to={isAuth?'':'/login'}/>
    }
  ]; 
};

export default Routes;