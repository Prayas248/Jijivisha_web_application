import React from "react";
import "./header.css";
import logo2 from '../../assets/logo2.jpeg';
import first from '../../assets/Image-1.webp'
import second from '../../assets/Image-2.webp'
import third from '../../assets/Image-3.webp'
import forth from '../../assets/Image-4.webp'


function First() {
   
    return (
        <>
            <div className="flex flex-outer most">
                <div className="main">
                    <div className="firstImage">
                        <img src={first}></img>
                        <div className="img-1">
                            <p>Beyond fashion,</p>
                            <p>Beyond ordinary</p>
                            <button className="shop-b">SHOP NOW ➡️</button>
                        </div>
                    </div>
                    <div className="flex upar">
                        <div className="flex flex-dashimg">
                            <div className="dashimg-button secondImage">
                                <img src={forth}></img>
                                <div className="but"><button>➡️</button></div>
                            </div>
                        </div>
                        <div className="flex flex-dashimg">
                            <div className="dashimg-button secondImage">
                                <img src={third}></img>
                                <div className="but"><button>➡️</button></div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="second lastImage">
                    <img src={second}></img>
                    <div className="img-2">
                        <p>Every Stitch is a</p>
                        <p>a work of Heart</p>
                        <button className="shop-b">SHOP NOW ➡️</button>
                    </div>
                </div>
            </div>




            <div className="featured">Featured In</div>
            <hr></hr>
            <div className="flex flex-logo">
                <img src={logo2} className="logo2"></img>
                <img src={logo2} className="logo2"></img>
                <img src={logo2} className="logo2"></img>
                <img src={logo2} className="logo2"></img>
            </div>
            <hr></hr>
            </>
       
    );
}
export default First;