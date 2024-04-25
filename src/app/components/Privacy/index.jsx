import { Footer } from "../Footer"
import { AgentHeader } from "../AgentHeader/AgentHeader"
import style from "./style.module.css"

export const PrivacyPage = () => {
    return (
        <section className={style.start}>
          <AgentHeader />           
           <div className={style.term}>
              <h3>Privacy  Policy</h3>
              <h4>Welcome to Soilstreams</h4>
              <br />
              <p>We receive, collect and store any information you enter on our website or provide us in any other way. In addition, we collect the Internet protocol (IP) address used to connect your computer to the Internet; login; e-mail address; password; computer and connection information and purchase history. We may use software tools to measure and collect session information, including page response times, length of visits to certain pages, page interaction information, and methods used to browse away from the page. We also collect personally identifiable information (including name, email, password, communications); payment details (including credit card information), comments, feedback, product reviews, recommendations, and personal profile.
              <br />
              <br />
              <strong>How we collect information</strong>
              <br />
              <br />
              When you conduct a transaction on our website, as part of the process, we collect personal information you give us such as your name, address and email address. Your personal information will be used for the specific reasons stated above only.​
              <br />
              <br />
              <strong>Why we collect this information</strong>
              <br />
              We collect such Non-personal and Personal Information for the following purposes:
              <br />
              <br />
              <ol>
                 <li>To provide and operate the Services;</li>
                 <li>To provide our Users with ongoing customer assistance and technical support;</li>
                 <li>To be able to contact our Visitors and Users with general or personalized service-related notices and promotional messages;</li>
                  <li>To create aggregated statistical data and other aggregated and/or inferred Non-personal Information, which we or our business partners may use to provide and improve our respective services;</li>
                 <li> To comply with any applicable laws and regulations.</li>
              </ol>
              <br />
              <br />
              <strong>How we store, share and use information</strong>
              <br />
              Our company is hosted on the platform. … provides us with the online platform that allows us to sell our products and services to you. Your data may be stored through ….. data storage, databases and the general Wix.com applications. They store your data on secure servers behind a firewall.  All direct payment gateways offered by Wix.com and used by our company adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard. PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
              <br />
              <br />
              <strong>Data Retention</strong> 
              <br />
              We retain user data for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
              <br />
              <br />
              <strong>User Rights</strong> 
              <br />
              Users have rights regarding their data, including the right to access, rectify, or delete personal information. Users can exercise these rights by contacting us using the information provided below. 
              <br />
              <br />
              <strong>Cookies and Tracking Technologies</strong>
              <br />
              Our website uses cookies and similar technologies to track user activities, improve website functionality, and personalize user experiences. Users can manage cookie preferences through browser settings or opt-out of certain tracking mechanisms. Read our Cookie Policy
              <br />
              <br />
              <strong>How we communicate with website visitors</strong> 
              <br />
              We may contact you to notify you regarding your account, to troubleshoot problems with your account, to resolve a dispute, to collect fees or monies owed, to poll your opinions through surveys or questionnaires, to send updates about our company, or as otherwise necessary to contact you to enforce our User Agreement, applicable national laws, and any agreement we may have with you. For these purposes we may contact you via email, telephone, text messages, and postal mail.
              <br />
              <br />
              <strong>Withdraw your consent.</strong> 
              <br />
              If you don't want us to process your data anymore, please contact us at [your email] or send us mail to hello@soilstreams.com
              <br />
              <br />
              <strong>Policy updates</strong>
              <br />
              We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it. 
              <br />
              <br />
              <strong>Questions and your contact information</strong>
              <br />
              If you would like to: access, correct, amend, or delete any personal information we have about you, you are invited to contact us at hello@soilstreams
              This Privacy Policy was last updated on April 1, 2024.</p>
           </div>
           <div className={style.check}>
           <input id='remember-me' type='checkbox'  />
           <label htmlFor='remember-me'>
           <span> I agree to the Privacy Policy of Soilstreams</span>
            </label>
           </div>
           <br />
           <Footer />
        </section>
    )
}