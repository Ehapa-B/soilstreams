import { useState } from 'react';
import style from './style.module.css'
import {Carts, Summary } from './data';
import { CustomButton } from '../Button';
import { Location } from './Location';
import { Footer } from '../Footer';
import { AgentHeader } from '../AgentHeader/AgentHeader';

export const OrderPage = () => {
    const [cartItems, setCartItems] = useState(Carts.map(item => ({ ...item, quantity: 1 })));

    const handleIncreaseQuantity = (index) => {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity += 1;
      setCartItems(updatedCartItems);
    };
  
    const handleDecreaseQuantity = (index) => {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[index].quantity > 1) {
        updatedCartItems[index].quantity -= 1;
        setCartItems(updatedCartItems);
      }
    };
  
      // Calculate total cost based on the items in the cart
  const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    return (
        <section>
         <AgentHeader />
           <div className={style.image}>
             <div className={style.overlay}>  
             <div className={style.order}>
             <div className={style.list}>
               <h2>Payment Options</h2>
               <input className={style.check} type='checkbox'  />
               <label htmlFor='remember-me'>
               <span> Card</span></label>
               <br />
               <input className={style.check}  type='checkbox'  />
               <label htmlFor='remember-me'>
               <span> Transfer</span></label>
             </div>
             <div className={style.summary}>
             <h2>Cart Summary</h2>
             <p className={style.total}>Total Items: N{totalCost.toFixed(2)}</p>
             {/* Display delivery and other summary details here */}
             {Summary.map((summary, index) => (
               <div key={index}>
                 <span className={style.delivery}>{summary.delivery}</span>
                 <h2 className={style.cost}>{summary.cost}</h2>
               </div>
             ))}
             <br />
             <br />
             </div>

             <br />

          </div>

          <Location />
          <CustomButton className={style.register} onClick={() => ('signup')} type="red">
              LogOut
          </CustomButton>
             </div>
           </div>
           <Footer />
        </section>
    )
}