import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import routes from "./routes";
import { useRoutes } from "react-router";
import { Navigate,Route, Routes } from 'react-router';
import Login from "./pages/Login/Login";
import CariMobil from "./pages/cari-mobil";
import Detail from "./pages/detail";
import Home from "./pages/landing-page";
import { useSelector } from "react-redux";

function App() {
  const appRoutes = useRoutes(routes());
    
  return appRoutes;
}


// function App() {
//   const  {isAuth} = useSelector ((state)=>state.authStore)
//   return (
//     <>
//       <Routes>
//         {/* <Route path="/" element={<Home />} /> */}
//         {/* <Route path="cari-mobil" element={isAuth?<CariMobil/>:<Navigate replace to='login' />} /> */}
        
//         <Route path="/Detail/:id" element={<Detail />} />
//         <Route path="login" element={<Login/>} />
//         <Route path="/" element={isAuth?<Home/>:<Navigate to='Login' />} />
//         <Route exact path="cari-mobil" element={isAuth ? (<CariMobil />) : (<Navigate replace to={"login"} />)}/>
//       </Routes>
//     </>
//   );
// }

export default App;
