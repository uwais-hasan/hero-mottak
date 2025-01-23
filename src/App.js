// import Home from "./Home";
// import Navbar from "./NavBar";
// import Header from "./Header";
// import {Route, Routes, useNavigate} from "react-router-dom";
// import About from "./About";
// import Refugees from "./Refugees/Refugees";
// import {Alert} from "@mui/material";
// import React, {useEffect} from "react";
//
//
// function App() {
//
//     const navigate=useNavigate()
//
//     useEffect(() => {
//         if (localStorage.getItem("Success")) {
//             navigate('/')
//         }else {
//             navigate('/logIn')
//         }
//     },[navigate])
//   return (
//     <div className="App" style={{position:'relative'}}>
//
//
//         <Alert  severity="success">Please visit the About page for site information..</Alert>
//         <Header />
//         <Routes >
//                 <Route index path="/" element={<Home/>}/>
//         </Routes>
//
//
//
//     </div>
//   );
// }
//
// export default App;




import Home from "./Home";
import Navbar from "./NavBar";
import Header from "./Header";
import {BrowserRouter, Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import About from "./About";
import Refugees from "./Refugees/Refugees";
import {Alert} from "@mui/material";
import React, {useEffect} from "react";

import Admins from "./Admins";
import Dashboard from "./Dashboard/dashboard";
import LogIn from "./LogInSignIn/Login/LogIn";
import SignUp from "./LogInSignIn/SignUp/SignUp";

function App() {


    const location=useLocation()


    return (
        <div className="App" style={{position:'relative'}}>


            {location.pathname !== '/logIn' && location.pathname !== '/singUp' &&  <Navbar/>}

            {location.pathname === '/' && <Alert severity="success">Please visit the About page for site information..</Alert>}
            {location.pathname === '/' && <Header/>}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/RefugeeS" element={<Refugees/>}/>
                    <Route path="/admins" element={<Admins/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/logIn" element={<LogIn/>}/>
                    <Route path="/singUp" element={<SignUp/>}/>
                </Routes>





        </div>
    );
}

export default App;
