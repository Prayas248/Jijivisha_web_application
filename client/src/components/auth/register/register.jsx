
import { useState } from "react"
import "./register.css"
import Appbar from "../logout";

export function Register() {
  const [formdata,setFormdata] = useState({
    email:"",
    password:""
  });
  const changehandler = (e) =>{
    e.preventDefault();
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }
  const register = async () =>{
    if(formdata){
      console.log(formdata);
      let responseData;
      await fetch('http://localhost:4000/signup',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formdata),
      }).then((response)=> response.json()).then((data)=>responseData=data)
  
      if(responseData.success){
        localStorage.setItem('token',responseData.token)
       
        window.location.replace("/");
        alert(responseData.message);
      }
    }
   
  }
  return (
    <>
    <Appbar />
    <div className="registerContainer">
      <p id="registerText">Register an account</p>
      <input name="email" value={formdata.email} onChange={changehandler} type="text" placeholder="Email address" />
      <input name="password" value={formdata.password} onChange={changehandler} type="password" placeholder="Password" />
      <p id="registerText2">A password will be sent to your email address.</p>
      <span id="registerText3">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
        <span id="redUnderlinedText"> privacy policy</span>
      </span>
      <button onClick={()=>{register()}}>Register</button>
    </div>
    </>
  )
}
