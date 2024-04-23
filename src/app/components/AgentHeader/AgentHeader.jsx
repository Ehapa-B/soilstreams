import './AgentHeader.css';
import React from 'react';
import { LogoImage } from '../Logo/index';
import Cart from '../../asset/images/cart.svg'
import {ReactComponent as MenuIcon} from '../../asset/icons/menu.svg'


function useState(initialValue) {
  let val =initialValue
  function change(newValue) {
    val = newValue
  }
  return [val, change]
}

export const AgentHeader = () => {
  
    const [showMenu, setMenu] = React.useState(false);

    const toggleMenu = () => {

      if (showMenu === false){
        setMenu(true)
      } else {
        setMenu(false)
      }
    }
    
    
    return (<header className='header'>
      <div className='logo'>
        <LogoImage useWhite = {true} />
      </div>
      <MenuIcon className='menu-icon' onClick={toggleMenu} fill='white' />
      <div className='menu'>
        <HeaderNavigation  className={showMenu ? 'mobile': ''} />
     </div>
    </header>)
}



const HeaderNavigation = (props) => {
  return (
    <ul className={props.className}>
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/profile">About</a>
      </li>
      <li> 
        <a href="/product">Products</a>
      </li>
      <li> 
        <a href="/order">Order</a>
      </li>
      <li className='active'>
       <a href='/cart'>
         <img  src={Cart}/>
       </a>

      </li>   
    </ul>
  )
}

