import React from "react"
import style from "./style.module.css"
import { useNavigation } from '../../components/hooks/useNavigation';


export const  AboutPage = () => {
    const { navigate } = useNavigation ()
    return(
        <section className={style.section}>
          <div className={style.about}>
             <div>
               <h2>Who we are</h2>
              </div>
              <div className={style.our}>
                <h2>Our Mission</h2>
              </div>
              <div className={style.ours}>
                <h2>Our Vision</h2>
              </div>
          </div>
          <Missions />
        </section>
    )
}

export const Missions = () => {
    return (
     <div className={style.paragraph}>
              <div className={style.containers}>
                <p>Soil Stream is an online platform which connects
                  farmers with customers for their farm  produce. 
                 This platform is created to ease the stress on
                  farmers without physical shops for their produce
                 by bringing buyers straight to their farms 
                to get fresh farm produce based on their locations.
                </p>
              </div>
              <div className={style.containers}>
               <p> We are set out to connect farmers directly with buyers 
                 for their farm produce. This will ease the farmers 
                 the stress of transporting their
                 goods to the market and also ensuring timely sales.
                </p>
              </div>
              <div className={style.containers}>
              <p> Our vision is to be a world class online platform 
                  which connects  farmers directly with buyers with 
                  an effective delivery system in place regardless 
                 of their locations. 
             </p>
             <br />
             </div>
      </div>
    )
}