import Script from 'next/script'
import Head from 'next/head'

import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <main>
      <Head>
        <title>BAHSEL</title>
        <meta property="og:title" content="BAHSEL" key="title" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        <link rel="preload" href="/fonts/GmarketSansTTF/gmarketsansttfmedium-webfont.woff2" as="font" type="font/woff2" crossorigin="anonymous" />

        <html lang='en'></html>
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