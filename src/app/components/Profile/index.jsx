import { CustomButton } from "../Button"
import style from './style.module.css';
import Victor from '../../asset/images/ahmed.svg'
import { Upload } from './data'
import { Footer } from "../Footer";
import { ProductHeader } from "../ProductHeader/ProductHeader";

export const ProfilePage = () => {
    return (
        <section>
         <ProductHeader />
           <div className={style.profile}>
             <h2>Farmer's Profile</h2>
              <div className={style.container}>
                    <div className={style.form} >
                        <form className={style.farm}>
                            <label> Full Name</label>
                            <br />
                            <input type="name"  required />
                            <br />
                            <br />
                            <label> Phone Number </label>
                            <br />
                            <input type="number"  required/>
                            <br />
                            <br />
                            <label>  Address</label>
                            <br />
                            <input type="address"  required/>
                            <br />
                            <br />
                            <label>  Farm Location</label>
                            <br />
                            <input type="address"  required/>
                            <br />
                            <br />
                            <label> Association</label>
                            <br />
                            <input type="name"  required/>
                            <br />
                            <br />
                        </form> 
                    </div>
                    <div className={style.victor}>
                     <img src={Victor} />
                       <h6>Ahmed Mustapha</h6>
                       <p>Kano State</p> 
                       <br />
                      <CustomButton onClick={()=>{}} type='register'>
                       Chat with Admin
                     </CustomButton>
                    </div>
              </div>
              <br />
              <br/>
              <h2>Recent Uploads</h2>
              <br />
              <div className={style.recent}>
                  {Upload.map((item) => (
                    <div>
                    <img className={style.recents} src={item.image} />
                    </div>
                  ))}
              </div>
              <br/>
              <br />
              <a href='/product'>
              <CustomButton  className='register' onClick={()=> ('signup')} type='read'>
                 View All
              </CustomButton>
             </a>
           </div>
           <br />
           <Footer />
        </section>
    )
}