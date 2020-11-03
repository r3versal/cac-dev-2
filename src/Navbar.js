import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import logo from './codelogowhite.png';

import './App.css';

function Navbar(props) {

  return (
<div classNameName="Navbar{'Navbar navbar-' + props.color}>
        {props.children}">
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"crossorigin></script>
        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"crossorigin></script>
        <script>var Alert = ReactBootstrap.Alert;</script>          

    <nav className="navbar navbar-toggleable-sm navbar-trans navbar-inverse">
        <div className="container">
            <a className="navbar-brand" href="App.js">Code &amp; Candor</a>
            {/* <div id="header-image">
                <img src={logo} alt=""/>    
            </div> */}
                <ul className="navbar-nav mt-2 mt-md-0">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="Home">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="About">About</a>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className="nav-link" href="/OurWork">Our Work</a>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className="nav-link" href="Contact">Contact</a>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className="btn btn-outline-white btn-outline" href="#"><i className="fa fa-user"></i> Login </a>
                    </li> */}
                </ul>
        </div>
    </nav>
    
    </div>
  );
}
export default Navbar;
