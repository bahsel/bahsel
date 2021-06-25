import * as React from 'react'

import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <main>
      <title>BAHSEL</title>
      <Navbar></Navbar>
      <div className='wrapper'>
        <div className='content'>
          {children}
        </div>
        <div className='spacer'></div>
        <Footer></Footer>
      </div>
    </main>
  )
}

export default Layout