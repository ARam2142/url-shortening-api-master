/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './footer.css'
// import Instagram from './images/icon-instagram.svg'

function Footer() {
    return (
        <div class="footer">
            <div class="container">
                <div class="row">

                    <br />
                    <br />
                    <div class="col-md-4 title">
                        <h2>Shortly</h2>
                    </div>
                    <div class="col-2">
                        <ul class="navbar-nav">
                            <li class="nav-item active features" style={{ 'marginBottom': '15px' }}>Features</li>
                            <li class="nav-item active"><a class="nav-link" href="#">Link Shortening</a></li>
                            <li class="nav-item active"><a class="nav-link" href="#">Branded Links</a></li>
                            <li class="nav-item active"><a class="nav-link" href="#">Analytics</a></li>
                        </ul>
                    </div>
                    <div class="col-sm">
                        <ul class="navbar-nav">
                            <li class="nav-item active resources" style={{ 'marginBottom': '15px' }}>Resources</li>
                            <li class="nav-item active"><a class="nav-link" href="#">Blog</a></li>
                            <li class="nav-item active"><a class="nav-link" href="#">Developers</a></li>
                            <li class="nav-item active"><a class="nav-link" href="#">Support</a></li>
                        </ul>
                    </div>
                    <div class="col-sm">
                        <ul class="navbar-nav">
                            <li class="nav-item active company" style={{ 'marginBottom': '15px' }}>Company</li>
                            <li class="nav-item active"><a class="nav-link" href="#">About</a></li>
                            <li class="nav-item active"><a class="nav-link" href="#">Our Team</a></li>
                            <li class="nav-item active"><a class="nav-link" href="#">Careers</a></li>
                            <li class="nav-item active"><a class="nav-link" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-sm">
                        <ul class="nav justify-content-around icons">
                            <li class="nav-item active"><a href="#"><i class="fab fa-facebook-square fa-lg"></i></a></li>
                            <li class="nav-item active"><a href="#"><i class="fab fa-twitter fa-lg"></i></a></li>
                            <li class="nav-item active"><a href="#"><i class="fab fa-pinterest fa-lg"></i></a></li>
                            <li class="nav-item active"><a href="#"><i class="fab fa-instagram fa-lg"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;