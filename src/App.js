import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {useRoutes } from "react-router";
import routes from "./routes";

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
//         <Route path="/cari-mobil" element={<CariMobil/>} />
//         <Route path="/Detail/:id" element={<Detail />} />
//         <Route path="/Login" element={<Login/>} />
//         <Route path="/" element={isAuth?<Home/>:<Navigate to='Login' />} />
//       </Routes>
//     </>
//   );
// }

export default App;
