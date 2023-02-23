import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/landing-page";
import CariMobil from "./pages/cari-mobil";
import Detail from "./pages/detail";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";


function App() {
  const  {isAuth} = useSelector ((state)=>state.authStore)
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/cari-mobil" element={<CariMobil/>} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/" element={isAuth?<Home/>:<Navigate to='Login' />} />
      </Routes>
    </>
  );
}

export default App;
