import { CustomButton } from "../Button"
import style from './style.module.css'
import  GoogleImage from '../../asset/icons/google.svg'
import  Scan from '../../asset/icons/capture.svg'
import { LandingHeader } from "../Header/LandingHeader"
import { Footer } from "../Footer"
import {Testimony } from "../Testimonial"

export const AgentPage = () => {
    return (
        <div>
         <LandingHeader />
           <div className={style.image}>
              <div className={style.overlay}>
              <section className={style['section-container']}>
              <div className={style.create}>
                <h4>Create an Account</h4>
                <br />
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
                  <label> Full Name</label>
                  <br />
                  <input type="name"  required />
                  <br />
                  <br />
                  <label> Email Address </label>
                  <br />
                  <input type="email"  required/>
                  <br />
                  <br />
                  <label>  Password</label>
                  <br />
                  <input type="password"  required/>
                  <br />
                  <br />
                  <label> Confirm  Password</label>
                  <br />
                  <input type="password"  required/>
                  <br />
                  <br />
                  <label> Professional Association</label>
                  <br />
                  <input type="text" />
                  <br />
                  <br />
                </form>
                <br />
                </div> 
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <br />
              <div  className={style.scan}>
              <p>Kindly upload your NIN, Driver's License 
              <br />
              or Voters card</p>
              <br />
              <br />
              <img  src={Scan} />
              <br />
              <br />
              <h6>Upload ID</h6>
              </div>
          </section>
          <br />
          <br />
          <br />
          <div className={style.space}>
          <div>
            <input className={style.remember} type='checkbox'  />
            <label htmlFor='remember-me'><a className={style.alreadys} href="/terms">By selecting create personal account, you agree to our
            <span> User Agreement</span> <br /> and acknowledge reading our   <span> User Privacy Notice.</span>
             </a></label>
          </div>
           <br />

            <CustomButton className={style.rem} onClick={()=>{}} type='register'>
            Register
            </CustomButton>
           <br />
            <a className={style.already} href="/login">Already have an account? <span>Login</span> </a>
          </div>
              </div>
            </div>

          <Testimony />
          <Footer />
        </div>
    )
}