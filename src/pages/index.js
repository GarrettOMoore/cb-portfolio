import React from 'react'
import { Link } from 'gatsby'
import BookOne from '../components/bookone'
import BookTwo from '../components/booktwo'
import BookThree from '../components/bookthree'
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
        <BookOne />
        <BookTwo />
        <BookThree />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
