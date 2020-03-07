import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'
import getLandingImg from '../hooks/get-landing'

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div
      // style={{
      //   display: 'flex',
      //   flexDirection: 'row',
      //   maxWidth: `95vw`,
      // }}
      >
        <h1>WEST COAST USA</h1>
        <h2>
          <strong>CB</strong>
        </h2>{' '}
        <br />
        <h3>
          <span>I’m your favorite neighbor.</span>
        </h3>{' '}
        <br />
        Inquiries and book/zine purchase: <br />
        <span>
          <strong>Christopherbrown.contact at g m a i l d o t c o m </strong>
        </span>
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
        Fiveninepres.blogspot.com A-chang.com <br />
        https://www.frijkecoumans.co.uk/
      </div>
    </Layout>
  )
}

export default About
