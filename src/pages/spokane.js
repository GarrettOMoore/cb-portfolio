import React from 'react'
import Spokane from '../components/spokane'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookNav from '../components/booknav'

const SpokanePage = () => {
  return (
    <Layout>
      <SEO title="Spokane" />
      <BookNav />
      <Spokane />
    </Layout>
  )
}

export default SpokanePage
