import React from "react"
import "./footer.css"
import redtruck from '../../assets/redtruck.png'
import circle from '../../assets/circle.png'
import lock from '../../assets/lock.png'
import headphones from '../../assets/headphone.png'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import insta from '../../assets/insta.png'
import x from '../../assets/x.png'
import linkedin from '../../assets/linkedin.png'
import reddit from '../../assets/reddit.png'
import master from '../../assets/master.png'
import rupay from '../../assets/rupay.png'
import apple from '../../assets/apple.png'
import { Link } from "react-router-dom"

 function Footer() {

  return (
    <div className="footer">

      <div className="footerInfo">

        <div className="infoSection">
          <img src={redtruck} className="infoIcons" />
          <div className="greyFont" > FREE DELIVERY</div>
          <div> for all orders over Rs. 999 </div>
        </div>
        <div className="infoSection">
          <img src={circle} className="infoIcons" />
          <div className="greyFont">7 DAYS RETURN </div>
          <div>if goods have problem </div>
        </div>
        <div className="infoSection">
          <img src={lock} className="infoIcons" />
          <div className="greyFont"> SECURE PAYMENT </div>
          <div>100% secure payment </div>
        </div>
        <div className="infoSection">
          <img src={headphones} className="infoIcons" />
          <div className="greyFont"> CUSTOMER SUPPORT </div>
          <div>Mon-Fri(9AM to 5PM) </div>
        </div>
      </div>

      <div className="mainFooter">
        <div className="tags">
          <img src={logo} className="jijivishaLogo" />
          <div>
            <a href="">
              <img src={facebook}className="socialMediaIcons" />
            </a>
            <a href="" >
              <img src={insta} className="socialMediaIcons" />
            </a>
            <a href="">
              <img src={x} className="socialMediaIcons" />
            </a>
            <a href="">
              <img src={linkedin} className="socialMediaIcons" />
            </a>
            <a href="">
              <img src={reddit} className="socialMediaIcons" />
            </a>
          </div>
        </div>

        <div className="Quicklinks">
          <div className="heading">Quick Links</div>
          <div>
            <Link to='/product_customise' className="footerLinks">PRODUCTS CUSTOMIZATION</Link> <br />
            <Link to='/egift'  className="footerLinks">E GIFT CARS</Link> <br />
            <Link to='/groomassist'  className="footerLinks">GROOM SHOPPING ASSISSANCE</Link> <br />
            <Link to='/brideshop'  className="footerLinks">BRIDAL SHOPPING ASSISSANCE</Link> <br />
            <Link to='/corpgift'  className="footerLinks">CORPORATE GIFTING</Link>
          </div>
        </div>

        <div className="Company">
          <div className="heading">Company</div>

          <div>
            <Link to='/blogpage' className="footerLinks">BLOG</Link> <br />
            <Link to='/privacypolicy' className="footerLinks">PRIVACY POLICY</Link> <br />
            <Link to='/shippingpolicy' className="footerLinks">SHIPPING POLICY</Link> <br />
            <Link to='/returnpolicy' className="footerLinks">RETURN AND REFUND POLICY</Link> <br />
            <Link to='/FAQ' className="footerLinks">FAQS</Link> <br />
            <Link to='/corpgift' className="footerLinks">CONTACT US</Link> <br />
            <Link to='/corpgift' className="footerLinks">MEDIA</Link> <br />
            <Link to='/corpgift' className="footerLinks">TERMS OF USE</Link>
          </div>
        </div>

        <div className="Contact">
          <div className="heading">Contact Info</div>

          <div className="contact-section1">
            <div className="greyFont">EMAIL</div>
            <div className="section1-body">SHOP@JIJIVISHAONLINE.COM</div>
          </div>

          <div className="contact-section1">
            <div className="greyFont">PHONE NUMBER</div>
            <div className="section1-body">79953 21114</div>
          </div>

          <div className="contact-section1">
            <div className="greyFont">ADDRESS</div>
            <div className="section1-body">Lorem ipsum dolor sit amet, qui minim  <br />
              adipisicing minim sint cillum sint conse <br />
              ctetur clabor eupidatat.</div>
          </div>

          <div className="contact-section2">
            <div className="greyFont">SUBSCRIBE TO OUR NEWSLETTER</div>
            <input className="inputEmail" type="text" placeholder="Email Address" />
            <button className="subscribeButton"> SUBSCRIBE </button>

          </div>

        </div>
      </div>

      <div className="paymentInfo">
        <div className="">WE ACCEPT</div>
        <div><img src={master} className="paymentIcons" /></div>
        <div><img src={rupay} className="paymentIcons" /></div>
        <div><img src={apple} className="paymentIcons" /></div>
      </div>

      <div className="thanks">
        THANK YOU FOR SHOPPING WITH US :)
      </div>

      <div className="copyright">
        JIJIVISHA 2023. ALL COPYRIGHT RESERVED
      </div>
    </div>
  )
}
export default Footer