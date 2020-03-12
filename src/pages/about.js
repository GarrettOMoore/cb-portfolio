import React from 'react'
import Layout from '../components/layout'
import AboutContent from '../components/about'
import SEO from '../components/seo'

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <AboutContent />
    </Layout>
  )
}

export default About
