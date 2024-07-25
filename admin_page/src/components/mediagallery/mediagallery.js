
import React, { useEffect, useState } from 'react';
import './mediagall.css';
import { Form, useNavigate } from 'react-router-dom';

const ImageGallery = () => {
  //  3000 images
  const navigate = useNavigate();
  const [apidata,setApidata] = useState(null);
  const [image,setImage] = useState(false);

  const getAllOrders = async () => {
    await fetch(`http://localhost:4000/getAllImage`)
      .then((res) => res.json())
      .then((data) => { setApidata(data) })
      
  } 
  useEffect(()=>{
    getAllOrders();
  },[])
  const imagehandler = (e) =>{
    setImage(e.target.files[0]);
  }
  const Add_Image = async()=>{
    let formdata = new FormData();
    formdata.append('image',image);

    await fetch("http://localhost:4000/upload",{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formdata,
    }).then((resp)=>resp.json).then((data)=>{console.log(data)})
    getAllOrders();
  }

  return (
    <div className="library">
        <div className="mediabut">
        <h2>Library</h2>
         <input onChange={imagehandler} type='file' name='image' placeholder='Add new'/></div>
         <button className="but" onClick={()=>{Add_Image()}}>Click to confirm image</button>
      <div className="toolbar">
      <span style={{height:"40px",backgroundColor:"gray",cursor:"pointer"}} onClick={()=>{navigate("/Library")}}>Switch</span>
        <select>
          <option >All files</option>
        </select>
        <select>
          <option >All Dates</option>
        </select>
        <button className="mediabutton">Bulk Select</button>
      </div>
      <div className="grid">
        {apidata && apidata.slice(0, 16).map((image, index) => (
          <div className="image-container" key={index}>
            <img className="image-placeholder" src={image.image}/>
          </div>
        ))}
      </div>
      <button className="load-more">Load more</button>
      <div className="footer">Showing 12 of 3000</div>
    </div>
  );
};

export default ImageGallery;
