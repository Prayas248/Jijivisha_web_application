import React from 'react';
import './bridal.css';
import { useEffect } from 'react';
function BridalAssistance() {
  useEffect(() => {

    window.scrollTo({
      top: 0,
       // Optional: Animate the scroll
    });
  
  }, []);
  return (
    <div className="container">
      <h1 className="title">Bridal Shopping Assistance</h1>
      <p className="paragraph">
        Dear Bride-to-be,
        <br />
        Congratulations on your upcoming wedding! At JIJIVISHA, we understand that wedding planning can be overwhelming, especially when it comes to selecting the
        perfect bridal attire for all the functions. That's why we are here to assist you in every step of the way.
        <br />
        We at JIJIVISHA offer a wide range of bridal attire, including sarees, lehengas, salwar kameez, and more, perfect for all the pre-wedding and wedding functions. We
        offer a range of packages that cater to all your wedding functions, including mehndi, sangeet, haldi, wedding day, and reception. We understand that every bride is
        unique, and that's why we offer a personalized shopping experience.
        <br />
        Our expert bridal consultants are available to guide you in selecting the perfect attire that matches your style, budget, and preferences. We also provide
        customization options to ensure that your outfit fits you perfectly. Listed are our various packages:
        <br />
        • Consultation Fees: During the consultation, we will work with you to understand your vision for your wedding, your personal style, and your budget. We will then
        provide customized recommendations for wedding attire, jewellery, and accessories that align with your preferences and requirements. [Price: Rs 5,000]
        <br />
        • Basic Bridal Shopping Package: Our designers will design the best bridal wear and assist you in choosing accessories for the wedding that will go with your
        personality, body type, and the theme of the wedding. [Price: Rs. 1,50,000]
        <br />
        • Advance Bridal Shopping Package: Our team of experts and stylists will work with you to create a personalized look that suits your style and the wedding theme.
        We will provide you with customized outfits and accessories for the wedding as well as the ring ceremony and haldi functions. [Price: Rs. 3,50,000- Milestone
        Payment]
        <br />
        • Premium Bridal Shopping Package: Our team of experts, stylists & designers will work with you to create a personalized look that suits your style and the wedding
        theme. We will provide you with customized outfits and accessories for the pre-wedding shoots, ring ceremony, haldi-sangeet, wedding & reception. Also
        additional services such as on-site dressing assistance on your wedding day, and assisting family in choosing their garments according to the wedding theme.
        [Price: Rs.5,00,000- Milestone Payment]
        <br />
        At JIJIVISHA, we are committed to promoting sustainability and reducing waste in our operations. Most of our products are made from eco-friendly materials, and we
        ensure that our suppliers follow ethical and fair-trade practices.
        <br />
        We understand that your wedding day is one of the most important days of your life, and we are honoured to be a part of your special journey. Let us help you find
        the perfect bridal attire that will make you feel confident, beautiful, and comfortable on your big day.
        <br />
        We are delighted to offer a special combo offer for bridal and groom shopping assistance for weddings. With our combo offer, you can avail of our Bridal Grooming
        package and Groom Shopping assistance at a discounted price. Our team will work with you to create a cohesive and complementary look for the bride and groom,
        ensuring that they look stunning on their special day.
        <br />
        If you have any questions or need assistance, please do not hesitate to contact us +917995321114 or <a href="shop@jijivishaonline.com">shop@jijivishaonline.com</a>
        <br />
        We are always here to help.
      </p>
    </div>
  );
}

export default BridalAssistance;
