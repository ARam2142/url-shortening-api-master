/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./header.css";
// import Nav from "react-bootstrap/Nav";


const Header = () => {
  return (

    <div class="container">
      <br></br>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#">Shortly</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a className="nav-link" href="#">Feautures</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="#">Resources</a>
            </li>
          </ul>
          <span class="nav-item ">
            <a className="nav-link" href="#">Login</a>
          </span>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button>
        </div>
      </nav>


      <h1>More than just shorter links</h1>
      <div className="row">
        <div className="col">
          <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <button variant="info">Get Started</button>{' '}
        </div>
        <div class="col-4">
          <div>
            {/* <DeskWorkPic /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;