import React from 'react';
import { Link } from "react-router-dom";
import '../css/style.css';
const Header=()=>{
return(
        <nav className="navbar header fixed-top navbar-expand-lg  navbar-light">
             <Link to="/" className="name-background">
                Amita
              </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link h5 mb-0 link">
                Contact
              </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/portfolio" className="nav-link h5 mb-0 link">
                Portfolio
              </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-link h5 mb-0 link">
                About
              </Link>
                    </li>
                </ul>
            </div>
        </nav>
)
}

export default Header;