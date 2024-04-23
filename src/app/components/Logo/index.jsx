import LogoIcon from '../../asset/icons/soil.svg'
import style from './style.module.css'

export const LogoImage = () => {
    return (
        <div className={style.logo}>
        <a href='/home'>  <img src={LogoIcon} alt="logo" /></a>
        </div>
    )
}