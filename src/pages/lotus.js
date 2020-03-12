import React from 'react'
import Lotus from '../components/lotus'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookNav from '../components/booknav'

const KitePage = () => {
  return (
    <Layout>
      <SEO title="Kite" />
      <BookNav />
      <Lotus />
    </Layout>
  )
}

export default KitePage
