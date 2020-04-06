import React from 'react'
import Layout from '../components/layout'
import shoppers from '../images/imcba/shoppers.jpg'
import wellwise from '../images/imcba/wellwise.jpg'
import scotiabank from '../images/imcba/scotiabank.jpg'
import vo from '../images/imcba/vo.jpg'

const UCPage = () => (
  <Layout>
    {/* TODO: split page layouts into components */}
    <section className="portfolio-page">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="subtitle is-small">Front-End Web Development</h1>
          <h2 className="title is-medium">IMC Business Architecture</h2>
          <hr></hr>
          <h3 className="subtitle is-medium has-text-centered has-text-grey">March 2020</h3>
        </div>
      </div>
    </section>
    <section className="portfolio-page">
      <div className="container">
        <div className="column is-8 is-offset-2 has-text-centered">
          <p>I held the position of Front-End Developer at the IMC Business Architecture development agency from April 2019 to March 2020.</p>
        </div>
      </div>
    </section>
    <section className="portfolio-page has-text-centered">
      <div className="container">
        <div className="column is-three-fifths is-offset-one-fifth">
          <hr></hr>
          <h3 className="title is-small">IMC clients</h3>
          <p>Please note that the exact nature of the work is confidential; a list of clients shown on the IMC Business Architecture site are highlighted below. </p>
          <p><a href="https://www.imcba.com/clients" target="_blank" rel="noopener noreferrer">View IMC client list</a></p>
        </div>
        <div className="column is-8 is-offset-2">
          <div className="tile is-ancestor">
            <div className="tile">
              <img className="tile-image" src={wellwise} alt="Wellwise by Shoppers Drug Mart"></img>
            </div>
            <div className="tile">
              <img className="tile-image" src={shoppers} alt="Shoppers Drug Mart"></img>
            </div>
            <div className="tile">
              <img className="tile-image" src={scotiabank} alt="Scotiabank"></img>
            </div>
            <div className="tile">
              <img className="tile-image" src={vo} alt="Visit Orlando"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="portfolio-page">
      <div className="container">
        <div className="column is-three-fifths is-offset-one-fifth">
          <hr></hr>
          <h3 className="title is-small has-text-centered">User interface design &amp; development</h3>
          {/* <img src={orange} alt="orange fruit" className="icon-orange is-block"></img> */}
          <p>As a part of the Engineering team at IMC, I worked closely with product managers and designers to fulfill the front-end development needs for a variety of client projects. The key tools used were Adobe XD, Visual Studio, Git, BrowserStack, Azure DevOps, 7Pace Timetracker, CSS/LESS/BEM, Chrome Lighthouse, TalkBack, screen-readers, and Agility CMS.</p>
          <p>Through the use of browser comparison tools and manual front-end accessibility testing, I worked with the senior front-end developer to create new designs for games and campaigns, as well as resolving client requests. By reviewing Adobe XD prototypes created by the design team with tools like <a href="https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll?hl=en" target="_blank" rel="noopener noreferrer">Color Contrast Analyzer</a> and knowledge of WCAG principles, I gave feedback on new designs.</p>
          <p>From January to February 2020, I contributed to an internal research project to build a user interface component library in React using Storybook and styled-components. Because I had previously worked on projects at IMC using the <a href="https://akveo.github.io/nebular/" target="_blank" rel="noopener noreferrer">Nebular UI kit</a> with Angular, as well as <a href="https://akveo.github.io/nebular/" target="_blank" rel="noopener noreferrer">Material UI</a> in React, I recommended tools that could bridge the gap between the intensive custom CSS styling of some client projects and reusability.</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default UCPage
