import React from 'react'
import BookOne from '../components/bookone'
import BookTwo from '../components/booktwo'
import BookThree from '../components/bookthree'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Work = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: `300px`,
          marginBottom: `1.45rem`,
        }}
      >
        <p>Work</p>
        <BookOne />
        <BookTwo />
        <BookThree />
      </div>
    </Layout>
  )
}

export default Work
