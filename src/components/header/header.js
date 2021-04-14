/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./header.css";
// import Nav from "react-bootstrap/Nav";


const Header = () => {
  return (

    <div className={'header'}>
      <div className={'container'}>

        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand shortly" href="#">Shortly</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto choices">
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Resources</a>
              </li>
            </ul>
            <span className="nav-item ">
              <a className="nav-link login" href="#">Login</a>
            </span>
            <button className="btn btn-primary sign-up" type="submit"><span>Sign Up</span></button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header;