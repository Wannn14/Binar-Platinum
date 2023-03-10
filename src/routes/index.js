import {Navigate} from "react-router";

import Login from "../pages/Login/Login";
import LandingPage from "../pages/landing-page";
import CariMobil from "../pages/cari-mobil";
import Detail from "../pages/detail";
import Filter from "../pages/fillter";
import Register from "../pages/Register/register";
import BayarMobil from "../pages/Payment/bayar-mobil";
import Tos from "../components/Viewpdf"
import ChartDashboard from "../pages/Dashboard/Chart";
import Etiket from "../pages/E-Tiket/Etiket";
import Payment02 from "../pages/Payment02/payment02";
import Tos from "../components/Viewpdf";
import {useSelector} from "react-redux";
const Routes = () => {
  const {isAuth} = useSelector((state) => state.authStore);
  return [
    {
      path: "login",
      element: <Login />,
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
      path: "/chart",
      element:  <ChartDashboard />
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
      element: <Detail />,
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

    // {
    //   path: "*",
    //   element: <Navigate to={isAuth ? "" : "/login"} />,
    // },
  ];
};

export default Routes;
