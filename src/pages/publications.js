import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookNav from '../components/booknav'
import { Link } from 'gatsby'

const NavLink = styled(Link)`
  margin: 0 auto;
  color: #26180c;
  height: 100%;
  font-weight: bolder;
  font-size: 1rem;
  line-height: 1.2;
  letter-spacing: 4px;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  ${'' /* font-family: 'Open Sans Condensed', sans-serif; */}

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin: 0;
  }
`
const Publications = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <BookNav />
    </Layout>
  )
}

export default Publications
