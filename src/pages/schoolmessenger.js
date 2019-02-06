import React from 'react'
import Layout from '../components/layout'

const SMPage = () => (
  <Layout>
    <section className="portfolio-page">
      <div className="hero-body"> 
        <div className="container has-text-centered">
          <h1 className="subtitle is-small">Responsive Web Design</h1>
          <h2 className="title is-medium">SchoolMessenger / TeleVox</h2>
          <hr></hr>
          <h3 className="subtitle is-medium has-text-centered has-text-grey">December 2017</h3>
        </div>
      </div>
    </section>
    <section className="portfolio-page">
      <div className="container">
        <div className="column is-three-fifths is-offset-one-fifth">
          <p>I was a contractor on the TeleVox CMS migration team between October 2017 and December 2017. The team was tasked with taking new templates and creating responsive designs that were similar to the client's old design.</p>
          <p>In addition to the TeleVox theming, I assisted with the QA checks with the SchoolMessenger sites, ensuring that design aspects that did not pass WCAG 2.0(AA) compliance were noted and corrected.</p>
          <p>The main tools used were HTML/CSS/SASS, JavaScript, jQuery, WCAG 2.0(AA), Teamwork, JIRA, Confluence, BrowserStack, HTTPS implementation, and SiteImprove.</p>
        </div>
      </div>
    </section>
    <section className="portfolio-page">
      <div className="container">
        <div className="column is-three-fifths is-offset-one-fifth has-text-centered">
          <hr></hr>
          <h3 className="title is-small">TeleVox CMS migration &amp; theming</h3>
          <p><a href="http://ksbeyedr.televox.west.com/
" target="_blank" rel="noopener noreferrer">Example A</a></p>
          <p><a href="http://sanantonioortho.televox.west.com/" target="_blank" rel="noopener noreferrer">Example B</a></p>
          <p><a href="http://kwongorthodontics.televox.west.com/" target="_blank" rel="noopener noreferrer">Example C</a></p>
        </div>
      </div>
    </section>
    <section className="portfolio-page">
      <div className="container">
        <div className="column is-three-fifths is-offset-one-fifth has-text-centered">
          <hr></hr>
          <h3 className="title is-small has-text-centered">SchoolMessenger QA</h3>
          <p className="has-text-centered"><a href="https://www.schoolmessenger.com/template-library/" target="_blank" rel="noopener noreferrer">View SchoolMessenger templates</a></p>
        </div>
      </div>
    </section>
  </Layout>
)

export default SMPage
