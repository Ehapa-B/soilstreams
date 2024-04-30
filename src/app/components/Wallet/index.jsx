import { OrderHeader } from "../OrderHeader/OrderHeader"
import Card from "../../asset/images/master.svg"
import Money from "../../asset/images/money.svg"
import style from "./style.module.css"

export const WalletPage = () => {
    return (
        <section>
           <OrderHeader />
           <div className={style.wallet}> 
             <h2>Wallet</h2>
             <p>Total balance</p>
             <div className={style.total}>
               <img src={Card}/> <span>**** 2310</span>
               <h5>#319,000.00</h5>
             </div>
             <br  />
             <div className={style.line}>
               <hr />
               <br />
               <p>Convert</p>
               <hr />
               <br />
               <p>Receive</p>
               <hr />
               <br />
               <p>Send</p>
               <hr />
             </div>

             <div className={style.money}>
             <img src={Money} />
             </div>
             <br />
           </div>
           <br />
           <br/>
        </section>
    )
}