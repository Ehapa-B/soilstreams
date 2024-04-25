import { AgentHeader } from "../AgentHeader/AgentHeader"
import { Footer } from "../Footer"
import style from "./style.module.css"

export const CookiesPage = () => {
    return (
        <section className={style.start}>
          <AgentHeader />          
           <div className={style.term}>
             <h3>Cookies Policy</h3>
             <h4>Welcome to Soil Streams! </h4>
                <p><strong>Use of Cookies </strong>
                <br />
                Please read this Cookie Policy alongside our Privacy Policy.
                <br />
                Use of Cookies on our website
                <br />
                We use cookies to collect information about store your online preference. Cookies are small pieces of information sent by a web server to a web browser which allows the server to uniquely identify the browser on each page. 
                <br />
                <br />
                We use the following categories of cookies on our website:
                <br />
                <strong>Strictly Necessary Cookies</strong>
                <br />
            
                These cookies are essential in order to enable you to move around the website and use its features. Without these cookies, services you have asked for such as remembering your login details or shopping basket items cannot be provided.
                Performance Cookies
                These cookies collect anonymous information on how people use our website. For example, we use Adobe Analytics cookies to help us understand how customers arrive at our site, browse or use our site and highlight areas where we can improve areas such as navigation, shopping experience and marketing campaigns. The data stored by these cookies never shows personal details from which your individual identity can be established.
                <br />
                <br />
                <strong>Functionality Cookies</strong> 
                <br />
                These cookies remember choices you make such as the country you visit our website from, language and search parameters such as size, colour or product line. These can then be used to provide you with an experience more appropriate to your selections and to make the visits more tailored and pleasant. The information these cookies collect may be anonymised and they cannot track your browsing activity on other websites.
                Targeting Cookies or Advertising Cookies
                These cookies collect information about your browsing habits in order to make advertising more relevant to you and your interests. They are also used to limit the number of times you see an advert as well as help measure the effectiveness of an advertising campaign. The cookies are usually placed by third party advertising networks. They remember the websites you visit and that information is shared with other parties such as advertisers.
                </p>
           </div>
           <div className={style.check}>
           <input id='remember-me' type='checkbox'  />
           <label htmlFor='remember-me'>
           <span> I agree to the Cookies Policy of Soilstreams</span>
            </label>
           </div>
           <br />
           <Footer />
        </section>
    )
}