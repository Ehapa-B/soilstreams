import { useState } from 'react'
import { Footer } from  '../Footer'
import style from './style.module.css'
import { CustomButton } from '../Button'
import SearchIcon from '../../asset/icons/search.svg'
import { Products } from './data';
import { AgentHeader } from '../AgentHeader/AgentHeader'

export const ProductPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(Products); // State to store filtered results, initially set to all products

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    const filteredResults = Products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <section className={style.section}>
      <AgentHeader />
      <div className={style.search}>
        <input
          type="search"
          placeholder="Search Products"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <img src={SearchIcon} alt="Search" />
        <div className={style.sh}>
          <CustomButton className="register" onClick={handleSearchButtonClick} type="read">
            Search
          </CustomButton>
        </div>
        <br />
      </div>
      <div className={style.products}>
        <div className={style.list}>
          {searchResults.map((item) => (
            <div className={style.item} key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className={style['product-details']}>
                <div className={style.cart}>
                  <h5 className={style.title}>{item.title}</h5>
                  <span className={style.button}>{item.button}</span>
                </div>
                <p className={style.description}>{item.description}</p>
                <p className={style.price}>{item.price}</p>
                <span className={style.state}>{item.state}</span>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </section>
  );
};
