import { LOGO_URL } from "../utils/constants";
import { useEffect,useState,useContext} from "react";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header =()=>{

    // const [counter, setCounter]=useState(1);

    //  useEffect(()=>{
    //     setCounter(prevState=>prevState+1)
       
    //   },[])
    // console.log(counter)
    //   useEffect(()=>{
    //     console.log("1 printed")
    //       },[1])

   const [button,setButton]=useState('LogIn')
   const onlineStatus=useOnlineStatus();
   const {loggedInUser}=useContext(UserContext)
   
   const cartItems=useSelector((store)=>store.cart.items)
   
   return(
     <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-violet-300 lg:bg-cyan-600">
      <div className="logo-container">
       <img className="w-36" src={LOGO_URL}/>
       </div>
     <div className="flex items-center">
      <ul className="flex p-4 m-4">
        <li className="px-4">Online Status: {onlineStatus?'Online':'Offline'} </li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"> <Link to="/about">About Us </Link></li>
          <li className="px-4"> <Link to="/contact">Contact Us </Link></li>
          <li className="px-4"><Link to="/grocery">Grocery </Link></li>
          <li className="px-4 font-bold text-xl"><Link to="/cart">Cart  {cartItems.length} Items </Link></li>

          <button onClick={()=>{button=='LogIn'?setButton('LogOut'):setButton('LogIn')}}>{button}</button>
          <li className="px-4">{loggedInUser}</li>
      </ul>
    
     </div>
    
     </div> )


  }

  export default Header;