import {Navigate} from "react-router";

import Login from "../pages/Login/login";
import LandingPage from "../pages/landing-page";
import CariMobil from "../pages/cari-mobil";
import Detail from "../pages/detail";
import Filter from "../pages/fillter";
import Register from "../pages/Register/register";
import BayarMobil from "../pages/Payment/bayar-mobil";
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
      path: "/",
      element: isAuth ? <LandingPage /> : <Navigate to="/login" />,
    },
    {
      path: "/cari-mobil",
      element: <CariMobil />,
    },
    {
      path: "/filter",
      element: <Filter />,
    },
    {
      path: "/Detail/:id",
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
