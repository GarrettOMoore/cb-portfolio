/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import Header from './header'
import Helmet from 'react-helmet'
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(data)
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            text-align: center;
            overflow-y: scroll;
            overflow-x: hidden;
            font-family: 'Roboto Mono', monospace;
            scroll-behavior: smooth;
          }
          * + * {
            margin-top: 1rem;
          }
          html,
          body {
            background-repeat: no-repeat;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            height: 100%;
            width: 100vw;
            overflow: visible;
            margin: 0;
            margin-top: 0.2rem;
            color: #555;
            font-size: 14px;
            line-height: 1.4;
            > div {
              margin-top: 0;
            }
            * a {
              decoration: none;
              color: black;
            }
          }
          footer {
            border: 2px solid black;
            margin-top: 25em;
          }

          footer * {
            margin-top: 2rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <link
          href="https://fonts.googleapis.com/css?family=Muli|Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <a href="mailto:oppositepopularity@gmail.com">Contact</a> <br />
          Made By{' '}
          <a
            style={{ color: 'black', textDecoration: 'none' }}
            href="https://www.garrettomoore.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Garrett Moore
          </a>{' '}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
