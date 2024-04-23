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
                     <Menu title="" options={aboutMenu} />
                     <Menu title="Useful Links" options={usefulLinkMenu} />
                   </div>
               </div>
               <div className={style.icons}>
                <BsTwitterX  className={style.svg} />
                <FaInstagram  className={style.svg} />
                <FaWhatsapp className={style.svg} />
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
            <a href='tel:+2348102845893'><FaWhatsapp className={style.svg} /></a>
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