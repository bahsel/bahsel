import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Page from "../components/page"

import * as style from "./index.module.css"

// markup
const IndexPage = () => {
  return (
    <Page>
      <div className={style.wrapper}>
        <div className={style.b1}>
          <StaticImage
            src='../images/bgs/2808142.jpg'
            alt=''
            layout='fullWidth'
            placeholder='blurred'
            quality={90}
            objectPosition='30% 30%'
            className={style.ggb}></StaticImage>
          <div className={style.dark}></div>
          <div className={`${style.intro} ${style.bannerContent}`}>
            <h1>
              Bay Area High School <br /> Esports League
            </h1>
            <div className={style.scrolling}>
              <p>placeholder for scrolling school logos</p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default IndexPage
