import style from './style.module.css'
import  {AccountOptions} from '../signup/AccountOptions'
import { LandingHeader } from "../Header/LandingHeader"
import { Footer } from '../Footer'
import { AboutPage } from "../About";
import { Testimony } from '../Testimonial'
import { AvailableProducts } from '../AvailableProducts';

export const SignUpPage = () => {
    return (
        <div>
         <LandingHeader />
          <section className={style['section-container']}>
              <br />
              <br />
              <div className={style['streams-container']}>
                <div className={style.header}>
                   <h2>Welcome to Soil Stream</h2>
                </div>
                  
                  <div className={style.more}>
                    <form>
                    <AccountOptions />
                 </form>
               </div>
              </div>

          </section>
          <AboutPage />
          <AvailableProducts />
          <Testimony />
          <Footer />
        </div>
    )
}