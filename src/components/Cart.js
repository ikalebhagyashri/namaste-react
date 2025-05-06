import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";
const Cart=()=>{
    const dispatch=useDispatch();
 
     const handleClearCart=()=>{
        dispatch(clearCart())
     }


    const cartItems=useSelector((store)=>store.cart.items)
    return(
        <div className="text-center m-5 p-5">
          <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
       
        <button onClick={handleClearCart}
        className="p-2 m-2 bg-black text-white rounded-lg">Clear Cart</button>
        {cartItems.length ===0 && <h1>Your card is empty . Add items to your cart</h1>}
        
        <ItemList items={cartItems}/>
        </div>
        </div>
    )
}

export default Cart;