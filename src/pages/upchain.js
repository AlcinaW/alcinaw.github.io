import React from 'react'
import macbook from '../images/upchain/upchain-macbook.jpg'
import Layout from '../components/layout'

const UCPage = () => (
  <Layout>
    <section className="portfolio-page">
      <div className="hero-body"> 
        <div className="container has-text-centered">
          <h1 className="subtitle is-small">Web Development</h1>
          <h2 className="title is-medium">Upchain PLM</h2>
          <hr></hr>
          <h3 className="subtitle is-medium has-text-centered has-text-grey">January 2019</h3>
        </div>
      </div>
    </section>
    <section className="portfolio-page has-text-centered">
      <div className="container">
        <div className="column is-three-fifths is-offset-one-fifth">
          <p>I held the position of Marketing Web Developer at the SaaS startup Upchain from May 2018 to January 2019.</p>
          <hr></hr>
          <h3 className="title is-small">Upchain site rebrand</h3>
          <p>Please note that this site uses JavaScript analytics tracking, chat, and exit intent modals.</p>
        </div>
        <div className="column">
          <p><a href="https://www.upchain.com" target="_blank" rel="noopener noreferrer">View Upchain site</a></p>
          <img src={macbook} alt="Upchain website" />
        </div>
      </div>
    </section>
    <section className="portfolio-page">
      <div className="container">
        <div className="column is-three-fifths is-offset-one-fifth">
          <p>As part of the Demand Generation team at Upchain, I worked closely with the graphic designer to bring the brand vision to life on the Upchain marketing site. The key tools we used were Zeplin, Pardot/Salesforce, Wordpress, JavaScript, Google ReCaptcha, PHP, and HotJar. I updated the initial theme to have a more flexible design using a child theme, separated the functionality with a site-specific plugin, and ensured that the analytics tracking needed by the Marketing team were working properly.</p>
          <p>In January 2019, I helped set up the Google Tag Manager with Google Optimize to act on the HotJar data we had been collecting to do A/B testing and create more informative and effective landing pages.</p>
          <p>Other projects I worked at the Upchain include assisting with the design of the elearning and Zendesk customer success portals, custom Wordpress post type creation, HTTPS implementation, assessing changes based on Moz reports, hosting migration, website performance analysis, and building Unbounce pages.</p>
        </div>
      </div>
    </section>    
    <section className="portfolio-page">
      <div className="container">
        <div className="column is-three-fifths is-offset-one-fifth">
          <hr></hr>
          <h3 className="title is-small has-text-centered">Upchain Resource Library</h3>
          {/* <p>I worked on combining the Resource Library pages and blog posts into a comprehensive information area on product lifecycle management(PLM) software and hardware manufacturing. I created custom Wordpress post types and taxonomies so blog posts and pages could co-exist, modifying the custom templates based on the Avada theme.</p> */}
          <p>The Resource Library contains several different styles of articles, including ebooks, information graphics, webinars, and case studies. Some of the resources are sent as PDF download links in Pardot email templates, and I assisted in the styling.</p>
          <p>I worked to strip the inline CSS and form handlers from the original pages, and set up progressive forms, Contact Form 7 plugin, 3rd-Party Integration plugin, Google ReCaptcha, and Gmail SMTP to send the data into Pardot.</p> 
          <p className="has-text-centered"><a href="https://www.upchain.com/resources/" target="_blank" rel="noopener noreferrer">View Upchain Resource Library</a></p>
          <p className="has-text-centered"><a href="https://www.upchain.com/blog/" target="_blank" rel="noopener noreferrer">View Upchain blog</a></p>
          <p className="has-text-centered"><a href="https://upchain.com/resources/cloud-vs-on-premise-plm/" target="_blank" rel="noopener noreferrer">View Upchain infographic</a></p>
          <p className="has-text-centered"><a href="https://upchain.com/resources/case-studies/green-machine/" target="_blank" rel="noopener noreferrer">View Upchain case study</a></p>
          {/* <p className="has-text-centered"><a href="https://upchain.com/resources/case-studies/ceramaspeed/" target="_blank" rel="noopener noreferrer">View Upchain case study</a></p> */}
        </div>
      </div>
    </section>    
  </Layout>
)

export default UCPage
