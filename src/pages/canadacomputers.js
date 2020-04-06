import React from 'react'
import cougar from '../images/canadacomputers/cougar.jpg'
import lg from '../images/canadacomputers/lg.jpg'
import summeraudio from '../images/canadacomputers/summer_audio.jpg'

import Layout from '../components/layout'

const CCPage = () => (
  <Layout>
    <section className="portfolio-page">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="subtitle is-small">Web Design</h1>
          <h2 className="title is-medium">Canada Computers &amp; Electronics</h2>
          <hr></hr>
          <h3 className="subtitle is-medium has-text-centered has-text-grey">October 2017</h3>
        </div>
      </div>
    </section>
    <section className="portfolio-page">
      <div className="container">
        <div className="column is-three-fifths is-offset-one-fifth">
          <p>I was part of the Marketing team at Canada Computers &amp; Electronics from February 2016 to October 2017. My main responsibilities involved organizing and executing on branded landing pages and microsites that were booked by vendors, as well as supporting the team's graphic design needs. I worked closely with a French translator to ensure that designs created for promotions were effective in English and French. The pages were built for the Canada Computers live site using a combination of Adobe Creative Suite, HTML, CSS, PHP, JS, jQuery, and SQL queries.</p>

          <p>I also designed and set up the weekly HTML email blasts, and worked with the Product team to execute on new product launches and determine the effectiveness of front page promotions.</p>
        </div>
      </div>
    </section>
    <section className="portfolio-page">
      <div className="container has-text-centered">
        <div className="column">
          <hr></hr>
          <h3 className="title is-small">Summer Audio promotion landing page</h3>
          <img src={summeraudio} alt="Summer Audio promotion landing page example" />
          <hr></hr>
          <h3 className="title is-small">LG promotion landing page</h3>
          <img src={lg} alt="LG Electronics promotion landing page example" />
          <hr></hr>
          <h3 className="title is-small">Cougar microsite</h3>
          <a href="https://www.canadacomputers.com/cougar" target="_blank" rel="noopener noreferrer">View Cougar microsite</a>
          <img src={cougar} alt="Cougar microsite example" />
        </div>
      </div>
    </section>
  </Layout>
)

export default CCPage
