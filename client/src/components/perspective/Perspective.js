import React from 'react';
import './Perspective.css';

const OurPerspective = () => {
  return (
    <div className="perspective-container">
      <div className="image-container">
        <img src="link-to-image.jpg" alt="Woman in saree" className="perspective-image" /> 
        {/* Replace 'link-to-image.jpg' with your actual image URL */}
      </div>
      <div className="text-container">
        <h1>Jijivisha: <span className="highlight">Our Perspective</span></h1>
        <p>
          India wears her beauty in the colorful textiles, breathtaking ornaments, and inspiring stories that come alive in her streets. 
          There is magic in the hands that work the loom, in the eyes that pore over a needle, in the brushstrokes that paint life. 
          And yet few things can sum it all up, can capture the essence in a box. 
          At Jijivisha, we have begun a fascinating journey, a humble attempt to bring India a little closer to the world.
        </p>
        <p>
          We believe in sharing stories and celebrating how each handmade object can come to represent something much bigger than itself. 
          Traveling to the colorful corners of this fascinating country, we curate unique and exclusive collections that represent India’s finest craft-based designs, 
          so that you can savor the delightful treasures at leisure, with us. Immerse yourself in the beauty of India.
        </p>
        <p>
          Shop for handmade sarees, dupattas, jewelry, shawls, home decor, art, and more.
        </p>
      </div>
    </div>
  );
};

export default OurPerspective;
