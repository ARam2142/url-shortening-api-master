/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './footer.css'
// import Instagram from './images/icon-instagram.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">

                    <br />
                    <br />
                    <div className="col-md-4 shortly">
                        <h2>Shortly</h2>
                    </div>
                    <div className="col-sm options">
                        <ul className="navbar-nav">
                            <li className="nav-item active features" style={{ 'marginBottom': '15px' }}>Features</li>
                            <li className="nav-item active"><a className="nav-link" href="#">Link Shortening</a></li>
                            <li className="nav-item active"><a className="nav-link" href="#">Branded Links</a></li>
                            <li className="nav-item active"><a className="nav-link" href="#">Analytics</a></li>
                        </ul>
                    </div>
                    <div className="col-sm options">
                        <ul className="navbar-nav">
                            <li className="nav-item active resources" style={{ 'marginBottom': '15px' }}>Resources</li>
                            <li className="nav-item active"><a className="nav-link" href="#">Blog</a></li>
                            <li className="nav-item active"><a className="nav-link" href="#">Developers</a></li>
                            <li className="nav-item active"><a className="nav-link" href="#">Support</a></li>
                        </ul>
                    </div>
                    <div className="col-sm options">
                        <ul className="navbar-nav">
                            <li className="nav-item active company" style={{ 'marginBottom': '15px' }}>Company</li>
                            <li className="nav-item active"><a className="nav-link" href="#">About</a></li>
                            <li className="nav-item active"><a className="nav-link" href="#">Our Team</a></li>
                            <li className="nav-item active"><a className="nav-link" href="#">Careers</a></li>
                            <li className="nav-item active"><a className="nav-link" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <ul className="nav justify-content-around icons">
                            <li className="nav-item active"><a href="#"><i className="fab fa-facebook-square fa-lg"></i></a></li>
                            <li className="nav-item active"><a href="#"><i className="fab fa-twitter fa-lg"></i></a></li>
                            <li className="nav-item active"><a href="#"><i className="fab fa-pinterest fa-lg"></i></a></li>
                            <li className="nav-item active"><a href="#"><i className="fab fa-instagram fa-lg"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;