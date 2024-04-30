import style from './style.module.css'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import  White from '../../asset/images/white.svg'
import { BsTwitterX } from "react-icons/bs";
import { aboutMenu, usefulLinkMenu, legalUrls, QuickLinkMenu } from './data';

export const Footer = () => {
    return (
        <footer className={style.footer}>
           <div className={style.menu}>
             <div className={style.menuItem}>
               <a href='/home'>  <img src={White} /></a>        
                 <div className={style.flex}>
                     <Menu title="Useful links" options={aboutMenu} />
                     <Menu title="" options={usefulLinkMenu} />
                   </div>
               </div>
               <div className={style.icons}>
                <BsTwitterX  className={style.svg} onClick={() => window.open('https://twitter.com/BlessingEhapa')} />
                <FaInstagram  className={style.svg}  onClick={() => window.open('https://www.instagram.com/soilstreams/?igsh=cHc0ZGMxdHh5MHZq')}  />
                <FaWhatsapp className={style.svg} onClick={() => window.open('https://wa.link/pgp9tb')}/>
                </div>
               <div className={style['legal-urls']}>
                  {
                    legalUrls.map(({ url, name }) => <a href={url}>{name}</a>)
                  }
               </div>
           </div>
           <div className={style.copyright}>
              <div>
              <Menu title="Quick Links" options={QuickLinkMenu} />
              </div>
         </div>
         <p className={style.tech}>A tech4dev Production</p>
         <div className={style.app}>
            <FaWhatsapp className={style.svg} onClick={() => window.open('https://wa.link/pgp9tb')} />
         </div>        
        </footer>
    )
}

export const Menu = ({title, options}) =>{
    return (
        <nav className={style.nav}>
        <h5>{title || <div>&nbsp;</div>} </h5>
        <ul>
          {
              options && options.map((options)=>{
                return (<li><a href={options.url}>{options.name}</a></li>)
              })
         }

        </ul>
        </nav>
    )
}