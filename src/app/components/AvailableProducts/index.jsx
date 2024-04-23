import { availableProducts } from './data';
import styles from './style.module.css';
import { CustomButton } from '../Button';

export const AvailableProducts = () => {
  return (
    <div className={styles['latest-offer']}>
      <h2>Available Products</h2>
      <section className={styles.products}>
        <div className={styles.list}>
          {availableProducts.map((item) => (
            <div className={styles.item}>
              <img src={item.image} />
              <div className={styles['product-details']}>
                <div className={styles.cart}>
                   <h5 className={styles.title}>{item.title}</h5>
                   <span className={styles.button}>{item.button}</span>
                </div>
                <p className={styles.price}>{item.price}</p>
                <span className={styles.state}>{item.state}</span>
              </div>
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
      </section>
    </div>
  );
};
