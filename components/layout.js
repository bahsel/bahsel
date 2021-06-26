import * as React from 'react'
import Script from 'next/script'
import Head from 'next/head'

import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script type='module'>{
        function fadeIn() {
          this.style.transition= 'opacity 1s';
          this.style.opacity = '1';
        }
      }</Script>
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