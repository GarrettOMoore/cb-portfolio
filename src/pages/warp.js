import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookNav from '../components/booknav'
import Warp from '../components/warp'

const WarpStay = () => {
  return (
    <Layout>
      <SEO title="WarpStay" />
      <BookNav />
      <Warp />
    </Layout>
  )
}

export default WarpStay
