import React from "react"
import MaleImage from "../../asset/images/man.svg"
import Male from "../../asset/images/male.svg"
import Female from "../../asset/images/female.svg"
import style from "./style.module.css"

export const Testimony = () => {
    return (
        <section className={style.section}>
         <h2>Testimonials</h2>
         <div className={style.testimony}>
             <div>
               <img src={Male} />
               <br />
               <br />
                 <p>Best website I have visited so far; Fresh products 
                 with excellent customer service.</p>
              </div>
               <div>
                 <img src={Female} />
                 <br />
                 <br />
                   <p>I am going to rate this website a 5, they are just perfect 
                  for fresh foods and timely delivery.</p>
              </div>
              <div>
                 <img src={MaleImage} />
                  <br />
                  <br />
                  <p>This website has been helping me sell my produce easily.</p>
                </div>
              
         </div>
        </section>
    )
}