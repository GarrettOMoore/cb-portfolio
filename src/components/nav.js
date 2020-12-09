import React from 'react'
import styled from '@emotion/styled'
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

const Nav = () => (
  <div
    style={{
      // border: `2px solid black`,
      height: `3rem`,
      // marginBottom: `1.45rem`,
      margin: `2rem`,
      opacity: `0.9`,
    }}
  >
    <nav className="main-nav">
      <NavLink className="nav-item" to="/about" activeClassName="current-page">
        About
      </NavLink>
      <NavLink
        className="nav-item"
        to="/publications"
        activeClassName="current-page"
      >
        Publications
      </NavLink>{' '}
      <NavLink
        className="nav-item"
        href="cbphotodotnet.blogspot.com"
        activeClassName="current-page"
      >
        News
      </NavLink>{' '}
      <br />
    </nav>
  </div>
)

export default Nav
