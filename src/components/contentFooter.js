import React from 'react'
import { Link } from 'gatsby'

const ContentFooter = () => (

    <section className="portfolio-page content-footer">
        <div className="container">
            <div className="column is-three-fifths is-offset-one-fifth has-text-centered">
                <hr></hr>
                <Link to="/" className="is-inline-block">
                    Back to Home
                </Link>
            </div>
        </div>
    </section>
)

export default ContentFooter
