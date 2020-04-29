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
    <div className="">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Alcina Wong - Home">
          {/* {siteTitle} */}
          <img src={wong} alt="Alcina Wong" className="nav-icon"></img>
        </Link>

        {/* TODO Switch to component + add JS toggle to open  */}
        <a href="#" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      {
        <div id="navbar-menu" className="navbar-menu is-static">
          <div className="navbar-end">
            <div class="navbar-item">
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
        </div>
      }
    </div>
  </nav>
)

export default Header
