import React from 'react';
import './review.css';
import { useState,useEffect } from 'react';
//localStorage.getItem('token')
function Review({id}) {
  const reviews = [
    { rating: 4.0, text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar leo neque tempus lacus. Ornare nisl.', date: '12 Mar, 23', author: 'Anushka Sharma' },
    { rating: 3.2, text: 'Lorem ipsum dolor sit amet consectetur. Tristique enim ullamcorper risus auctor scelerisque convallis velit fames cursus. Pharetra maecenas sed interdum pellentesque id morbi. Elit nisi donec enim aenean purus integer vitae a. Sem vitae diam laoreet nec risus quis in.', date: '12 Mar, 23', author: 'Anushka Sharma' },
    { rating: 2.9, text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar leo neque tempus lacus. Ornare nisl.Lorem ipsum dolor sit amet consectetur. Pulvinar leo neque tempus lacus. Ornare nisl.', date: '12 Mar, 23', author: 'Anushka Sharma' },
    { rating: 4.0, text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar leo neque tempus lacus. Ornare nisl.', date: '12 Mar, 23', author: 'Anushka Sharma' },
    { rating: 4.0, text: 'Lorem ipsum dolor sit amet consectetur. Pulvinar leo neque tempus lacus. Ornare nisl.', date: '12 Mar, 23', author: 'Anushka Sharma' }
  ];
  const [formdata,setFormdata] = useState({
    body: "",
    user_email:"",
    user_name:"",
    rating:"",
    product:id,
    token:localStorage.getItem('token')
  });
  const [rating, setRating] = useState(0); // State to store the rating
  const [hoverRating,sethoverRating] = useState(-1);
  const handleHover = (index) => {
    sethoverRating(index); // Update rating on hover
  };

  const handleClick = (index) => {
    setFormdata((prevFormData) => ({
      ...prevFormData,
      rating: index, // Update the rating property
    })); // Update rating on click and store index
  };
  const changehandler = (e) =>{
    e.preventDefault();
    setFormdata({...formdata,[e.target.name]:e.target.value})
    
  }
 const [apidata, setApidata] = useState(null);
 const getAll = async (id) => {
  if (id) {
    await fetch(`http://localhost:4000/getallreviews/${id}`)
      .then((res) => res.json())
      .then((data) => { setApidata(data) })
  }
  

}
  const handlesubmit = async () =>{
    console.log(formdata)
    if(formdata.body && formdata.user_name && formdata.user_email && formdata.rating && formdata.product && formdata.token){
      await fetch(`http://localhost:4000/addreview`,{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formdata),
        })
        
        
        getAll(id);
    }
  }
  useEffect(()=>{
    getAll(id);
  },[]);
  useEffect(()=>{
    console.log(formdata.rating)
  },[formdata.rating]);
  return (
    <div className="reviewsContainer">
      <div className="reviewsList">
        <h2>Reviews</h2>
        {apidata && apidata.map((review, index) => (<>
          <div className="reviewItem" key={index}>
            <div className="reviewRating">
              <span className={`starRating ${review.rating >= 4 ? 'green' : review.rating >= 3 ? 'yellow' : 'red'}`}>
                ★ {review.rating}
              </span>
            </div>
            <div className="reviewContent">
              <p>{review.body}</p>
              <div className="reviewFooter">
                <span className="rev">{review.date.slice(0,10)}--     </span>
                <span className="rev">{review.user_name}</span>
              </div>
            </div>
            
          </div>
          <hr/></>
        ))}
      </div>
      <div className="reviewSummary">
        <div className="reviewbox">
        <div className="summaryHeader">
          <span className="overallRating">4.0 ★</span>
          <span>Based on 64 reviews</span>
        </div>
        <div className="ratingDistribution">
          <div className="ratingRow">
            <span>5 ★</span>
            <div className="bar"><div className="barFilled" style={{width: '50%'}}></div></div>
            <span>12</span>
          </div>
          <div className="ratingRow">
            <span>4 ★</span>
            <div className="bar"><div className="barFilled" style={{width: '70%'}}></div></div>
            <span>20</span>
          </div>
          <div className="ratingRow">
            <span>3 ★</span>
            <div className="bar"><div className="barFilled" style={{width: '30%'}}></div></div>
            <span>6</span>
          </div>
          <div className="ratingRow">
            <span>2 ★</span>
            <div className="bar"><div className="barFilled" style={{width: '0%'}}></div></div>
            <span>0</span>
          </div>
          <div className="ratingRow">
            <span>1 ★</span>
            <div className="bar"><div className="barFilled" style={{width: '10%'}}></div></div>
            <span>2</span>
          </div>
        </div>
        </div>
        <div className="reviewForm">
          <h3>Add Your Rating</h3>
          <div className="ratingStars">
          {[...Array(5)].map((star, index) => (
        <span
          key={index}
          style={{ cursor: 'pointer', ...(index < hoverRating ? { color: 'yellow' } : {}) }} // Apply yellow class based on newRating
          onMouseEnter={() => handleHover(index + 1)} // Pass index + 1 to handleHover
          onClick={() => handleClick(index + 1)} // Pass index + 1 to handleClick
        >
        
          ★
        </span>
      ))}
          </div>
          <textarea placeholder="Write your review here"value={formdata.body} onChange={changehandler} name="body"></textarea>
          <div className="formFields">
            <input type="text" value={formdata.user_name} onChange={changehandler} name="user_name" placeholder="Name *" />
            <input type="email" placeholder="Email *" value={formdata.user_email} onChange={changehandler} name="user_email" />
          </div>
          <button onClick={handlesubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Review;
