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
            src='../images/bgs/dayggb.jpg'
            alt=''
            layout='fullWidth'
            placeholder='blurred'
            quality={90}
            objectPosition='30% 10%'
            id='dayggb'></StaticImage>
          <StaticImage
            src='../images/bgs/nightggb.png'
            alt=''
            layout='fullWidth'
            placeholder='blurred'
            quality={90}
            objectPosition='60% 10%'
            id='nightggb'></StaticImage>
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

        <div className={style.b2}>
          <div className={style.bannerContent}>
            <p>
              placeholder
            </p>
          </div>
        </div>

        <div className={style.b3}>
          <div className={style.bannerContent}>
            <p>
              placeholder
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default IndexPage
