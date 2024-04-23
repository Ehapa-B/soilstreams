import './LandingHeader.css';
import React from 'react';
import { LogoImage } from '../Logo/index';
import { CustomButton } from '../Button';
import {ReactComponent as MenuIcon} from '../../asset/icons/menu.svg'


function useState(initialValue) {
  let val =initialValue
  function change(newValue) {
    val = newValue
  }
  return [val, change]
}

export const LandingHeader = () => {
  
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
      <li> 
      <a href="/agents">Agent</a>
      </li>
      <li className='active'>
       <a href='/login'>
         <CustomButton  className='register' onClick={()=> ('signup')} type='read'>
            Login
         </CustomButton>
       </a>
       
      </li>    
    </ul>
  )
}

