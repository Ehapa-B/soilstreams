import style from './style.module.css'
import { CustomButton } from "../Button"
import { Footer } from "../Footer"
import { AgentHeader } from "../AgentHeader/AgentHeader"

export const CustomerRequest = () => {
    return (
        <section>
            <AgentHeader />
            <div className={style.containers}>
              <h2>Customer Request</h2>
              <div className={style.container}>
               <div className={style.form} >
                <form className={style.farm}>
                    <input type="name" placeholder="Name of Product"  required />
                    <br />
                    <br />
                    <input type="quantity" placeholder="Quantity"  required/>
                    <br />
                    <br />
                    <input type="price" placeholder="Amount" required/>
                    <br />
                    <br />
                    <input type="state" placeholder="Location"  required/>
                    <br />
                    <br />
                    <input type="address" placeholder="Delivery Address"  required/>
                    <br />
                    <br />
                </form> 
            </div>
            <div className={style.photo}>
               <br />
              <CustomButton onClick={()=>{}} type='seconds'>
                Approve
             </CustomButton>
             <CustomButton onClick={()=>{}} type='second'>
              Decline
             </CustomButton>
            </div>
            </div>
            </div>
            <Footer />
        </section>
    )
}