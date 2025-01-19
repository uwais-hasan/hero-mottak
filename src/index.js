import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import About from "./About";
import Refugees from "./Refugees/Refugees";
import Admins from "./Admins";
import Dashboard from "./dashboard";
import Navbar from "./NavBar";
import LogIn from "./LogInSignIn/Login/LogIn";
import SignUp from "./LogInSignIn/SignUp/SignUp";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/RefugeeS" element={<Refugees/>}/>
        <Route path="/admins" element={<Admins/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/logIn" element={<LogIn/>}/>
        <Route path="/singUp" element={<SignUp/>}/>

    </Routes>
</BrowserRouter>


);


