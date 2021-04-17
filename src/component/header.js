import React from 'react';
import '../css/style.css';
const Header=()=>{
return(
        <nav className="navbar header fixed-top navbar-expand-lg  navbar-light">
            <a className="name-background" href="/">Amita</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/about">About</a>
                    </li>
                </ul>
            </div>
        </nav>
)
}

export default Header;