import "./egift.css"
import handbag from '../../assets/handbag.png'
import { useEffect } from "react";

function GiftCard() {
  useEffect(() => {

    window.scrollTo({
      top: 0,
       // Optional: Animate the scroll
    });
  
  }, []);
  return (
    <div className="giftCardContainer">
      <div className="Heading">e-Gift Cards</div>
      <div className="infotext">
      <div className="info">We are excited to announce that JIJIVISHA now offers e-gift cards, the perfect gift for your loved ones who appreciate sustainable and eco-friendly products</div>
      <div className="info">Our e-gift cards are available in various denominations and can be redeemed on our website for any of our products, including clothing, accessories and home decor. With a JIJIVISHA e-gift card, your recipient can choose from a wide selection of sustainable and environmentally-friendly products that are good for them and the planet</div>
      <div className="info">Our e-gift cards are easy to purchase and send. Simply select the desired denomination, and we will send the e-gift card directly to your recipient's email address. You can also include a personalized message to make it extra special.</div>  
      <div className="info">At JIJIVISHA, we are committed to promoting sustainability, and we take steps to minimize our impact on the environment. Our e-gift cards are also eco-friendly, as they reduce paper waste and the need for packaging materials.</div>
      </div>
      <div className="voucherContainer">
        <img src={handbag} className="voucher" />
        <img src={handbag} className="voucher" />
        <img src={handbag} className="voucher" />
      </div>
    </div>
  )
}
export default GiftCard;