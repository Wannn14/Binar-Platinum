import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/landing-page";
import CariMobil from "./pages/cari-mobil";
import Detail from "./pages/detail";
import Login from "./pages/Login/login";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cari-mobil" element={<CariMobil />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
