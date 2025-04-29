import { LOGO_URL } from "../utils/constants";
import { useEffect,useState} from "react";
import {Link} from "react-router";
const Header =()=>{

     useEffect(()=>{
    console.log("0 printed")
      },[0])
    
      useEffect(()=>{
        console.log("1 printed")
          },[1])

   const [button,setButton]=useState('LogIn')

    return(
     <div className="header">
      <div className="logo-container">
       <img className="logo" src={LOGO_URL}/>
       </div>
     <div className="nav-items">
      <ul>
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/about">About Us </Link></li>
          <li><Link to="/contact">Contact Us </Link></li>
          <li>Cart</li>
      </ul>
    
     </div>
     <button onClick={()=>{button=='LogIn'?setButton('LogOut'):setButton('LogIn')}}>{button}</button>
     </div> )


  }

  export default Header;