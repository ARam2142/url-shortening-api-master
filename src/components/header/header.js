/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./header.css";
// import Nav from "react-bootstrap/Nav";


const Header = () => {
  return (

    <div className={'header'}>
      <div className={'container'}>

        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand shortly" href="#">Shortly</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto choices">
              <li class="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="#">Resources</a>
              </li>
            </ul>
            <span class="nav-item ">
              <a className="nav-link login" href="#">Login</a>
            </span>
            <button class="btn btn-primary sign-up" type="submit"><span>Sign Up</span></button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header;