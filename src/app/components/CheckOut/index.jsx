import style from './style.module.css'
import Success from '../../asset/icons/success.svg'

export const CheckOutPage = () => {
    return (
        <section>
           <div className={style.check}>
              <h3>CheckOut</h3>
              <div>
                 <img src={Success} />
              </div>
              <div>
                 <h6>
                 Ticket Payment Successful</h6>
              </div>
           </div>
        </section>
    )
}