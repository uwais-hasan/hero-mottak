import Home from "./Home";
import Navbar from "./NavBar";
import Header from "./Header";
import {Route, Routes, useNavigate} from "react-router-dom";
import About from "./About";
import Refugees from "./Refugees/Refugees";
import {Alert} from "@mui/material";
import {useEffect} from "react";


function App() {

    const navigate=useNavigate()

    useEffect(() => {
        if (localStorage.getItem("Success")) {
            navigate('/')
        }else {
            navigate('/logIn')
        }
    },[navigate])
  return (
    <div className="App" style={{position:'relative'}}>

        <Alert  severity="success">Please visit the About page for site information..</Alert>
        <Header />
        <Routes >
                <Route index path="/" element={<Home/>}/>
        </Routes>



    </div>
  );
}

export default App;
