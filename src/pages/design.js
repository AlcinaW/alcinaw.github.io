import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'

const DesignPage = () => (
  <Layout>
    <section className="hero is-primary header-hero ">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Design and Lettering</h1>
          <h2 className="subtitle">
            <nav className="breadcrumb is-small" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li className="is-active">
                  <Link to="/design">Design</Link>
                </li>
              </ul>
            </nav>
          </h2>
        </div>
      </div>
    </section>
  </Layout>
)

export default DesignPage
