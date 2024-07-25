import React, { useState } from 'react';
import './media.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Library = () => {
  const navigate = useNavigate();
  const [apidata, setApidata] = useState(null);
  const [count,setcount] = useState(0);
  const [start,setStart] = useState(0);
  const [image,setImage] = useState(false);
  const [formdata,setFormdata] = useState({
    search:""
  });
  const changehandler = (e) =>{
    e.preventDefault();
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }
  var hello=0;
  const handleCountChange = (newCount) =>{
    console.log(newCount);
    setcount(newCount);
    hello = newCount*5;
    setStart(hello);
  } 
  
    const searcherji = async (formdata) =>{
      await fetch(`http://localhost:4000/searchImage/${formdata.search}`)
      .then((res) => res.json())
      .then((data) => { console.log(data) })
      
    }
  
  
  
  const getAllOrders = async () => {
    await fetch(`http://localhost:4000/getAllImage`)
      .then((res) => res.json())
      .then((data) => { setApidata(data) })
      
  } 
  useEffect(() => {
    if(formdata.search){
      searcherji(formdata)
    }
    else{
      getAllOrders();
    }
    
  }, [formdata]);
  
  
  useEffect(()=>{
    
    console.log(start)
  },[count])
  useEffect(() => {
    
    
    if(!formdata.search){
      getAllOrders();
    }
  }, []);
  {/*const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
*/}
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
    <div className="medialibrary">
        <div className="lib">
      <h1>Library</h1>
      <input onChange={imagehandler} type='file' name='image' placeholder='Add new'/></div>
         <button className="add-new-button" onClick={()=>{Add_Image()}}>Click to confirm image</button>
    
      <div className="mediatoolbar">
        <div className="mediafilter-container">
          <span style={{border:"1px solid black",backgroundColor:"gray",cursor:"pointer",padding:"5px"}} onClick={()=>{navigate("/imageGallery")}}>Switch</span>
          <select className="mediafilter">
            <option value="all">All Files</option>
          </select>
          <select className="filter">
            <option value="all">All Dates</option>
          </select>
          <input type="text" placeholder="Search" value={formdata.search} onChange={changehandler} name="search" className="search-bar" />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Size</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {apidata && apidata.map((image) => (
            <tr key={image.id}>
              <td>
                <img
                  src={image.image}
                  alt={image.name}
                  className="thumbnail"
                />
              </td>
              <td>{image.name}</td>
              <td>{image.size}</td>
              <td>{image.date.slice(0,10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mediacenter">
      <button className="mediaload-more">Load more</button>
      <div className="mediafooter">Showing 12 of 3000</div>
    </div>
    </div>
  );
};

export default Library;