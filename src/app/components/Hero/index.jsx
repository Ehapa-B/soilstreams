import React from 'react';
import { CustomButton } from "../Button"
import style from './style.module.css'
import AboutImage from '../../asset/icons/about.svg'
import { useNavigation } from '../../components/hooks/useNavigation';


export const HeroSection = () => {

  const { navigate } = useNavigation ()

    return (
        <section className={style.test}>
           <div className={style.hero}>
              <div>
                 <h1>Soil Streams</h1>
                 <br />
                 <br />
                 <h5>Get fresh farm produce <br />
                 delivered to your doorstep <br/>
                 everyday with ease.</h5>
                 <br />
                 <br />
                 <br />
                 <a href='/signup'>
                 <CustomButton  className='register' onClick={()=> ('signup')} type='read'>
                    Register
                 </CustomButton>
               </a>
               </div>
               <div className={style.image}>
               <img src={AboutImage} />
               </div>
           </div>
        </section>
    )
}