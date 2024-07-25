import './App.css';
import Handbags from './components/handbag/handbags';
import Shop from './components/shop_by_catagories/shop';
import Values from './components/values/value';
import Happy from './components/happy/happy';
import ProductList from './components/latestproduct/productlist';
import PopularProductList from './components/popularproduct/productlist';
import Elegants from './components/elegants/elegant';
import HandwovenProductList from './components/handwoven/productlist';
import CustomProductList from './components/custom/productlst';
import First from './components/header/headerDown';
import BlogPage from './components/blogpage/blogpage';
import OurPerspective from './components/perspective/Perspective';
import DressProductList from './components/dress/productlist';
import BlogProductList from './components/blog/productlist'


function Home() {
  return (
    <div className="App">
     <First />
      <ProductList/>
      <Shop/>
      <PopularProductList/>
      <OurPerspective />
      <Elegants/>
      <HandwovenProductList/>
      <DressProductList />
      <Handbags/>
      <CustomProductList/>
      <BlogProductList />
      <Happy/>
      <Values/>
      
     
    </div>
  );
}

export default Home;
