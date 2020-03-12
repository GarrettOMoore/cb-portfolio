import React from 'react'
import SpokaneTwo from '../components/spokanetwo'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookNav from '../components/booknav'

const SpokaneTwoPage = () => {
  return (
    <Layout>
      <SEO title="Spokane" />
      <BookNav />
      <SpokaneTwo />
    </Layout>
  )
}

export default SpokaneTwoPage
