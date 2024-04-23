import { useState } from 'react';
import { ProductHeader } from '../ProductHeader/ProductHeader';
import { Carts, Summary } from './data';
import Plus from '../../asset/images/plus.svg';
import Minus from '../../asset/images/minus.svg';
import style from './style.module.css';
import { CustomButton } from '../Button';
import {Testimony } from "../Testimonial"
import { Footer } from '../Footer';

export const CartPage = () => {
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
    <section className={style.prod}>
      <ProductHeader />
      <div className={style.pro}>
        <div className={style.list}>
         <h2 className={style.h2}>Cart (2)</h2>
         <div className={style.line}>
         {cartItems.map((item, index) => (
          <div className={style.item} key={index}>
            <img src={item.image} alt={item.title} />
            <div className={style['product-details']}>
              <h5 className={style.title}>{item.title}</h5>
              <span className={style.text}>{item.text}</span>
              <br />
              <br />
              <div className={style.add}>
                <img className={style.ad} src={Plus} alt="Increase" onClick={() => handleIncreaseQuantity(index)} />
                <p>{item.quantity}</p>
                <img className={style.ad} src={Minus} alt="Decrease" onClick={() => handleDecreaseQuantity(index)} />
              </div>
              <br />
              <img src={style.price} alt={item.price} />
            </div>
          </div>
          ))}
         </div>
        </div>
        <div className={style.summary}>
          <h2>Cart Summary</h2>
          <p className={style.total}>Total Items: N{totalCost.toFixed(2)}</p>
          {/* Display delivery and other summary details here */}
          {Summary.map((summary, index) => (
            <div key={index}>
              <span className={style.delivery}>{summary.delivery}</span>
              <span className={style.cost}>{summary.cost}</span>
            </div>
          ))}
          <br />
          <br />
          <CustomButton className="register" onClick={() => ('signup')} type="read">
             Proceed
         </CustomButton>
        </div>
        
        <br />
      </div>
      <Testimony />
      <Footer />
    </section>
  )
}
