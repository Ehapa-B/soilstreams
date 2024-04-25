import { Footer } from "../Footer"
import { AgentHeader } from "../AgentHeader/AgentHeader"
import style from "./style.module.css"

export const TermsPage = () => {
    return (
        <section className={style.start}>
          <AgentHeader />
           <div className={style.term}>
             <h3>Terms and Conditions</h3>
             <h4>Welcome to Soil Streams! </h4>
             <p>These Terms and Conditions ("Terms") govern your use of the Soil Streams website ("Site") and all related services provided by Soil Streams ("we," "us," or "our"). By accessing or using our Site and services, you agree to comply with these Terms. Please read them carefully.
             <br />
             <br />
             <p><strong> Acceptance of Terms:</strong> 
                 By using Soil Streams, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy. If you do not agree with any part of these Terms, please do not use our Site or services.
             </p>
             <br />
             <br />
             <p><strong>User Accounts:</strong> To access certain features of Soil Streams, you may need to create a user account.
                You are responsible for maintaining the confidentiality of 
                 your account credentials and for all activities that occur 
                under your account. You agree to notify us immediately of any
                unauthorized use of your account.
              </p>
             <br />
             <br />
             <p><strong>User Responsibilities:</strong> As a user of Soil 
                Streams, you agree to:</p>
             <ul>
                <li> Provide accurate and truthful information when registering and using our services.</li>
                <li>Comply with all applicable laws and regulations regarding your use of our Site and services.</li>
                <li>Respect the rights and privacy of other users and refrain from engaging in any illegal, harmful, or abusive behavior.</li>
             </ul>
             <br />
             <br />
             <strong>Listing and Transactions:</strong> Farmers can create listings for their produce, and buyers can browse and purchase items directly from farmers. Soil Streams facilitates these transactions but does not guarantee the quality, accuracy, or legality of listed items. Buyers and sellers are solely responsible for their transactions.
             <br />
             <br />
             <strong>Fees and Payments:</strong> Soil Streams may charge fees for certain services or transactions. By using these services, you agree to pay any applicable fees and abide by our payment terms. All fees are non-refundable unless otherwise stated.
             <br />
             <br />
             <strong>Intellectual Property:</strong>  The content, logos, trademarks, and other materials displayed on Soil Streams are owned by us or our licensors and are protected by intellectual property laws. You may not use, reproduce, or distribute any content from Soil Streams without our prior written consent.
             <br />
             <br />
             <strong>Privacy:</strong>  Our Privacy Policy explains how we collect, use, and protect your personal information. By using Soil Streams, you consent to our collection and use of your information as described in the Privacy Policy.
             <br />
             <br />
             <strong>Limitation of Liability:</strong> Soil Streams is provided on an "as is" and "as available" basis. We make no warranties or representations regarding the accuracy, reliability, or availability of our Site or services. In no event shall Soil Streams be liable for any direct, indirect, incidental, special, or consequential damages arising out of your use or inability to use our services.
             <br />
             <br />
             <strong>Indemnification:</strong> You agree to indemnify, defend, and hold harmless Soil Streams and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, or expenses (including legal fees) arising out of your use of our Site or services or your violation of these Terms.
             <br />
             <br />
             <strong>Termination:</strong> We reserve the right to suspend or terminate your access to Soil Streams at any time, without prior notice or liability, for any reason. Upon termination, you must cease all use of our Site and services.
             <br />
             <br />
             <strong>Governing Law:</strong> These Terms are governed by the laws of Nigeria, without regard to its conflict of laws principles. Any disputes arising from these Terms shall be resolved in accordance with the Lagos State Arbitration Law. The arbitration venue shall be Lagos and the language shall be English. 
             <br />
             <br />
             <strong>Changes to Terms:</strong> Soil Streams reserves the right to modify or update these Terms at any time. We will notify users of significant changes, and continued use of our Site after such changes constitutes acceptance of the revised Terms.
             If you have any questions or concerns about these Terms and Conditions, please contact us at hello@soilstream.com
             Thank you for using Soil Streams!</p>
           </div>
           <br />

           <div className={style.check}>
             <input id='remember-me' type='checkbox'  />
             <label htmlFor='remember-me'>
                <span> I agree to the Terms and Conditions of Soilstreams</span>
              </label>
           </div>
            <br />
           <Footer />
        </section>
    )
}