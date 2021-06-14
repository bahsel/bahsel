import * as React from 'react'

import Navbar from './navbar'
import Footer from './footer'

import "./page.css"
import '../components/typography.css'

const Page = ({ children }) => {
  return (
    <main>
      <title>BAHSEL</title>
      <Navbar></Navbar>
      <div class='wrapper'>
        <div class='content'>
          {children}
        </div>
        <div class='spacer'></div>
        <Footer></Footer>
      </div>
    </main>
  )
}

export default Page