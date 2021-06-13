import * as React from 'react'
import Navbar from './navbar'

const Layout = ({ children }) => {
  return (
    <main>
      <title>BAHSEL</title>
      <Navbar></Navbar>
      {children}
    </main>
  )
}

export default Layout