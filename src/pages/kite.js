import React from 'react'
import BookOne from '../components/bookone'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookNav from '../components/booknav'

const Kite = () => {
  return (
    <Layout>
      <SEO title="Kite" />
      <BookNav />
      <BookOne />
    </Layout>
  )
}

export default Kite
