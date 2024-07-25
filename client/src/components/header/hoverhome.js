import React from "react";
import "./hover.css";
import Handbags from '../../assets/handbag.png';
import { useNavigate } from "react-router-dom";
import Photo from '../../assets/photo.png';


const Decor = ['Candles and Candle Stands','Clocks And Mirror Walls','Garden','Incenses and Fragrances','Jars & Canisters','Lamps and Lanterns','Picture Frames','Stationery','Storage and Baskets','Silver Home Accents','Table Top Accessories'
];
const Kitchen =['Dining','Trays, Platters & Bowls','Kitchenware','Drinkware','Coasters and Trivets','Cups & Mugs','Pitcher and Flasks','Water Bottle'];
const Others= ['Bath Linen','Bed Linen','Curtains','Furniture','Pooja Items','Table Linen'];


const Homedrop = ({name,subname}) =>{
    
    const hello ={
        
            name:"second",
            id:1,
            old_price:10,
            new_price:32,
            image:"hello",
            category:{
              maincategory:"Home",
              subcategories:"Decor",
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
    const handleclick = async (Women,Apparel,Sub)=>{
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
        
    }
    const navigate = useNavigate();
    return(
        <>
            <div className="Main_box">
                <div className="Apparel">
                    
                    <div className="top" onClick={()=>{navigate(`/Home Decor/Decor`)}}><h2>Decor</h2></div>
                    {Decor.map((Apparel,key)=>(
                        <span onClick={()=>{navigate(`/Home Decor/Decor/${Apparel}`)}} key={key}>{Apparel}</span>
                    ))}
                </div>
                <div className="Apparel">
                    
                    <div className="top" onClick={()=>{navigate(`/Home Decor/Kitchen and Dining`)}} ><h2>Kitchen and Dining</h2></div>
                    {Kitchen.map((Apparel,key)=>(
                        <span onClick={()=>{navigate(`/Home Decor/Kitchen and Dining/${Apparel}`)}}key={key}>{Apparel}</span>
                    ))}

                </div>
                <div className="Apparel">
                    
                    <div className="top" onClick={()=>{navigate(`/Home Decor/Others`)}} ><h2>Others</h2></div>
                    {Others.map((Apparel,key)=>(
                        <span onClick={()=>{navigate(`/Home Decor/Others/${Apparel}`)}} key={key}>{Apparel}</span>
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



export default Homedrop;