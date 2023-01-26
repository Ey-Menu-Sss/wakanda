import React from "react";
import logo from '../assets/Vector.png'
import Buttons from "./buttons";
function Header(props) {
    return <div>
        <header id="main-header">
      <div className="container">
        <nav className="main-nav">
          <div className="left">
            <img
              src={logo}
              alt="Logo"
              className="header-logo-image"
            />
            <span className="header-logo-name">Wakanda</span>
          </div>
          <div className="right">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us </a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">For freelancers</a></li>
                <Buttons/>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    </div>
}

export default Header;