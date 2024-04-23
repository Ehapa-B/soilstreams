import { CustomButton } from "../Button"
import style from './style.module.css'
import  GoogleImage from '../../asset/icons/google.svg'
import { LandingHeader } from "../Header/LandingHeader"
import { Footer } from "../Footer"

export const ConsumerPage = () => {
    
    return (
        <div>
         <LandingHeader />
          <section className={style['section-container']}>
              <br />
              <br />
              <div className={style.create}>
                 <h4>Create an Account</h4>
                 <div className={style['button-group']}>
                 <CustomButton className={style.front} onClick={()=>{}} >
                   <img src={GoogleImage} />
                   <span>Sign in with Google</span>
                  </CustomButton>
                  <br/>
                  <div className={style.divider}>
                     <span>or</span>
                  </div>
                  <br />
                 <form className={style.part}>
                    <label> Email</label>
                    <br />
                    <input type="email"  />
                    <br />
                    <br />
                   <label> Password </label>
                   <br />
                   <input type="Password" />
                   <br />
                   <br />
                   <label> Confirm Password</label>
                   <br />
                   <input type="password" />
                   <br />
                   <br />
                   <div>
                      <input id='remember-me' type='checkbox'  />
                      <label htmlFor='remember-me'><a className={style.alreadys} href="/terms">By selecting create personal account, <br /> you agree to our
                      <span> User Agreement</span> and  <br /> acknowledge reading our   <span> User Privacy Notice.</span>
                       </a></label>
                    </div>
                    <br />
                    <br />
                   <CustomButton className={style.register} onClick={()=>{}} type='register'>
                      Register
                   </CustomButton>
                   <br />
                    <a className={style.already} href="/login">Already have an account? <span>Login</span> </a>
                </form>
               </div>
              </div>

          </section>
          <Footer />
        </div>
    )
}