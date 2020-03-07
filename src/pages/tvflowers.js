import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookNav from '../components/booknav'
import Flowers from '../components/flowers'

const TvFlowers = () => {
  return (
    <Layout>
      <SEO title="TvFlowers" />
      <BookNav />
      <Flowers />
    </Layout>
  )
}

export default TvFlowers
