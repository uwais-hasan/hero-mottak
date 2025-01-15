import Posts from "./Posts";
import Navbar from "./NavBar";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import About from "./About";
import Refugees from "./Refugees";
import {Alert} from "@mui/material";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Alert severity="success">Please visit the About page for site information..</Alert>
        <Header />
        <Routes >
            <Route path="/">
                <Route index path="/" element={<Posts/>}/>

            </Route>
        </Routes>



    </div>
  );
}

export default App;
