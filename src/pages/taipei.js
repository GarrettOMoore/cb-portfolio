import React from 'react'
import BookOne from '../components/bookone'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookNav from '../components/booknav'

const Taipei = () => {
  return (
    <Layout>
      <SEO title="Taipei" />
      <BookNav />
      <BookOne />
    </Layout>
  )
}

export default Taipei
