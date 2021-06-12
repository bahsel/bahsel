import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ children }) => {
  return (
    <main>
      <title>BAHSEL</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      {children}
    </main>
  )
}

export default Layout