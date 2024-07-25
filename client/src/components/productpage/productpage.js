
import "./productpage.css"
import Review from "../review/review"
import { Counter } from "./counter"
import { SizeRadio } from "./sizeRadio"
import { useEffect } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useState } from "react"


export function ProductPage() {
  const navigate = useNavigate();
 const params = useParams();
 const [apidata, setApidata] = useState(null);
 const [images,setImages] = useState(null)
 const productID = params.id; 
 const getAll = async (id) => {
  if (id) {
    await fetch(`http://localhost:4000/getproductbyID/${id}`)
      .then((res) => res.json())
      .then((data) => { setApidata(data) })
      
  }
  

}
const handlecartclick = async () =>{
  await fetch(`http://localhost:4000/createcart`,{
    method:'POST',
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
    },
    body:JSON.stringify({product:productID,token:localStorage.getItem('token')}),
})
.then((res)=>res.json())
.then((data)=>{console.log(data)})

}
 
  useEffect(() => {

    window.scrollTo({
      top: 0,
       // Optional: Animate the scroll
    });
  
    const id = params.id;
   

    getAll(id);
  }, []);

  return (
    <>
    <div className="productpageContainer">
      {apidata && (
      <>
     
    
      <div className="displayContainer">
        <div className="imageMenu">
          <img alt="image" src={apidata.image[0]} />
          <img alt="image" src={apidata.image[0]} />
          <img alt="image" src={apidata.image[0]} />
          <img alt="image" src={apidata.image[0]}/>
          <img alt="image" src={apidata.image[0]} />
          <img alt="image" src={apidata.image[0]} />
        </div>
        <div className="mainImageContainer">
          <img alt="image" src={apidata.image[0]}  className="mainImage" />
        </div>
      </div>
      <div className="infoContainer">
        <div className="titleContainer">

          <div className="">
            <span className="navigate">Home    </span>
            <span className="navigate">{'>'}   Shop    </span>
            <span className="navigate">{'>'}  {apidata.category.maincategory}    </span>

            {apidata.category.subcategories && <span className="navigate">{'>'}  {apidata.category.subcategories}    </span>}
            {apidata.category.lastcategories && <span className="navigate">{'>'}  {apidata.category.lastcategories}    </span>}
            {apidata.material && <span className="navigate">{'>'}  {apidata.material}    </span>}
            
          
          </div>
          <p className="productTitle">{apidata.name}</p>
          <div className="priceContainer">
            <div className="">

              <span className="price">{apidata.new_price}</span>
              <span className="infoComponentDetails">   (all taxes inclusive)  </span>
            </div>
            <div className="priceImageContainer">
              <img alt="image" className="icons" />
              <img alt="image" className="icons" />
              <img alt="image" className="icons" />
            </div>

          </div>

          <div className="productTags">
            <span className="redFont">{apidata.category.subcategories}</span>      |
            <span className="redFont">     {apidata.category.lastcategories}</span>      |
            <span className="redFont">     {apidata.material}</span>
          </div>
        </div>

        <div className="operations">
          <div className="selectorDiv">
            <div className="sizeContainer">
              <p className="infoComponentHeading">SIZE</p>
              <SizeRadio className="sizeRadio" />
              <p id="sizeRedFont" className="redFont">View Size Chart</p>
            </div>
            <div className="quantityContainer">
              <p className="infoComponentHeading">QUANTITIY</p>
              <Counter className="counter" />
              <p className="infoComponentDetails">In Stock: 20</p>
            </div>
          </div>

          <div className="mainButtons">

            <button className="cart" onClick={()=>{
              handlecartclick()
            }}>ADD TO CART</button>
            <button className="buynow" onClick={()=>{
              handlecartclick()
              navigate("/checkout")
            }}>BUY NOW</button>
          </div>

        </div>

        <div className="contents">

          <div className="productDetails">
            <div className="detailsHeading">Product Details</div>
            <div className="productPoints">
              <ul className="details-I">
                <li className="detailsPoint">Step into a world of elegance with our "Blooms in Burgundy: Floral Hand Block Printed Anarkali Kurta." Crafted with care, this kurta showcases a stunning hand block printed floral design in rich burgundy hues, adding a touch of sophistication to your wardrobe. The Anarkali style offers a flattering silhouette that drapes gracefully, suitable for various occasions. Made from high-quality fabric, it ensures comfort and style all day long. Pair it with your favourite bottoms and accessories for a chic and timeless ensemble that will turn heads wherever you go. Embrace the beauty of handcrafted fashion with this exquisite kurta.</li>
                <li className="detailsPoint">Product code: JVWAPKU003</li>
                <li className="detailsPoint">Colour: Burgundy</li>
                <li className="detailsPoint">This item is hand-block printed and might experience variations of colour, design and slight irregularities. These peculiarities are the hallmark of handcrafted products and make each of them an exquisite one-of-its-kind piece</li>
              </ul>
              <div className="productPoints">
                <ul className="details-II">
                  <li className="detailsPoint">Country Of Origin: India</li>
                  <li className="detailsPoint">Marketed By: Jijivisha, Plot Num 09, SMR Enclave, Himayat Sagar, Bandlaguda, Hyderabad, Telangana, India-500091</li>
                  <li className="detailsPoint">Note: The colors seen in the image may vary from the actual product due to different computer screen resolutions and displays.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="productDetails">
            <div className="detailsHeading">MATERIAL {'&'} CARE</div>
            <ul>
              <li className="detailsPoint">Gentle hand wash</li>
              <li className="detailsPoint">Wash in Cold water using a mild detergent</li>
              <li className="detailsPoint">Don't bleach or soak and tumble dry</li>
              <li className="detailsPoint">Warm Iron.</li>
              <li className="detailsPoint">Dry in shade</li>
            </ul>
            <div className="disclaimer">Disclaimer: The colors seen in the image may vary from the actual product due to different computer screen resolutions and displays</div>
          </div>
          <div className="productDetails">
            <div className="detailsHeading">SHIPPING</div>
            <ul>
              <li className="detailsPoint">Domestic Delivery in 4-5 business days</li>
              <li className="detailsPoint">International Delivery in 8-10 business days</li>
              <li className="detailsPoint">Find out more about our <span className="redUnderlinedText">Shipping </span> and <span className="redUnderlinedText">Returns {'&'} Exchange Policy</span> </li>
            </ul>
          </div>
        </div>
      </div>
      
      </>
      )}
    </div>
    
    <Review id={productID}/>
  </>
  )
}
