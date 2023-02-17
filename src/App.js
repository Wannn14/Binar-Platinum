import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/landing-page";
import CariMobil from "./pages/cari-mobil";
import Detail from "./pages/detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cari-mobil" element={<CariMobil />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
