import React from 'react'
import BookOne from '../components/bookone'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookNav from '../components/booknav'

const WarpStay = () => {
  return (
    <Layout>
      <SEO title="WarpStay" />
      <BookNav />
      <BookOne />
    </Layout>
  )
}

export default WarpStay
