import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

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
const bookNav = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: `space-between`,
        maxWidth: `90vw`,
      }}
    >
      <nav
        style={{
          margin: `0 auto`,
          marginTop: `1rem`,
        }}
      >
        <NavLink
          className="book-title"
          to="/spokane"
          activeClassName="current-page"
        >
          <p>Spokane</p> <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/taipei"
          activeClassName="current-page"
        >
          <p>Taipei</p> <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/consonant"
          activeClassName="current-page"
        >
          <p>Consonant Blends</p> <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/tvflowers"
          activeClassName="current-page"
        >
          <p>Television Flowers</p> <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/kite"
          activeClassName="current-page"
        >
          <p>Kite</p> <br />
        </NavLink>
        <NavLink
          className="book-title"
          to="/warp"
          activeClassName="current-page"
        >
          <p>Warp, Stay</p> <br />
        </NavLink>
      </nav>
    </div>
  )
}

export default bookNav
