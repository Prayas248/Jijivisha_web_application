import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/footer';
import Dashboard from './components/header/header';
import Home from './Home';
import { Register } from './components/auth/register/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth } from './components/auth/logout';
import { Login } from './components/auth/login/login';
import SearchProductList from './components/search/productsearch';
import { ProductPage } from './components/productpage/productpage';
import CartPage from './components/cart/cartpage';
import BlogPage from './components/blogpage/blogpage';
import ReturnRefundPolicy from './components/return/return';
import GroomAssistance from './components/groom/groom';
import GiftCard from './components/egift/egift';
import ProductCustomization from './components/Customization/customization';
import CorpGift from './components/corpgift/corpgift';
import BridalAssistance from './components/bridal/bridal';
import Wishlist from './components/wishlist/wishlist';
import FAQ from './components/faq/faq';
import PrivacyPolicy from './components/privacy/privacy';
import ShippingPolicy from './components/shipping/shipping';
import ArticlePage from './components/blog1/blog1';
import CheckoutForm from './components/checkout/checkout';

function App() {
  return (
    <div className="App">
      <Router>
      <Dashboard/>
      
        <Routes>
    <Route path='/' element={<Home />} />
      <Route path='/auth/signup' element={<Register />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/:maincategory/:subcategories?/:lastcategories?/:material?' element={<SearchProductList />} />
      <Route path='/search/:id?' element={<SearchProductList />} />
      <Route path='/blogpage' element={<BlogPage />} />
      <Route path='/returnpolicy' element={<ReturnRefundPolicy />} />
      <Route path='/groomassist' element={<GroomAssistance />} />
      <Route path='/egift' element={<GiftCard />} />
      <Route path='/product_customise' element={<ProductCustomization />} />
      <Route path='/corpgift' element={<CorpGift />} />
      <Route path='/brideshop' element={<BridalAssistance />} />
      <Route path='/FAQ' element={<FAQ />} />
      <Route path='/privacypolicy' element={<PrivacyPolicy />} />
      <Route path='/shippingpolicy' element={<ShippingPolicy />} />
      <Route path='/bloginfo/:id' element={<ArticlePage />} />
      <Route path='/checkout' element={<CheckoutForm />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
