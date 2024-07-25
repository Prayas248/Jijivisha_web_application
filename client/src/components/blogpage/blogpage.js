import React from 'react';
import './blogpage.css';
import Handbags from '../../assets/handbag.png';
import { useEffect } from 'react';

function BlogPage() {
  useEffect(() => {

    window.scrollTo({
      top: 0,
       // Optional: Animate the scroll
    });
  
  }, []);

  return (
    <div className="container">
      <h1>Blog</h1>
      <div className="blog-grid">
        <div className="blog-card">
          <img src={Handbags} alt="Kalamkari" />
          <h3>Kalamkari artisans frequently draw inspiration from nature, mythology, and folklore</h3>
          <p>The age-old Indian art form of kalamkari continues to stand</p>
          <a href="#" className="read-more"><p>READ MORE » </p></a>
        </div>
        <div className="blog-card">
          <img src={Handbags} alt="Zari" />
          <h3>The zari industry has been revitalized by the resurgence of interest in conventional crafts</h3>
          <p>The delicate and age-old technique of zari work has a</p>
          <a href="#" className="read-more"><p>READ MORE » </p></a>
        </div>
        <div className="blog-card">
          <img src={Handbags} alt="Appliqué" />
          <h3>The stitching itself is the key component of the appliqué technique</h3>
          <p>Centuries-old appliqué is a testament to the artistry and deft</p>
          <a href="#" className="read-more"><p>READ MORE » </p></a>
        </div>
        <div className="blog-card">
          <img src={Handbags} alt="Kani" />
          <h3>A kani weave is a remarkable work of art</h3>
          <p>The origin of the Kani weavel is Kanihama, a tiny</p>
          <a href="#" className="read-more"><p>READ MORE » </p></a>
        </div>
        <div className="blog-card">
          <img src={Handbags} alt="Kutch" />
          <h3>The vibrant and exuberant hues of the arid landscape are embraced by Kutch embroidery</h3>
          <p>The vivid and dynamic technique of Kutch embroidery originated in</p>
          <a href="#" className="read-more"><p>READ MORE » </p></a>
        </div>
        <div className="blog-card">
          <img src={Handbags} alt="Jamdani" />
          <h3>The diamond in the Bengali handicraft crown, the jamdani weave embodies the skill and grace of traditional handloom weaving</h3>
          <p>The diamond in the Bengali handicraft crown, the jamdani weave</p>
          <a href="#" className="read-more"><p>READ MORE » </p></a>
        </div>
        <div className="blog-card">
          <img src={Handbags} alt="Kantha" />
          <h3>Bengal's rich cultural heritage is embodied in the acclaimed art form of kantha needlework</h3>
          <p>Bengal's rich cultural heritage is embodied in the acclaimed art</p>
          <a href="#" className="read-more"><p>READ MORE » </p></a>
        </div>
        <div className="blog-card">
          <img src={Handbags} alt="Gara" />
          <h3>Parsi Gara sarees are renowned for their beautiful, detailed embroidery</h3>
          <p>Parsi Gara sarees are renowned for their beautiful, detailed embroidery.</p>
          <a href="#" className="read-more"><p>READ MORE » </p></a>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;