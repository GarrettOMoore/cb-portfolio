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
  text-decoration: none;

  &.current-book {
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
          activeClassName="current-book"
        >
          Lotus, Bauhinia <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/warp"
          activeClassName="current-book"
        >
          Warp, Stay <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/tvflowers"
          activeClassName="current-book"
        >
          Television Flowers <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/taipei"
          activeClassName="current-book"
        >
          Taipei <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/spokane"
          activeClassName="current-book"
        >
          Spokane I <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/spokanetwo"
          activeClassName="current-book"
        >
          Spokane II <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/kite"
          activeClassName="current-book"
        >
          Kite <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/consonant"
          activeClassName="current-book"
        >
          Consonant Blends <br />
        </NavLink>
      </nav>
    </div>
  )
}

export default bookNav
