import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#FFBB96`,
      marginBottom: `1.45rem`,
      marginTop: `0.3rem`,
      opacity: `0.9`,
      height: `100%`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: `1rem`,
          }}
        >
          {siteTitle}
        </Link>{' '}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
