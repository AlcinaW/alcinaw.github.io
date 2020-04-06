import React from 'react'
import { Link } from 'gatsby'
import wong from "../images/icon_wong.svg"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="has-text-centered has-text-white">
        <Link to="/" className="navbar-item is-inline-block" title="Alcina Wong - Home">
          <img src={wong} alt="Alcina Wong" className="nav-icon"></img>
        </Link>
        <p>Made with ❤ using Bulma and Gatsby</p>
      </div>
    </div>
  </footer>
)

export default Footer
