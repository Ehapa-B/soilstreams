import { combineClasses } from "../../../utilis/format"

export const CustomButton = (props) => {
    const classNames = {
        primary: 'btn',
        login: 'btn-login',
        read: 'btn-read',
        cart: 'btn-cart',
        register: 'btn-register',
        sell: 'btn-sell',
        request: 'btn-request',
        second: 'btn-second',
        seconds: 'btn-seconds',
        red: 'btn-red',
        outline: 'btn-outline',
        secondary: 'btn-secondary',

    }

    const className = classNames[props.type] || classNames.primary
    const classes = combineClasses(className, props.className)
    return (
        props.onClick ?  
        <button onClick={props.onClick} className={classes}> 
          {props.children}
        </button>
         : 
          <a href="#" className={classes}>{props.children} </a>
    )
}