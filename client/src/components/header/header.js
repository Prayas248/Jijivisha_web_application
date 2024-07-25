import React, { useEffect } from "react";
import "./header.css";
import logo from '../../assets/logo.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from "react";
import Womendrop from "./hover";
import Mandrop from "./hoverman";
import Fabricdrop from "./hoverfabric";
import Caredrop from "./hovercare";
import Homedrop from "./hoverhome";

import { Link, useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();
    const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);
    const [isManDropdownOpen, setIsManDropdownOpen] = useState(false);
    const [isFabricDropdownOpen, setIsFabricDropdownOpen] = useState(false);
    const [isCareDropdownOpen, setIsCareDropdownOpen] = useState(false);
    const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

    const handleWomenClick = () => {
        if(isManDropdownOpen){
            setIsManDropdownOpen(false)
        }
        if(isFabricDropdownOpen){
            setIsFabricDropdownOpen(false)
        }
        if(isCareDropdownOpen){
            setIsCareDropdownOpen(false)
        }
        if(isHomeDropdownOpen){
            setIsHomeDropdownOpen(false)
        }
        setIsWomenDropdownOpen(!isWomenDropdownOpen);
      };
      console.log(isWomenDropdownOpen)
      const handleManClick = () => {
        if(isWomenDropdownOpen){
            setIsWomenDropdownOpen(false)
        }
        if(isFabricDropdownOpen){
            setIsFabricDropdownOpen(false)
        }
        if(isCareDropdownOpen){
            setIsCareDropdownOpen(false)
        }
        if(isHomeDropdownOpen){
            setIsHomeDropdownOpen(false)
        }
        setIsManDropdownOpen(!isManDropdownOpen);
      };
      console.log(isManDropdownOpen)
      const handleFabricClick = () => {
        if(isWomenDropdownOpen){
            setIsWomenDropdownOpen(false)
        }
        if(isManDropdownOpen){
            setIsManDropdownOpen(false)
        }
        if(isCareDropdownOpen){
            setIsCareDropdownOpen(false)
        }
        if(isHomeDropdownOpen){
            setIsHomeDropdownOpen(false)
        }
        setIsFabricDropdownOpen(!isFabricDropdownOpen);
      };
      console.log(isFabricDropdownOpen)
      const handleCareClick = () => {
        if(isWomenDropdownOpen){
            setIsWomenDropdownOpen(false)
        }
        if(isManDropdownOpen){
            setIsManDropdownOpen(false)
        }
        if(isFabricDropdownOpen){
            setIsFabricDropdownOpen(false)
        }
        if(isHomeDropdownOpen){
            setIsHomeDropdownOpen(false)
        }
        setIsCareDropdownOpen(!isCareDropdownOpen);
      };
      console.log(isCareDropdownOpen)
      const handleHomeClick = () => {
        if(isWomenDropdownOpen){
            setIsWomenDropdownOpen(false)
        }
        if(isManDropdownOpen){
            setIsManDropdownOpen(false)
        }
        if(isFabricDropdownOpen){
            setIsFabricDropdownOpen(false)
        }
        if(isCareDropdownOpen){
            setIsCareDropdownOpen(false)
        }
        setIsHomeDropdownOpen(!isHomeDropdownOpen);
      };
      console.log(isHomeDropdownOpen)
    const [formdata,setFormdata] = useState({
        search:"",
    });
      const changehandler = (e) =>{
        e.preventDefault();
        setFormdata({...formdata,[e.target.name]:e.target.value})
        
      }
      const findhandler = () =>{
        navigate(`/search/${formdata.search}`);
      } 
console.log(isWomenDropdownOpen)
useEffect( ()=>{
    if(localStorage.getItem('token')){
        console.log(localStorage.getItem('token'));
      //  await fetch(`http://localhost:4000/getallwishlist/${localStorage.getItem('token')}`)
       // .then((res)=>res.json())
        //.then((data)=>{console.log(data)})

    }
    else{
        console.log("No user, token not found")
    }
    
},[])

    return (
        <div className="dashboard">
            <br></br>
            <center className="dash-head">EXTRA 15% OFF FOR FIRST TIME CUSTOMERS | T&C APPLY | CLICK TO COPY NEW15</center>
            <div className="flex flex-dash">
                <img src={logo} className="logo" onClick={()=>{
                    navigate('/');
                }}/>
                <input className="textarea" name="search" value={formdata.search} onChange={changehandler} type="text" placeholder="  Search for India's best products 🔍" ></input>
                <button onClick={findhandler}>Search</button>
                <Link to='/wishlist'><FavoriteBorderIcon /></Link>
                <LocalShippingOutlinedIcon />
                <Link to='/cart'><ShoppingCartOutlinedIcon /></Link>
               {!localStorage.getItem('token') &&  <button className="dash-button"><Link to='/auth'>Login 🔜</Link></button>}
                {localStorage.getItem('token') && <button className="dash-button" onClick={()=>{
                    localStorage.removeItem('token');
                    navigate('/auth');
                }}>Logout</button>}
            </div>


            <hr></hr>
            <div className="flex flex-nav">
            <div onClick={handleWomenClick}>WOMEN</div>
                <div onClick={handleManClick}>MEN</div>
                <div onClick={handleFabricClick}>FABRICS</div>
                <div onClick={handleCareClick}>PERSONAL CARE</div>
                <div onClick={handleHomeClick}>HOME DECOR</div>
            </div>
            {isWomenDropdownOpen && (
            <div onClick={handleWomenClick}>
            <Womendrop />
            </div>)}
            {isManDropdownOpen && (
            <div onClick={handleManClick}>
            <Mandrop />
            </div>)}
            {isFabricDropdownOpen && (
            <div onClick={handleFabricClick}>
            <Fabricdrop />
            </div>)}
            {isCareDropdownOpen && (
            <div onClick={handleCareClick}>
            <Caredrop />
            </div>)}
            {isHomeDropdownOpen && (
            <div onClick={handleHomeClick}>
            <Homedrop />
            </div>)}
            <hr></hr>
            

        </div>
    );
}
export default Dashboard;