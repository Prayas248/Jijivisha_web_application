import React from 'react';
import './faq.css';
function FAQ() {
  return (
    <>
    <div className="faqcontainer">
      <h1 className="faqtitle">Frequently Asked Questions</h1>
      <div className="faqsection">
        <h2>SHIPPING</h2>
        <ul>
          <li>What Shipping Methods Are Available?</li>
          <hr className="line" />
          <li>Do You Ship Internationally?</li>
          <hr className="line" />
          <li>How Long Will It Take To Get My Package?</li>
          <hr className="line" />
        </ul>
      </div>
      <div className="faqsection">
        <h2>PAYMENT</h2>
        <ul>
          <li>What Payment Methods Are Accepted?</li>
          <hr className="line" />
          <li>Is Buying On-Line Safe?</li>
          <hr className="line" />
        </ul>
      </div>
      <div className="faqsection">
        <h2>Order & Returns</h2>
        <ul>
          <li>How Do I Place An Order?</li>
          <hr className="line" />
          <li>How Can I Cancel Or Change My Order?</li>
          <hr className="line" />
          <li>Do I Need An Account To Place An Order?</li>
          <hr className="line" />
          <li>How Do I Track My Order?</li>
          <hr className="line" />
          <li>How Can I Return A Product?</li>
          <hr className="line" />
        </ul>
      </div>
    </div>
    <div className="faqcta">
    <h2>We're Here To Help! Contact Us</h2>
  </div>
  </>
  );
}

export default FAQ;