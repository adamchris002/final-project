import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import React from 'react';

//react-router-dom
// import {Routes, Route} from "react-router-dom"

//components
import {NavBar, Footer} from './components'

//pages
import {Login, Register, Vaccine_Register, Certificate, category} from './pages'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}

export default App;
