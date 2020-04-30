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
      <div className="">
        <Link to="/" className="" title="Alcina Wong - Home">
          {/* {siteTitle} */}
          <img src={wong} alt="Alcina Wong" className="nav-icon"></img>
        </Link>
      </div>
      {
        <div id="" className="">
          <div className="">
            <Link to="/design" className="">
              About
          </Link>
            <Link to="/design" className="">
              Contact
          </Link>
            <Link to="/design" className="">
              Blog
          </Link>
            <Link to="/design" className="">
              Lettering
          </Link>
          </div>
        </div>
      }
    </div>
  </nav>
)

export default Header
