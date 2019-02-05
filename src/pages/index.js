import React from 'react'
import { Link } from 'gatsby'
import star from '../images/personastar.svg'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section className="hero is-large is-primary section-one">
      <div className="hero-body">
        <div className="container has-text-centered">
          <img src={star} alt="star" className="icon-star" />
          <h1 className="title">Hi, I'm Alcina Wong.</h1>
          <p>I am a front-end developer, web designer, and letterer based in Toronto, Ontario.</p>
          <p>Have a project in mind? <a href="mailto:alcina.wong@gmail.com">Let's chat!</a></p>
            <hr></hr>
            <ul className="columns is-half is-centered">
              <li className="column is-narrow"><a href="https://github.com/alcinaw" target="_blank"  rel="noopener noreferrer">Github</a></li>
              <li className="column is-narrow"><a href="https://codepen.io/alcinaw" target="_blank" rel="noopener noreferrer">Codepen</a></li>
              <li className="column is-narrow"><a href="https://www.linkedin.com/in/alcinawong" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          </ul>
        </div>
      </div>
    </section>

    <section className="hero is-large section-upchain">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="subtitle is-small has-text-light">Web Development &amp; Wordpress</h2>
            <h3 className="title is-medium has-text-white">Upchain PLM Marketing</h3>
            <p><a href="https://www.upchain.com" target="_blank" rel="noopener noreferrer">View Upchain site</a></p>
            {/* <p>From May 2018-January 2019, I was part of the Demand Generation/Marketing team at Upchain. During that time, I managed the redesign of the site with the new brand guidelines, wrote and updated plugins to connect the site to Pardot/Salesforce. I wrote new templates and custom post types to extend the functionality of the Wordpress site.</p> */}
          </div>
        </div>
    </section>

    <section className="hero is-large section-televox">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="subtitle is-small has-text-light">Responsive Web Design &amp; QA</h2>
            <h3 className="title is-medium has-text-white">SchoolMessenger / TeleVox Theming</h3>
            <p><a href="https://www.schoolmessenger.com/template-library/" target="_blank" rel="noopener noreferrer">View SchoolMessenger templates</a></p>
            
            <ul className="columns is-half is-centered">
              <li className="column is-narrow"><a href="http://ksbeyedr.televox.west.com/
" target="_blank" rel="noopener noreferrer">Example A</a></li>
              <li className="column is-narrow"><a href="http://sanantonioortho.televox.west.com/" target="_blank" rel="noopener noreferrer">Example B</a></li>
              <li className="column is-narrow"><a href="http://kwongorthodontics.televox.west.com/" target="_blank" rel="noopener noreferrer">Example C</a></li>
          </ul>
          </div>
        </div>
    </section>

    <section className="hero is-large section-canadacomputers">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="subtitle is-small has-text-light">Web Design</h2>
            <h3 className="title is-medium has-text-white">Canada Computers Microsites &amp; Landing Pages</h3>
            <p><Link to="/canadacomputers">Canada Computers &amp; Electronics examples</Link></p>
          </div>
        </div>
    </section>



    <section className="hero is-small section-cemc">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="subtitle is-small has-text-light">Digital Media / Production Design</h2>
            <h3 className="title is-medium has-text-white">OpenCS: Python from scratch</h3>
            <p><a href="https://open.cs.uwaterloo.ca/python-from-scratch" target="_blank" rel="noopener noreferrer">View OpenCS</a></p>
          </div>
        </div>
    </section>

    <section className="hero is-small section-design">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="subtitle is-small has-text-light">Graphic Design</h2>
            <h3 className="title is-medium has-text-white">Design, Lettering &amp; Illustration</h3>
            <p><a href="https://www.behance.net/alcinaw" target="_blank" rel="noopener noreferrer">View Behance portfolio</a></p>
          </div>
        </div>
    </section>
    {/* <section className="hero is-small section-lettering">
      <a href="https://www.instagram.com/kaitou_al/" target="_blank">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h3 className="subtitle is-small">Illustration</h3>
            <h4 className="title is-medium">Lettering &amp; Illustration</h4>
            <p><a href="https://www.instagram.com/kaitou_al/" target="_blank">View lettering</a></p>
          </div>
        </div>
      </a>
    </section> */}
  </Layout>
)

export default IndexPage
