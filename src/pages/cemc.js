import React from 'react'
import opencs from '../images/cemc/opencs.jpg'
import Layout from '../components/layout'

const OCSPage = () => (
  <Layout>
    <section className="portfolio-page">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="subtitle is-small">Digital Media / Production Design</h1>
          <h2 className="title is-medium">Centre for Extended Learning</h2>
          <hr></hr>
          <h3 className="subtitle is-medium has-text-centered has-text-grey">April 2015</h3>
        </div>
      </div>
    </section>
    <section className="portfolio-page">
      <div className="container">
        <div className="column is-three-fifths is-offset-one-fifth">
          <p>I worked as the production assistant on a team of Math/Computer Science developers, specifically on the areas of illustrations, animations, and audio/video editing at the University of Waterloo's Centre for Extended Learning.</p>
        </div>
      </div>
    </section>
    <section className="portfolio-page">
      <div className="container">
        <div className="column is-three-fifths is-offset-one-fifth has-text-centered">
          <hr></hr>
          <h3 className="title is-small">OpenCS: Python from scratch</h3>
          <p><a href="https://open.cs.uwaterloo.ca/python-from-scratch/" target="_blank" rel="noopener noreferrer">View OpenCS</a></p>

        </div>
      </div>
    </section>
    <section className="portfolio-page">
      <div className="container">
        <div className="column">
          <img src={opencs} alt="OpenCS website" />
        </div>
      </div>
    </section>
    <section className="portfolio-page">
      <div className="container">
        <div className="column is-three-fifths is-offset-one-fifth">
          <p>Developed by the Centre for Extended Learning and The Centre for Education in Mathematics and Computing (CEMC), "Python from Scratch" is a free online courseware created to introduce high school students to the basic concepts of programming and computer science.</p>
          <ul>
            <li>Tools: Illustrator, Camtasia, Audition, LaTeX</li>
            <li>Created icons and illustrations for use in the videos and modules</li>
            <li>Edited audio and created video animations for use in the course</li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export default OCSPage
