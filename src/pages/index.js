import React from 'react'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import useLanding from '../hooks/use-landing'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const landing = useLanding()
  console.log('LANDING: ', landing)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="landing">
        <img src={landing.image.sharp.resize.src} />
      </div>
    </Layout>
  )
}

export default IndexPage
