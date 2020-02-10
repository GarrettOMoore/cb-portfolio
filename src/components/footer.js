import React from 'react'

const Footer = ({ siteTitle }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
      bottom: `0`,
    }}
  >
    <footer>
      <a className="contact-link" href="mailto:oppositepopularity@gmail.com">
        Contact
      </a>{' '}
      <br />
      <a
        style={{ color: 'black', textDecoration: 'none', fontSize: '8px' }}
        href="https://www.garrettomoore.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made By Garrett Moore 2019
      </a>{' '}
    </footer>
  </div>
)

export default Footer
