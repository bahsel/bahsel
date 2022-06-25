import SwitchingGGB from '../components/elements/index/switchingggb'
import Layout from "../components/layout"
import * as style from "./index.module.css"



// markup
const AboutPage = () => {
  return (
    <Layout>
      <div className={style.indexWrapper}>

        <div className={style.b1}>
          <div className={style.blackPlace}></div>
          <SwitchingGGB></SwitchingGGB>
          <div className={style.dark}></div>
          <div className={`${style.intro} ${style.bannerContent}`}>
            <h2>
              About
            </h2>
          </div>
        </div>

        <div className={style.b2}>
          <div className={style.bannerContent}>
            <div className={style.nosplit}>
              <p>
                The Bay Area High School eSports League (BAHSEL) is made up of a coalition of Bay Area high schoolers seeking to 
                cultivate a competitive eSports environment for local high school students.
              </p>
              <p>
                We host tournaments featuring all major eSport games, including League of Legends, VALORANT, Overwatch, CS:GO, and Minecraft.
              </p>
              <p>
                For the past 2 years, we have offered the competitive eSports experience to over 600 students from over 30 different 
                high schools, starting in October 2020. Since then, we have hosted 7 phases of events, with over 20 separate tournaments, 
                and created and hosted a Minecraft server featuring Bedwars, UHC, Skywars, and a SMP world. We have streamed nearly all 
                competitive elimination matches on our Twitch channel for hundreds of unique viewers, hosted viewer games in both ARAM 
                and Tetris, and even coordinated a Twitch Rivals-style draft for a League of Legends and VALORANT tournament. In the past, 
                we have also collaborated a local eSports club from Milpitas High School to run tournaments.
              </p>
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

export default AboutPage
