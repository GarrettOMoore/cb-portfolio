import React from 'react'
import Taipei from '../components/taipei'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { css } from '@emotion/core'
import BookNav from '../components/booknav'

const TaipeiPage = () => {
  return (
    <Layout>
      <SEO title="Taipei" />
      <BookNav />
      <div
        className="taipei-box"
        css={css`
          display: flex;
          flex-direction: row;
        `}
      >
        <Taipei />
      </div>
    </Layout>
  )
}

export default TaipeiPage
