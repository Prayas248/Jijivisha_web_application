import React from 'react'
import './elegant.css'
import handbag from '../../assets/handbag.png'
import { useNavigate } from 'react-router-dom'
function Elegants() {
    const navigate = useNavigate()
    return (
        <div className="head-section">
            <div>
                <div className="nav">
                    <div><h1>Elegant jewellery</h1></div> 
                    <div className="flex">
                        <div>
                            <img className="imgh" onClick={()=>{navigate(`/Women/Jewellery/Cuffs/ Bracelets/ Bangles`)}} src={handbag}></img>
                            <p>BANGLES</p>
                        </div>

                        <div>
                            <img className="imgh" onClick={()=>{navigate(`/Women/Jewellery/Necklaces & Pendants`)}} src={handbag}></img>
                            <p>NECKLACE</p>
                        </div>

                        <div>
                            <img className="imgh" onClick={()=>{navigate(`/Women/Jewellery/Anklets`)}}src={handbag}></img>
                            <p>ANKLETS</p>
                        </div>

                        <div>
                            <img className="imgh"onClick={()=>{navigate(`/Women/Jewellery/Cuffs/ Bracelets/ Bangles`)}} src={handbag}></img>
                            <p>BRACELETS</p>
                        </div>

                        <div>
                            <img className="imgh" onClick={()=>{navigate(`/Women/Jewellery/Earrings`)}}src={handbag}></img>
                            <p>EARRINGS</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
       </div>       
    )
}
export default Elegants