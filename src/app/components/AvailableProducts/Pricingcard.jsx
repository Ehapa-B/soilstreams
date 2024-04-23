import {CustomButton} from '../Button'
import style from './style.module.css'

export const PricingCardItem = (props) => {
    return (
        <div className={style.card}>
          <div className={style.header}>
              {props.free && <span className={style.free}>{props.free}1 month free</span>}
             <br />
             <span className={style['one-time']}>One-time plans available</span>
             <h4 className={style.planName}>{props.planName}</h4>
             <p>{props.price}/month after offer period</p>
             <p>{props.numberAccount} account</p>
          </div>
          <div className={style.content}>
              <ul>
                 {
                    props.features && props.features.map((features)=>
                    <li>
                       <p>{features}</p>
                    </li>
                    )
                 }
              </ul>

              <div>
                <CustomButton className={style.button} onClick = {()=>{}}>View plans</CustomButton>
              </div>

          </div>
          <div className={style.footer}>
          <a href="#">Terms and conditions apply.</a> 
          1 month free not available for users
           who have already tried Premium.
           </div>
        </div>
        
    )
}