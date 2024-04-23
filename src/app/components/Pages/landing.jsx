import { AboutPage } from "../About";
import { AvailableProducts } from "../AvailableProducts";
import { LandingHeader } from "../Header/LandingHeader";
//import { ProductPage } from "./components/Product";
import { HeroSection } from "../Hero/index";
//import { LoginPage } from "./components/Login";
// import { SignUpPage } from "./components/signup";
import { Testimony } from '../Testimonial/index'
import { Footer} from '../Footer/index'


export const Landing = () => {
  return (
   <div id="top-page">
       <LandingHeader />
       <HeroSection />
       <AboutPage />
       <AvailableProducts />
       <Testimony />
       <Footer />    
    </div>
  )
  
}



