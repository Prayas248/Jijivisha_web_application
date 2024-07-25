import React from 'react';
import handbag from '../../assets/handbag.png'
import './shop.css'
import saree from '../../assets/Saree.webp'
import lehenga from '../../assets/Lehengas.webp'
import kurta from '../../assets/Kurtas.webp'
import short_kurta from '../../assets/Short Kurtas.webp'
import kaftan from '../../assets/Kaftans.webp'
import shirts from '../../assets/Shirts.webp'
import men_kurta from "../../assets/Mens Kurtas.webp"
import Jewellery from "../../assets/Jewellery.webp"
import Mens_Accessories from "../../assets/Men's Accessories.webp"
import Home from "../../assets/Home Decor.webp"
import Kitchen from "../../assets/Kitchen & Dining.webp"
import { useNavigate } from 'react-router-dom';

function Shop(){
    const navigate = useNavigate();
    return(
        <div className='head-shop'>
            <center><h1 className='heading-shop'>Shop by Categories</h1></center>
            <div className='flex-con'>
                <div className='flex-shop'>
                    <img src={saree} onClick={()=>{navigate(`/Women/Saree`)}} className='img-shop'></img>
                    <div>SARRES</div>
                </div>

                <div className='flex-shop'>
                    <img src={lehenga} onClick={()=>{navigate(`/Women/Apparel/Lehengas`)}} className='img-shop'></img>
                    <div>LEHENGAS</div>
                </div>

                <div className='flex-shop'>
                    <img src={kurta} onClick={()=>{navigate(`/Women/Apparel/Kurtas`)}}className='img-shop'></img>
                    <div>KURTAS</div>
                </div>

                <div className='flex-shop'>
                    <img src={short_kurta} onClick={()=>{navigate(`/Women/Apparel/Short Kurti`)}} className='img-shop'></img>
                    <div>SHORT KURTAS</div>
                </div>

                <div className='flex-shop'>
                    <img src={kaftan} onClick={()=>{navigate(`/Women/Apparel/Kaftans`)}} className='img-shop'></img>
                    <div>KAFTANS</div>
                </div>

                <div className='flex-shop'>
                    <img src={shirts} onClick={()=>{navigate(`/Men/Apparel/Shirt`)}} className='img-shop'></img>
                    <div>SHIRTS</div>
                </div>

                <div className='flex-shop'>
                    <img src={men_kurta} onClick={()=>{navigate(`/Men/Apparel/Kurtas`)}} className='img-shop'></img>
                    <div>MEN'S KURTAS</div>
                </div>
            </div>
            <div  className='flex-con2'>
            <div className='flex-shop'>
                    <img src={Jewellery} onClick={()=>{navigate(`/Women/Jewellery`)}}className='img-shop'></img>
                    <div>JEWELLERY</div>
                </div>

                <div className='flex-shop'>
                    <img src={Mens_Accessories} onClick={()=>{navigate(`/Men/Accessories`)}}className='img-shop'></img>
                    <div>MEN'S ACCESSORIES</div>
                </div>

                <div className='flex-shop'>
                    <img src={Home} onClick={()=>{navigate(`/Home Decor`)}}className='img-shop'></img>
                    <div>HOME DECOR</div>
                </div>

                <div className='flex-shop'>
                    <img src={Kitchen} onClick={()=>{navigate(`/Home Decor/Kitchen and Dining`)}} className='img-shop'></img>
                    <div>KITCHEN AND DINING</div>
                </div>
                </div>
            <br></br>
        </div>
    );
}
export default Shop;