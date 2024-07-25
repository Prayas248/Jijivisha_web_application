import React from 'react'
import './handbags.css'
import handbag from '../../assets/handbag.png'
import { useNavigate } from 'react-router-dom'
function Handbags() {
    const navigate = useNavigate();
    return (
        <div className="head-section">
            <div>
                <div className="nav">
                    <div><h1>Handbags</h1></div> 
                    <div className="flex">
                        <div>
                            <img className="imgh" onClick={()=>{navigate(`/Women/Handbags/Potlis`)}}src={handbag}></img>
                            <p>POTLIS</p>
                        </div>

                        <div>
                            <img className="imgh" onClick={()=>{navigate(`/Women/Handbags/Sling Bags`)}}src={handbag}></img>
                            <p>SLING BAGS</p>
                        </div>

                        <div>
                            <img className="imgh" onClick={()=>{navigate(`/Women/Handbags/Tote Bags`)}}src={handbag}></img>
                            <p>TOTE BAGS</p>
                        </div>

                        <div>
                            <img className="imgh" onClick={()=>{navigate(`/Women/Handbags/Laptop Bags/ Sleeves`)}}src={handbag}></img>
                            <p>SLEEVES</p>
                        </div>

                        <div>
                            <img className="imgh" onClick={()=>{navigate(`/Women/Handbags/Clutches`)}}src={handbag}></img>
                            <p>CLUTCHES</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
       </div>
    )
}
export default Handbags