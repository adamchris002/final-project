import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";

//react-router-dom
import { Routes, Route } from "react-router-dom";

//components
import { NavBar, Footer } from "./components";

//pages
import {
  Login,
  Register,
  RegisterVaccine,
  Certificate,
  Category,
} from "./pages";

function App() {
  return (
    <div className="main-content">
      <NavBar></NavBar>
      {/* <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/register-vaccine"
          element={<RegisterVaccine></RegisterVaccine>}
        ></Route>
        <Route
          path="/certificate"
          element={<Certificate></Certificate>}
        ></Route>
        <Route path="/category" element={<Category></Category>}></Route>
      </Routes> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
