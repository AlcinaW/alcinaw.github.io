import React from 'react'
import { Link } from 'gatsby'
import cougar from '../images/canadacomputers/cougar.jpg'
import lg from '../images/canadacomputers/lg.jpg'
import summeraudio from '../images/canadacomputers/summer_audio.jpg'

import Layout from '../components/layout'

const DesignPage = () => (
  <Layout>
    <section className="hero is-primary example-page">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="subtitle is-small has-text-light">Web Design</h1>
          <h2 className="title is-medium has-text-white">Canada Computers Microsites &amp; Landing Pages</h2>
          <hr></hr>
        </div>
      </div>
    </section>
    <section className="hero is-primary example-page">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h3 className="title is-small has-text-white">Summer Audio promotion landing page</h3>
          <img src={summeraudio} alt="Summer Audio promotion landing page example" />
          
          <h3 className="title is-small has-text-white">LG promotion landing page</h3>
          <img src={lg} alt="LG Electronics promotion landing page example" />
          
          <h3 className="title is-small has-text-white">Cougar microsite</h3>
          <img src={cougar} alt="Cougar microsite example" />
          <p><Link to="/">Home</Link></p>
        </div>
      </div>
    </section>
  </Layout>
)

export default DesignPage
