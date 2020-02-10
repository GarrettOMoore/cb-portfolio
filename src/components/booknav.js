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
        <NavLink to="/spokane" activeClassName="current-page">
          Spokane <br />
        </NavLink>
        <NavLink to="/taipei" activeClassName="current-page">
          Taipei <br />
        </NavLink>
        <NavLink to="/consonant" activeClassName="current-page">
          Consonant Blends <br />
        </NavLink>
        <NavLink to="/tvflowers" activeClassName="current-page">
          Television Flowers <br />
        </NavLink>
        <NavLink to="/kite" activeClassName="current-page">
          Kite <br />
        </NavLink>
        <NavLink to="/warp" activeClassName="current-page">
          Warp, Stay <br />
        </NavLink>
      </nav>
    </div>
  )
}

export default bookNav
