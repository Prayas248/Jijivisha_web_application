
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { Register } from "./register/register"
import { Login } from "./login/login"
import "./logout.css"

export function Auth() {

  return (
    <div>
      <div className="redHeading">My Account</div>
      
        <Appbar />
        <Routes>
          <Route path="/auth/signup" element={<Register />}></Route>
          <Route path="/auth/login" element={<Login />}></Route>
        </Routes>
     
    </div>
  )
}

function Appbar() {

  const navigate = useNavigate();
  return (
    <div className="appBarContainer">

      <div className="paths" onClick={() => {
        console.log("signup clicked")
        navigate("/auth/login")
      }}>Login</div>
      <div className="paths" onClick={() => {
        navigate("/auth/signup")
      }}>Register</div>
    </div>
  )
}
export default Appbar;
