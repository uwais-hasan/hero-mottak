import Home from "./Home";
import Navbar from "./NavBar";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import About from "./About";
import Refugees from "./Refugees/Refugees";
import {Alert} from "@mui/material";


function App() {
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
