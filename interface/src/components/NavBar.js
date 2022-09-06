import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid header">
          <a className="navbar-brand" href="/home">
          <img src={require('../images/health_shield.png')} alt="" className="foto-nav"/>
            Vaccine Registration
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse tes" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/register">
                  Register Here
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/certificate">
                  Certificate
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/category">
                  Vaccine Category
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
