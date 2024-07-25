// src/components/Testimonial.js
import React from 'react';
import './happy.css';
import Handbags from '../../assets/handbag.png';

const Happy = () => {
    return (
        <div className="testimonial-section">
            <h2>Happy Customers</h2>
            <div className="testimonial">
                <div className="quote-icon">“</div>
                <p>
                    The moment I landed on Jijivishaonline, I was instantly captivated by their vast collection of home decor items. From intricately crafted dokra figurines to charming terracotta utensils, every piece showcased the artistic brilliance of skilled craftsmen. Their fusion of traditional Indian art forms with contemporary aesthetics left me in awe.
                </p>
                <div className="customer-profile">
                    <img src={Handbags} alt="Satish Patel" />
                    </div>
                    <div>
                    <p className="customer-name">Satish Patel</p>
                </div>
            </div>
        </div>
    );
};

export default Happy;
