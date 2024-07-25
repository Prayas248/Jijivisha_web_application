import React from "react";
import "./hover.css";
import Handbags from '../../assets/handbag.png';
import { useNavigate } from "react-router-dom";
import Photo from '../../assets/photo.png';


const apparel = ['Bottom Wear','Dress Material','Dupattas','Jacket & Shrugs','Kaftans','Kurtas','Kurta Sets','Lehengas','Lounge Wear','Shawls & Stoles','Short Kurti','Tops & Tunics'];
const Sarees = ['Applique Work','Baatik','Bandhej','Banarasi','Bishnupuri','Chanderi','Ikkat','Jamdani','Kalamkari','Kashmiri Hand Embroidery','Hand Block Printed','Hand Embroidereds','Hand Painted',
'Handwoven Sarees','Leheriya','Madhubani','Organza/Net','Patola','Sambalpuri' ];


const Jewellery = [
    'Anklets','Cuffs/ Bracelets/ Bangles'];
    
    const sub = ['Metal','Laakh','Crystal','Sheep'];
    const last =['Earrings','Hair Accessories','Necklaces & Pendants','Nosepins','Rings','Waist Belts'
];


const handbags = ['Clutches','Laptop Bags/ Sleeves','Potlis','Sling Bags','Tote Bags','Travel Kits','Wallets'];


const footwear = ['Juttis','Slip-Ons','Sandals'];

const Womendrop = () =>{
    
    const hello ={
        
            name:"second",
            id:1,
            old_price:10,
            new_price:32,
            image:"hello",
            category:{
              maincategory:"Women",
              subcategories:"Apparel",
              lastcategories:"Kurta"
            },
            material:"cotton",
            available:"Yes",
            product_details:"Good Product",
            material_care:"Care"
          
    };
    const handle = async (props) =>{
        await fetch(`http://localhost:4000/addproduct`,{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(props),
        })
        .then((res)=>res.json())
        .then((data)=>{console.log(data)})
    
    }
   { const handleclick = async (Women,Apparel,Sub)=>{
        if(!Sub){
            await fetch(`http://localhost:4000/findspecific/${Women}/${Apparel}/${Sub}`)
        .then((res)=>res.json())
        .then((data)=>{console.log(data)})
        }
        
        else{
            await fetch(`http://localhost:4000/findspecific/${Women}/${Apparel}/${Sub}`)
            .then((res)=>res.json())
            .then((data)=>{console.log(data)})
        }
        handle(hello);
        
    }}
    const navigate = useNavigate();
    
    return(
        <>
            <div className="Main_box">
                <div className="Apparel">
                    
                    <div className="top" onClick={()=>{navigate(`/Women/Apparel`)}}><h2>Apparel</h2></div>
                    {apparel.map((Apparel,key)=>(
                        <span onClick={()=>{navigate(`/Women/Apparel/${Apparel}`)}} key={key}>{Apparel}</span>
                    ))}
                </div>
                <div className="Apparel">
                    
                    <div className="top" onClick={()=>{navigate(`/Women/Saree`)}}><h2>Sarees</h2></div>
                    {Sarees.map((Apparel,key)=>(
                        <span onClick={()=>{navigate(`/Women/Saree/${Apparel}`)}} key={key}>{Apparel}</span>
                    ))}

                </div>
                <div className="Apparel">
                    
                    <div className="top" onClick={()=>{navigate(`/Women/Jewellery`)}}><h2>Jewellery</h2></div>
                    {Jewellery.map((Apparel,key)=>(
                        <span onClick={()=>{navigate(`/Women/Jewellery/${Apparel}`)}} key={key}>{Apparel}</span>
                    ))}
                    {sub.map((Apparel,key)=>(
                        <span key={key} onClick={()=>{navigate(`/Women/Jewellery/Cuffs-Bracelets-Bangles/${Apparel}/`)}} className="subclass">{Apparel}</span>
                    ))}
                    {last.map((Apparel,key)=>(
                        <span onClick={()=>{navigate(`/Women/Jewellery/${Apparel}`)}} key={key}>{Apparel}</span>
                    ))}

                </div>

                <div className="Apparel">
                    
                    <div className="top" onClick={()=>{navigate(`/Women/Handbags`)}}><h2>Handbags</h2></div>
                    {handbags.map((Apparel,key)=>(
                        <span onClick={()=>{navigate(`/Women/Handbags/${Apparel}`)}} key={key}>{Apparel}</span>
                    ))}
                    <div className="top" onClick={()=>{navigate(`/Women/Footwear`)}}><h2>Footwear</h2></div>
                    {footwear.map((Apparel,key)=>(
                        <span onClick={()=>{navigate(`/Women/Handbags/${Apparel}`)}} key={key}>{Apparel}</span>
                    ))}
                    

                </div>
                <div className="photo">
                <img className="pic" src={Photo}></img>
                    <img className="pic" src={Photo}></img>
                </div>
            </div>
        </>
    );


}



export default Womendrop;