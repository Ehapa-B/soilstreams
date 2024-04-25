import { AgentHeader } from "../AgentHeader/AgentHeader"
import { Footer } from "../Footer"
import style from "./style.module.css"

export const FaqPage = () => {
    return (
        <section className={style.start}>
          <AgentHeader />          
           <div className={style.term}>
             <h3>Frequently Asked Questions</h3>
             <h4>What is Soil Streams? </h4>
                <p>Soil Streams is an agrotech platform designed to connect buyers with farmers for the purchase of agricultural produce. It streamlines the process of buying and selling produce, facilitating transactions between buyers and farmers.
                </p>
                <br />
                <h4>How does Soil Streams work?</h4>
                <p>Buyers can browse through a variety of agricultural products
                 listed on the platform and connect directly with farmers to make purchases. For illiterate farmers, agents act as intermediaries, facilitating communication and transactions between the farmers and buyers.</p>
                <br />
                <h4>How can buyers benefit from using Soil Streams?</h4>
                <p>Buyers gain access to a wide range of fresh agricultural produce directly from farmers, ensuring quality and authenticity. The platform also offers convenience,
                 transparency, and the opportunity to support local farmers.</p>
                <br />
                <h4>How can farmers benefit from Soil Streams?</h4>
                <p>Farmers can reach a larger market of buyers, increasing their sales and profitability. Soil Streams provides a platform for farmers to showcase their produce, connect with buyers, and receive fair prices for their goods.
                </p>
                <br />
                <h4>Are there any special features for illiterate farmers?</h4>
                <p>Yes, Soil Streams offers the option for illiterate farmers to connect with the platform through agents who assist them in listing their products, communicating with buyers, and completing transactions,
                 ensuring inclusivity and accessibility.</p>
                <br />
                <h4>How does Soil Streams ensure the quality of agricultural produce?</h4>
                <p>Soil Streams implements quality control measures, including verification processes for farmers and product inspections, to ensure that only high-quality produce is listed on the platform. Additionally, buyer feedback and ratings 
                contribute to maintaining product quality standards.</p>
                <br />
                <h4>Is Soil Streams available nationwide?</h4>
                <p>Currently, Soil Streams operates in specific regions of the country, with plans for expansion in the future to serve a broader customer base. Keep an eye on our updates for news about our expansion.
                </p>
                <br />
                <h4>How can I get started with Soil Streams?</h4>
                <p>To get started with Soil Streams, simply visit our website. From there, you can create an account as either a buyer or a farmer (or agent for illiterate farmers) and begin exploring the platform's features.</p>
           </div>
           <br />
           <Footer />
        </section>
    )
}