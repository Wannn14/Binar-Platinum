import {Navigate} from "react-router";

import Login from "../pages/Login/login";
import LandingPage from "../pages/landing-page";
import CariMobil from "../pages/cari-mobil";
import Detail from "../pages/detail";
import Filter from "../pages/fillter";
import Register from "../pages/Register/register";
import BayarMobil from "../pages/Payment/bayar-mobil";
import Tos from "../components/Viewpdf";
import Dashboard from "../pages/Dashboard/Dashboard";
import Etiket from "../pages/E-Tiket/Etiket";
import Payment02 from "../pages/Payment02/payment02";
import Carlist from '../pages/carlist/carlist';
import AddCar from "../pages/AddCar/AddCar";
import LoginAdmin from "../pages/LoginAdmin/LoginAdmin";
import {useSelector} from "react-redux";
const Routes = () => {
  const {isAuth} = useSelector((state) => state.authStore);
  return [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "login-admin",
      element: <LoginAdmin />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/",
      element: isAuth ? <LandingPage /> : <Navigate to="/login" />,
    },
    {
      path: "/pembayaran",
      element: isAuth ?  <BayarMobil /> : <Navigate to="/login" />,
    },
    {
      path: "/etiket",
      element: isAuth ?  <Etiket /> : <Navigate to="/login" />,
    },
  
    {
      path: "/cari-mobil",
      element: isAuth ?  <CariMobil /> : <Navigate to="/login" />,
    },
    {
      path: "/filter",
      element: isAuth ?  <Filter /> : <Navigate to="/login" />,
    },
    {
      path: "/Detail/:id",
      element: isAuth ?  <Detail /> : <Navigate to="/login" />,
     
    },
    {
      path: "pembayaran",
      element: <BayarMobil />,
    },
    {
      path: "konfirmasi",
      element: <Payment02 />,
    },
    {
      path: "/tos",
      element: <Tos />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },

  {
    path: "carlist",
    element: <Carlist />,
  },
  {
    path: "/add-car",
    element: <AddCar />,
  },
    // {
    //   path: "*",
    //   element: <Navigate to={isAuth ? "" : "/login"} />,
    // },
  ];
};

export default Routes;
