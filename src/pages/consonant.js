import React from 'react'
import BookOne from '../components/bookone'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookNav from '../components/booknav'

const ConsonantBlends = () => {
  return (
    <Layout>
      <SEO title="ConsonantBlends" />
      <BookNav />
      <BookOne />
    </Layout>
  )
}

export default ConsonantBlends
