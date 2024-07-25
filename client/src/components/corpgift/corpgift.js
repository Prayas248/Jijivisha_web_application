
import "./corpgift.css"
import handbag from '../../assets/handbag.png'
import { useEffect } from "react";

 function CorpGift() {
  useEffect(() => {

    window.scrollTo({
      top: 0,
       // Optional: Animate the scroll
    });
  
  }, []);

  return (
    <div className="">
      <div className="redHeading">Corporate Gifting</div>
      <div className="infodivtext">
      <div className="infoDivs">At JIJIVISHA, we offer a range of corporate gifting options that are perfect for any occasion. Whether you are looking to show appreciation to your
        employees, clients, business partners, events we have a wide range of products that are sure to impress.</div>
      <div className="infoDivs">Our corporate gifting options include eco-friendly and sustainable products, such as handmade paper products like handmade dairies, paper pens.</div>
      <div className="infoDivs">Sustainable stationery items like wooden pen stand, wooden card holder. Handmade copper water bottle, ceramic mugs, photo frames, marble mobile stand. We also offer a range of luxurious and high-end products & designer accessories</div>
      </div>
      <div className="corpimage">
        <img src={handbag} className="giftImg" />
        <img src={handbag} className="giftImg" />
        <img src={handbag} className="giftImg" />
        <img src={handbag} className="giftImg" />
      </div>
      <div className="infodivtext">
      <div className="infoDivs">Our team of experts can work with you to create a customized gifting solution that is tailored to your specific requirements and preferences. We can help you select the perfect products, wrap and package them beautifully, and deliver them directly to your recipients.</div>
      <div className="infoDivs">At JIJIVISHA, we believe in promoting sustainability, and we take steps to minimize our impact on the environment. We use eco-friendly and sustainabl{handbag}        materials wherever possible, without compromising on quality or style.</div>
      <div className="infoDivs">If you are interested in our corporate gifting options or have any questions, please don't hesitate to reach out to us at shop@jijivishaonline.com or
        +917995321114.</div>
      <div className="infoDivs">We look forward to working with you and helping you make a lasting impression with your gifts.</div>
    </div>
    </div>
  )
}
 export default CorpGift;