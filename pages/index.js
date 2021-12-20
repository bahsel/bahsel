import SwitchingGGB from '../components/elements/index/switchingggb'
import Layout from "../components/layout"
import * as style from "./index.module.css"



// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className={style.indexWrapper}>

        <div className={style.b1}>
          <div className={style.blackPlace}></div>
          <SwitchingGGB></SwitchingGGB>
          <div className={style.dark}></div>
          <div className={`${style.intro} ${style.bannerContent}`}>
            <h1>
              Bay Area High School <br /> Esports League
            </h1>
            <div className={style.scrolling}>
                <p>
                  Coming soon...
                </p>
            </div>
          </div>
        </div>

        <div className={style.b2}>
          <div className={style.bannerContent}>
            <div className={style.split}>
              <p>
                Tournaments for high schoolers, by high schoolers.
              </p>
              <div className={style.comingsoon}>
                <p>
                  Coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.b3}>
          <div className={style.bannerContent}>
            <div className={style.split}>
              <p>
                A community: more than just competition.
              </p>
              <div className={style.comingsoon}>
                <p>
                  Coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
