import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
  <header
    style={{
      margin: `1.45rem 0`,
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
        <Link to="/">{siteTitle}</Link>
      </h1>
      <p style={{ margin: `1rem 0 0 0` }}>{siteDescription}</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
