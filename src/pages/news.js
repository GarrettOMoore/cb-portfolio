import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'
import getLandingImg from '../hooks/get-landing'

const News = () => {
  return (
    <Layout>
      <SEO title="News" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: `95vw`,
        }}
      >
        <h1>BLOG SHIT HEREEEEEEE</h1>
      </div>
    </Layout>
  )
}

export default News
