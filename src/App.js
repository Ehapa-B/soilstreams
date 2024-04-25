import './App.css';
import { AboutPage } from './app/components/About';
import { LandingHeader } from './app/components/Header/LandingHeader';
import { LoginPage } from './app/components/Login';
import { LogoImage } from './app/components/Logo';
import { SignUpPage } from './app/components/signup';
import { Landing } from './app/components/Pages/landing';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProductPage } from './app/components/Product';
import { CartPage } from './app/components/Cart';
import { ProfilePage } from './app/components/Profile';
import { FarmerPage} from './app/components/Farmer';
import { OrderPage } from './app/components/Order';
import { ConsumerPage } from './app/components/Consumer';
import { TermsPage } from './app/components/Terms';
import { UploadProduct } from './app/components/Upload';
import { NotFound } from './app/components/Pages/NotFound';
import { AgentProfilePage } from './app/components/AgentProfile';
import { AgentUpload } from './app/components/AgentUpload/AgentUpload';
import { CustomerRequest } from './app/components/CustomerRequest/CustomerRequest';
import { CheckOutPage } from './app/components/CheckOut';
import { CookiesPage } from './app/components/Cookies';
import { PrivacyPage } from './app/components/Privacy';
import { FaqPage } from './app/components/FAQ';

const router = createBrowserRouter([
  {
    path: '',
    element: < Landing />
  },
  {
    path: 'home',
    element: < Landing />
  },
  {
    path: 'profile',
    element: <ProfilePage />
  },
  {
    path: 'about',
    element: <ProfilePage />
  },
  {
    path: 'signup',
    element: <SignUpPage />
  },
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: 'farmer',
    element: <FarmerPage />
  },
  {
    path: 'consumer',
    element: <ConsumerPage />
  },
  {
    path: 'agent',
    element: <AgentProfilePage />
  },
  {
    path: 'order',
    element: <OrderPage />
  },
  {
    path: 'terms',
    element: <TermsPage />
  },
  {
    path: 'agents',
    element: <AgentProfilePage />
  },
  {
    path: 'success',
    element: <CheckOutPage />
  },
  {
    path: 'farms',
    element: <AgentUpload />
  },
  {
    path: 'request',
    element: <CustomerRequest />
  },
  {
    path: 'product',
    element: <ProductPage />
  },
  {
    path: 'upload',
    element: <UploadProduct />
  },
  {
    path: 'login',
    element: <LoginPage />
  },
  
  {
    path: 'cart',
    element: <CartPage />
  },
  {
    path: 'privacy',
    element: <PrivacyPage />
  },
  {
    path: 'cookies',
    element: <CookiesPage />
  },
  {
    path: 'faq',
    element: <FaqPage />
  },
])

function App() {
  return <RouterProvider router = {router} />  
}

export default App;

