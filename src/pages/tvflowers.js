import React from 'react'
import BookOne from '../components/bookone'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookNav from '../components/booknav'

const TvFlowers = () => {
  return (
    <Layout>
      <SEO title="TvFlowers" />
      <BookNav />
      <BookOne />
    </Layout>
  )
}

export default TvFlowers
