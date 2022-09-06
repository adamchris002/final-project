import React from "react";

const Login = () => {
  return (
    <div className="halaman-login">
      <div className="box-login m-3">
        <img src={require('../images/health_shield.png')}  alt="" className="logo-login"/>
        <h1 className="judul-halaman-login text-center">Login</h1>
        <div className="username">
          <span className="span-username">
            <label>Username :</label>
            <input className="username-input" placeholder="Input your Username"></input>
          </span>
        </div>
        <div className="password">
          <span className="span-password">
            <label>Password : </label>
            <input className="password-input" placeholder="Input your Password"></input>
          </span>
        </div>
        <a href="/login" className="btn btn-primary tombol-login">Login</a>
        <p className="text-center">did not have an account? <a href="/register">Register Here</a></p>
      </div> 
    </div>
  );
};

export default Login;
