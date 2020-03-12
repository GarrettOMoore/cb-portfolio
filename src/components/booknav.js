import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const NavLink = styled(Link)`
  color: #26180c;
  height: 100%;
  font-weight: bolder;
  font-size: 1.2rem;
  letter-spacing: 4px;
  margin: 2 0.5rem 0 0;
  ${'' /* padding: 0.25rem; */}
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin: 0;
  }

  a {
    font-size: 3rem;
  }
`
const bookNav = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: `space-between`,
        maxWidth: `100vw`,
      }}
    >
      <nav
        className="book-nav"
        style={{
          margin: `0 auto`,
          marginTop: `1rem`,
        }}
      >
        <NavLink
          className="book-title"
          to="/lotus"
          activeClassName="current-page"
        >
          Lotus, Bauhinia <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/warp"
          activeClassName="current-page"
        >
          Warp, Stay <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/tvflowers"
          activeClassName="current-page"
        >
          Television Flowers <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/taipei"
          activeClassName="current-page"
        >
          Taipei <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/spokane"
          activeClassName="current-page"
        >
          Spokane I <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/spokanetwo"
          activeClassName="current-page"
        >
          Spokane II <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/kite"
          activeClassName="current-page"
        >
          Kite <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/consonant"
          activeClassName="current-page"
        >
          Consonant Blends <br />
        </NavLink>
      </nav>
    </div>
  )
}

export default bookNav
