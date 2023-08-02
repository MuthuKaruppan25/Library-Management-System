import Admin from "./adminlogin";
import Home from "./home";
import Adhome from "./adhome";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Addbook from "./addbook";
import Viewbook from "./viewbook";
import Editbook from "./editbook";
import Registerstudent from "./registerstudent";
import Issuebook from "./issuebook";
import Login from "./login";
import Studenthome from "./studenthome";
import Issuedbook from "./Issuedbooks";
import { useState } from "react";
import Managebook from "./managebook";

function App() {
  const [regno,setregno]=useState('')
  const handleregno =(reg)=>{
    setregno(reg);
  }
  return (
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element ={<Admin/>}/>
        <Route path="/home" element={<Adhome/>}/>
        <Route path="/addbook" element={<Addbook/>}/>
        <Route path="/viewbook" element={<Viewbook/>}/>
        <Route path="/editbook" element={<Editbook/>}/>
        <Route path="/registerstudent" element={<Registerstudent/>}/>
        <Route path="/Issuebook" element={<Issuebook/>}/>
        <Route path="/login" element={<Login handleregno={handleregno}/>}/>
        <Route path="/issuedbook" element={<Issuedbook regno={regno}/>}/>
        <Route path="/studenthome" element={<Studenthome regno={regno}/>}/>
        <Route path="/managebook" element={<Managebook/>}/>
    </Routes>
  );
}

export default App;
