import React from 'react'
import { Link } from 'gatsby'
// import icon from "../images/aw-favicon-icon.png"
import wong from "../images/icon_wong.svg"

const Header = ({ siteTitle }) => (
  <nav
    className="navbar"
    // className="navbar is-fixed-top is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        
        <Link to="/" className="navbar-item">
          {/* {siteTitle} */}
          <img src={wong} alt="Alcina Wong" className="nav-icon"></img>
        </Link>
      </div>
{/* 
      <div id="navbar-menu" className="navbar-menu is-static">
        <div className="navbar-end">
          <Link to="/design" className="navbar-item is-secondary">
            Design
          </Link>
        </div>
      </div> */}
    </div>
  </nav>
)

export default Header
