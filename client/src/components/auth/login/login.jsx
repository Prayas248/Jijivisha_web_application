
import { AppBar } from "@mui/material";
import "./login.css"
import { useState } from "react"
import Appbar from "../logout";

export function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [formdata,setFormdata] = useState({
    email:"",
    password:""
  });
  const changehandler = (e) =>{
    e.preventDefault();
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }
  const login = async () =>{
    if(formdata){
      console.log(formdata);
      let responseData;
      await fetch('http://localhost:4000/login',{
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
    <div className="loginContainer">
      <input type="email" placeholder="Username or email address" name="email" value={formdata.email} onChange={changehandler}/>

      <input type="password" placeholder="Password"name="password" value={formdata.password} onChange={changehandler}/>

      <div className="info">
        <label>
          <input type="checkbox" placeholder="remember me" id="checkbox" onChange={(e) => {
            setRemember(e.target.checked)
          }} />
          Remember me
        </label>
        <p className="redForgotPassword">forgot your password?</p>
      </div>

      <button onClick={()=>{login()}}>Login</button>
    </div >
    </>
  )
}
