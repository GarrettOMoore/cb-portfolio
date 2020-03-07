import React from 'react'
import Kite from '../components/kite'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookNav from '../components/booknav'

const KitePage = () => {
  return (
    <Layout>
      <SEO title="Kite" />
      <BookNav />
      <Kite />
    </Layout>
  )
}

export default KitePage
