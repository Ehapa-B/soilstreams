import { CustomButton } from "../Button"
import style from './style.module.css'
import  GoogleImage from '../../asset/icons/google.svg'
import { Footer } from "../Footer"
import { Testimony } from "../Testimonial"
import { ProductHeader } from "../ProductHeader/ProductHeader"


export const LoginPage = () => {
    return (
        <div>
        <ProductHeader />
          <section className={style['section-container']}>
              <br />
              <br />
              <div className={style['streams-container']}>
                <div className={style.header}>
                   <h1>We missed you 
                   around here!</h1>
                </div>
                  
              </div>

              <div className={style.create}>
                 <h4>Welcome Back</h4>
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
                   <br />
                   <CustomButton className={style.mid} onClick={()=>{}} type='register'>
                      Login
                   </CustomButton>
                   <br />
                    <a className={style.already} href="/signup">Don't have an account? <span>Signup</span> </a>
                    
                </form>
               </div>
              </div>
          </section>
          <br />
          <Testimony />
           
          <Footer />
        </div>
    )
}