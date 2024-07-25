import React from 'react';
import './return.css';
import { useEffect } from 'react';
function ReturnRefundPolicy() {
  useEffect(() => {

    window.scrollTo({
      top: 0,
       // Optional: Animate the scroll
    });
  
  }, []);
  return (
    <div className="returncontainer">
      <h1 className="returntitle">Return & Refund Policy</h1>
      <p className='returnp'>This policy applies to all the customers of Jijivisha (hereinafter referred to as "the Company").</p>
      <div className="returntext">
      <h2>Registration Fee</h2>
      <p>No refund of Registration Fee (if shall be made under any circumstances whatsoever (unless there is any situation which is deemed exceptional by the management)).</p>
      <hr className="line" />
      <h2>Exchange & Return Policy</h2>
      <ol>
        <li>Within 7 days of receiving the shipment we accept exchanges and returns.</li>
        <li>A free of cost reverse pickup facility from your shipping address is available.</li>
        <li>On the product page, the items should be marked as eligible for exchange and return.</li>
        <li>E-Gift cards are non-refundable.</li>
        <li>All purchases of sale items are final and non-returnable.</li>
        <li>No exchanges & returns are applicable for International Orders.</li>
        <li>Gift wrapping services are non-refundable.</li>
      </ol>
      <hr className="line" />
      <h2>Exchange & Return Process</h2>
      <ol>
        <li>To raise a request, email <a href="mailto:shop@jijivishaonline.com">shop@jijivishaonline.com</a> or Call/WhatsApp us at +91-7995321114</li>
        <li>Within 48 hours a reverse pickup will be initiated by us from your shipping address.</li>
        <li>The item to be returned or exchanges must be in their original condition, with their labels, tags, and packaging intact.</li>
        <li>The items to be returned or exchanged should be unwashed and unused, unsoiled without any stains or damages.</li>
        <li>Returned items, post verification by us, will be processed for an exchange or return.</li>
        <li>For the completion of your exchange or return request it will take around 10-15 working days.</li>
        <li>If the item is not qualifying for return as per the condition in which it is shipped(kindly refer points 2, 3 & 4 of the exchange and return process), then courier charges on actuals will be imposed on the customer.</li>
      </ol>
      <hr className="line" />
      <h2>REFUND POLICE</h2>
      <ol>
        <li>A credit note is issued for full amount against all returns</li>
        <li>On any return requests there is no reverse shipping fee levied</li>
        <li>Exchange for size or a different style/product is free for the first time</li>
        <li>A non-refundable shipping fee of RS 199 will be charged for any subsequent exchange requests or on orders placed using a creditote</li>
        <li>The validity of the store credit is only for a 1-year period from the date of issue</li>
        <li>Gift services and shipping fees (if any) are non-refundable3</li>
        <li>Return of gift cards at their monetary value isn"t possible and eGift cards once issued, can"t be refunded back</li>
        <li>In case of double payment, the refund will be processed in the original mode of payment, wh ich will be credited within 2 2-3 days</li>
        <li>Major defects upon any of the product will allow for reimbursement of the product by way of replacement of the respective pro ductwith another.</li>
      </ol>
    </div>
    </div>
  );
}

export default ReturnRefundPolicy;