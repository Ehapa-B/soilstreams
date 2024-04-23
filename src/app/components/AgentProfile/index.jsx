import { CustomButton } from "../Button"
import style from './style.module.css';
import Victor from '../../asset/icons/agentpic.svg'
import { Footer } from "../Footer";
import { OrderHeader } from "../OrderHeader/OrderHeader";

export const AgentProfilePage = () => {
    return (
        <section>
        <OrderHeader />
           <div className={style.profile}>
             <h2>Agent's Profile</h2>
              <div className={style.container}>
                    <div className={style.form} >
                        <form className={style.farm}>
                            <label> Full Name</label>
                            <br />
                            <input type="name"  required />
                            <br />
                            <br />
                            <label> Email</label>
                            <br />
                            <input type="email"  required/>
                            <br />
                            <br />
                            <label> House Address</label>
                            <br />
                            <input type="address"  required/>
                            <br />
                            <br />
                            <label>  Location</label>
                            <br />
                            <input type="address"  required/>
                            <br />
                            <br />
                            <label> Association</label>
                            <br />
                            <input type="name"  required/>
                            <br />
                            <br />
                            <label> Phone Number </label>
                            <br />
                            <input type="number"  required/>
                            <br />
                        </form> 
                    </div>
                    <div className={style.victor}>
                     <img src={Victor} />
                      <h6>Ahmed Mustapha</h6> 
                      <br />
                    </div>
              </div>
              <br />
              <br />
              <div className={style.reg}>
               <h4>Registered Farms
                 <a href='/request'>
                 <CustomButton  className='request' onClick={()=> ('signup')} type='request'>
                   New Request
                 </CustomButton>
                 </a>
               </h4>
               <br />
                <div className={style.other}>
                 <ul>
                   <li><a href="/profile">Badejo and son's Rice Farm, Lagos Island, Lagos State</a></li>
                   <li><a href="/profile">Larry Farms, Agege, Lagos State</a></li>
                   <li><a href="/profile">Ibukun Farms and Agro Services,  Mushin, Lagos State</a></li>
                   <li><a href="/profile">Adebanjo's Farm, Ikeja, Lagos State </a></li>
                 </ul>
                </div>
                <br />
                <div className={style.edit}>
                  <a href="">Edit</a>
                  <a href="">Delete Profile</a>
                </div>
              </div>
              <br />
              <br />
              <a href='/farms'>
               <CustomButton  className='register' onClick={()=> ('')} type='read'>
                 Add Farm
               </CustomButton>
             </a>
           </div>
           <br />
           <Footer />
        </section>
    )
}