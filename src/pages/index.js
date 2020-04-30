import React from 'react'
import { Link } from 'gatsby'
import star from '../images/personastar.svg'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section className="hero is-medium section-one">
      <div className="hero-body">
        <div className="container">
          <img src={star} alt="star" className="icon-star" />
          <h1 className="title">Hi, I'm Alcina Wong. ✨</h1>
          <p>I am a front-end developer, web designer, and letterer based in Toronto, Ontario.</p>
          <p>Have a project in mind? <a href="mailto:alcina.wong@gmail.com">Let's chat!</a></p>
          <hr></hr>
          <ul className="columns">
            <li className="column is-narrow"><a href="https://github.com/alcinaw" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li className="column is-narrow"><a href="https://codepen.io/alcinaw" target="_blank" rel="noopener noreferrer">Codepen</a></li>
            <li className="column is-narrow"><a href="https://www.linkedin.com/in/alcinawong" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          </ul>
        </div>
      </div>
    </section>

    {/* <section className="hero is-large section-imcba">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="subtitle is-small has-text-light">Front-End Web Development</h2>
          <h3 className="title is-medium has-text-white">IMC Business Architecture</h3>
          <p><Link to="/imcba">View IMC</Link></p>
        </div>
      </div>
    </section>

    <section className="hero is-large section-upchain">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="subtitle is-small has-text-light">Web Development</h2>
          <h3 className="title is-medium has-text-white">Upchain PLM</h3>
          <p><Link to="/upchain">View Upchain</Link></p>
        </div>
      </div>
    </section>

    <section className="hero is-small section-televox">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="subtitle is-small has-text-light">Web Design</h2>
          <h3 className="title is-medium has-text-white">SchoolMessenger / TeleVox</h3>
          <p><Link to="/schoolmessenger">View SchoolMessenger</Link></p>
        </div>
      </div>
    </section>

    <section className="hero is-small section-canadacomputers">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="subtitle is-small has-text-light">Web Design</h2>
          <h3 className="title is-medium has-text-white">Canada Computers &amp; Electronics</h3>
          <p><Link to="/canadacomputers">View Canada Computers &amp; Electronics</Link></p>
        </div>
      </div>
    </section>

    <section className="hero is-small section-cemc">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="subtitle is-small has-text-light">Digital Media / Production Design</h2>
          <h3 className="title is-medium has-text-white">Centre for Extended Learning</h3>
          <p><Link to="/cemc">View Centre for Extended Learning</Link></p>
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
    </section> */}

  </Layout>
)

export default IndexPage
