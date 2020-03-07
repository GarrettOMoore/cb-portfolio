import React from 'react'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: `300px`,
          marginBottom: `1.45rem`,
        }}
      >
        <p>Home</p>
      </div>
    </Layout>
  )
}

export default IndexPage
