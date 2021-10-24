import Layout from "../components/layout"

import * as style from "./index.module.css"

import SwitchingGGB from '../components/elements/switchingggb'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className={style.wrapper}>

        <div className={style.b1}>
          <SwitchingGGB></SwitchingGGB>
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
    </Layout>
  )
}

export default IndexPage
