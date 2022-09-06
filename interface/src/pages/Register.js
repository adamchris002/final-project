import React from 'react'

const Register = () => {
  return (
    <div className="halaman-login">
      <div className="box-login m-3">
        <img src={require('../images/health_shield.png')}  alt="" className="logo-login"/>
        <h1 className="judul-halaman-login text-center">Halaman Register</h1>
        <div className="name">
          <span className="span-name">
            <label>Name :</label>
            <input className="name-input" placeholder="Input your Name"></input>
          </span>
        </div>
        <div className="nik">
          <span className="span-nik">
            <label>Nik : </label>
            <input className="nik-input" placeholder="Input your Nik"></input>
          </span>
        </div>
        <div className="age">
          <span className="span-age">
            <label>Age : </label>
            <input className="age-input" placeholder="Input your Age"></input>
          </span>
        </div>
        <div className="ktp_image">
          <span className="span-ktp_image">
            <label>KTP : </label>
            <input className="ktp_image-input" placeholder="Input your KTP"></input>
          </span>
        </div>
        <div className="place">
          <span className="span-place">
            <label>Place : </label>
            <input className="place-input" placeholder="Input your Place"></input>
          </span>
        </div>
        <div className=''>
        <a href="/login" className="btn btn-primary tombol-login">Register</a>
        <p className="text-center">Already have and account? <a href="/login">Login Here</a></p>
      </div> 
      </div>
    </div>
  )
}

export default Register