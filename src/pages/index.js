import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import TvFlowers from '../components/TvFlowers'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Christopher Brown</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <TvFlowers />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
