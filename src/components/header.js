import React from 'react'
import { Link } from 'gatsby'
// import icon from "../images/aw-favicon-icon.png"
import wong from "../images/icon_wong-blue.svg"

const Header = ({ siteTitle }) => (
  <nav
    className="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Alcina Wong - Home">
          {/* {siteTitle} */}
          <img src={wong} alt="Alcina Wong" className="nav-icon"></img>
        </Link>
      </div>
      {
        <div id="navbar-menu" className="navbar-menu is-static">
          <div className="navbar-end">
            <Link to="/design" className="navbar-item is-secondary">
              About
          </Link>
            <Link to="/design" className="navbar-item is-secondary">
              Contact
          </Link>
            <Link to="/design" className="navbar-item is-secondary">
              Blog
          </Link>
            <Link to="/design" className="navbar-item is-secondary">
              Lettering
          </Link>
          </div>
        </div>
      }
    </div>
  </nav>
)

export default Header
