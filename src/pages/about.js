import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="about-body">
        <h1>WEST COAST USA</h1>
        <h2>
          <strong>CB</strong>
        </h2>{' '}
        <br />
        <h3>
          <span>I’m your favorite neighbor.</span>
        </h3>{' '}
        <br />
        Inquiries and book/zine purchase: <br /> <br />
        <h4>
          <span>
            <strong>Christopherbrown.contact at g m a i l d o t c o m </strong>
          </span>{' '}
        </h4>
        <br />
        <span>
          <h2>You can’t rush the sunset</h2>
        </span>
        <span>
          <h2> No limits, no control </h2>
        </span>{' '}
        <span>
          <h4>Being rigid is a bummer</h4>
        </span>
        <h1>Plz visit the homies: </h1>
        <br />
        <a href="Fiveninepres.blogspot.com">Fiveninepres.blogspot.com</a> <br />
        <a href="A-chang.com">A-chang.com</a> <br />
        <a href="https://www.frijkecoumans.co.uk/">www.frijkecoumans.co.uk</a>
      </div>
    </Layout>
  )
}

export default About
