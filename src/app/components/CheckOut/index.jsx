import style from './style.module.css'
import Success from '../../asset/icons/success.svg'
import { CustomButton } from "../Button"

export const CheckOutPage = () => {
    return (
        <section>
           <div className={style.check}>
             <div className={style.out}> 
                <h3>CheckOut</h3>
              </div>
              <br />
              <br />
              <div>
                 <img src={Success} />
              </div>
              <br />
              <br />
              <div>
                 <h2>
                  Ticket Payment Successful
                 </h2>
                 <br />
                 
                 <p>Transaction Number : 10137594</p>
                 <br />
                 <hr />
                 <br />
                 <br />
              </div>
              <div className={style.pay}>
                <h5>Amount paid  <span>#40,000</span> 
                </h5>
                <br />
                
                <p>Payed by <span>Card</span>
                </p>
              </div>
              <br />
              <br />
              <a href='/home'>
                <CustomButton  className='request' onClick={()=> ('signup')} type='read'>
                  Homepage 
                </CustomButton>
              </a>
           </div>
        </section>
    )
}