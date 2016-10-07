import React from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'

const Nav = () => (
  <div>
    <IndexLink to="/">
      Home
    </IndexLink>
    <Link to="/posts"> Example Feed
    </Link>
    <a href="https://github.com/jaredpalmer/react-production-starter" target="_blank">GitHub</a>
    <a href="https://twitter.com/jaredpalmer" target="_blank">Twitter</a>
  </div>
)

export default Nav
