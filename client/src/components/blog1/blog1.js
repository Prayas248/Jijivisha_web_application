import React, { useEffect } from 'react';
import './blog1.css';
import Kalamkari from '../../assets/Kalamkari.png';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const params = useParams();
  const [apidata, setApidata] = useState(null);
  const [comment,setComment] = useState(null);
  const getBlogInfo = async (id) => {
    if (id) {
      await fetch(`http://localhost:4000/getblogId/${id}`)
        .then((res) => res.json())
        .then((data) => { setApidata(data) })

    }
  }
  const getBlogComments = async (id) => {
    if (id) {
      await fetch(`http://localhost:4000/getAllCommentforBlog/${id}`)
        .then((res) => res.json())
        .then((data) => { setComment(data) })

    }
  }
  const [produ,setProdu] = useState('');
  useEffect(() => {
    const productId = params.id;
    window.scrollTo({
      top: 0,
      // Optional: Animate the scroll
    });
    console.log(productId)
    setProdu(productId)
    getBlogInfo(productId);
    getBlogComments(productId);
  }, [params]);
  

  const [newComment, setNewComment] = useState({
    by: {
      body: '',
      name: '',
      email: '',
      token: localStorage.getItem('token'),
    }
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update the nested "by" property using spread syntax
    setNewComment((prevComment) => ({
      ...prevComment,
      by: {
        ...prevComment.by,
        [name]: value, // Update the specific property based on name
      },
    }));
  };
  const createComment = async (info) => {
    if(produ && info.by.token){
    await fetch(`http://localhost:4000/createBlogComment/${produ}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    }).then(alert("Done scene"))
  }
  getBlogComments(produ);
  }
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Submit the newComment data to your backend (implementation not shown)
    console.log('Submitting comment:', newComment);

    createComment(newComment);


    // Optionally, reset the form after submission
    setNewComment({
      by: {
        body: '',
        name: '',
        email: '',
      },
    });


  };


  return (
    <div className="article-container">
      <h2 className="article-title">
        {apidata && apidata.title}
      </h2>
      <p className="article-meta">{apidata && apidata.date.slice(0, 10)} / by {apidata && apidata.author} / in {apidata && apidata.category}</p>
      <img src={apidata && apidata.image} alt="Kalamkari art" className="article-image" />
      <div className="article-content">
        <p>
          The age-old Indian art form of Kalamkari continues to stand the test of time employing a painstaking technique spanning generations to weave beautiful motifs and stories onto fabric.
          The term "Kalamkari" refers to the process of hand-painting or block-printing on cloth. It originates from the Persian terms "kalam," which means pen, and "kari," which means workmanship.
          The origins of the Kalamkari can be found in ancient Indian books and traditions, where references point to the language development as early as the seventh century.
        </p>
        <p>The two most well-known Kalamkari traditions, Srikalahasti and Machilipatnam, have a varied history and come from separate parts of Andhra Pradesh, India. The elaborate temple paintings and Hindu epics serve as sources of inspiration for the mythological Srikalahasti style. On the other hand, the Machilipatnam style—which draws inspiration from Mughal and Persian aesthetics—often uses vivid colors and flowery designs. These geographical differences emphasize Kalamkari’s adaptability and variety, which make it an exciting and ever-evolving art form.</p>
        <p>In order to create fine lines, painters in the Srikalahasti style utilize a long bamboo or palm date stick that has a cotton or hair bundle attached to one end. After being immersed into a solution containing iron filings and water, the “kalam” or pen interacts with the tamarind seeds paste to produce a black outline. After allowing the fabric to dry, expert artisans use vivid natural dyes to carefully fill in the details. In contrast, the Machilipatnam technique prints elaborate motifs onto fabric using manually carved wooden blocks. To produce a final result that is rich and nuanced, the procedure is done numerous times, adding colors and patterns.</p>
        <p>Natural colors made from extracts of plants and minerals are one of Kalamkari’s defining characteristics. Commonly utilized colors include indigo, madder, myrobalan, and alum, which give the artwork a distinctly earthy and organic feel. The use of natural dyes helps to the finished piece’s distinct visual appeal in addition to making Kalamkari more environmentally friendly</p>
        <p>Kalamkari artisans frequently draw inspiration from nature, mythology, and folklore. Srikalahasti Kalamkari often features themes from the epics the Ramayana and the Mahabharata as well as representations of gods and heavenly beings. The Machilipatnam style, on the other hand, harmoniously combines Persian and Indian cultural sensibility with motifs of flowers, birds, and geometric patterns.</p>
        <p>Over time, kalamkari has broken free from its conventional confines and into modern fashion, interior design, and artistic expression. Innovative techniques are being explored by designers and artisans, who are fusing modern aesthetics with traditional Kalamkari to produce a synthesis of the avant-garde and the classical. This rebirth guarantees Kalamkari’s relevance in a world that is changing quickly while also protecting its cultural legacy.</p>
        <p>In the contemporary day, Kalamkari has difficulties despite its ongoing appeal. The traditional craft is under threat from the accessibility of synthetic colors and the rising demand for mass-produced fabrics. Furthermore, it is crucial to transmit the understanding from one generation of people to the next because Kalamkari is a time-consuming art and requires complex abilities. Protecting this priceless cultural asset will require sustained ethical manufacturing methods, support for artisan groups, and awareness-raising. In conclusion, Kalamkari is proof of India’s artistic ability and depth of culture. Its richly traditional past has set the way for a dynamic, ever-evolving art form that still enthralls audiences around the globe. In addition to appreciating the exquisite workmanship of the Kalamkari we also understand the need of protecting and fostering this legacy in order to guarantee that tales will be woven for future generations by the power of the ink and the brilliant colors of natural dyes.</p>
      </div>
      <div className="comments-section">
        <h2 className="cen">{comment && comment.length} Comments</h2>
        {comment && comment.map((comment) => (
          <div key={comment.by.id} className="comment">
            <div className="comment-author">
              <div className="author-avatar"></div>
              <span className="author-name">{comment.by.name}</span>
            </div>
            <div className="comment-meta">
              <span>{comment.by.date.slice(0,10)}</span>
            </div>
            <div className="comment-content">
              <p>{comment.by.body}</p>
            </div>
            <div className="comment-reply">
              <a href="">Reply</a>
            </div>
          </div>
        ))}
        <h2 className="cen">Leave a Reply</h2>
        <form className="reply-form" onSubmit={handleSubmit}>
          <textarea
            name="body"
            onChange={handleChange}
            placeholder="Content"
            required
          />
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            required
          />
          {/*<input
          type="url"
          name="website"
          value={newComment.website}
          onChange={handleChange}
          placeholder="Website"
        />*/}
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default ArticlePage;
