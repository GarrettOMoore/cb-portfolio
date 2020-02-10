import React from 'react'
import BookOne from '../components/bookone'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookNav from '../components/booknav'

const Spokane = () => {
  return (
    <Layout>
      <SEO title="Spokane" />
      <BookNav />
      <BookOne />
    </Layout>
  )
}

export default Spokane
