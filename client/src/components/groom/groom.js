import React from 'react';
import './groom.css';
import { useEffect } from 'react';

function GroomAssistance() {
  useEffect(() => {

    window.scrollTo({
      top: 0,
       // Optional: Animate the scroll
    });
  
  }, []);
  return (
    <div className="container">
      <h1 className="heading">Groom Shopping Assistance</h1>
      <div className="text">
      <p>We are excited to announce that JIJIVISHA now offers groom shopping assistance for Hindu weddings. We understand that weddings are a significant event in one's life, and we want to make sure that the groom looks his best on his special day.</p>
      <p>Our team of experts will provide personalized assistance to the groom in selecting the perfect attire and accessories for all wedding functions, including mehndi, sangeet, haldi, wedding day, and reception. We offer a wide range of options, from traditional to contemporary styles, to cater to your individual preferences and requirements.</p>
      <p>Our team will assist the groom in selecting the right fabric, color, and style that complements his personality and the theme of the wedding. We also provide advice on selecting accessories, including shoes, jewellery, and turban, to complete the groom's look Listed are our various packages:</p>
      <ul>
        <li><b>Consultation Fees:</b> During the consultation, we will work with you to understand your vision for your wedding, your personal style, and your budget. We will then provide customized recommendations for wedding attire, jewellery, and accessories that align with your preferences and requirements. [Price: Rs 5,000]</li>
        <li><b>Basic Groom Shopping Package:</b> Our designers will design the best groom wear and assist you in choosing accessories for the wedding that will go with your personality, body type, and the theme of the wedding. [Price: Rs. 1,50,000]</li>
        <li><b>Advance Groom Shopping Package:</b> Our team of experts and stylists will work with you to create a personalized look that suits your style and the wedding theme. We will provide you with customized outfits and accessories for the wedding as well as the ring ceremony and haldi functions. [Price: Rs. 3,50,000-Milestone Payment]</li>
        <li><b>Premium Groom Shopping Package:</b> Our team of experts, stylists & designers will work with you to create a personalized look that suits your style and the wedding theme. We will provide you with customized outfits and accessories for the pre-wedding shoots, ring ceremony, haldi-sangeet, wedding & reception. Also additional services such as on-site dressing assistance on your wedding day, and assisting family in choosing their garments according to the wedding theme. [Price: Rs.5,00,000-Milestone Payment]</li>
      </ul>
      <p>At JIJIVISHA, we believe in promoting sustainability, and we take steps to minimize our impact on the environment. We offer eco-friendly and sustainable options wherever possible, without compromising on quality and style.</p>
      <p>We are delighted to offer a special combo offer for bridal and groom shopping assistance for weddings. With our combo offer, you can avail of our Bridal Grooming package and Groom Shopping assistance at a discounted price. Our team will work with you to create a cohesive and complementary look for the bride and groom, ensuring that they look stunning on their special day.</p>
      <p>If you have any questions or need assistance, please do not hesitate to contact us +917995321114 or <a href="shop@jijivishaonline.com">shop@jijivishaonline.com</a>.</p>
      <p>We are always here to help.</p>
    </div>
    </div>
  );
}

export default GroomAssistance;