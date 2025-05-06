import { useEffect, useState } from "react";
import {useParams} from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {

    
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
     const [showIndex,setShowIndex]=useState(0);


   if(resInfo === null) return <><div>NO DATA FOUND</div></>
   
   console.log(resInfo)
   const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
   //const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4].card.card;
    console.log("cuisins",resInfo?.cards[2]?.card?.card?.info)
   const restaurantCategories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>
    c.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    return (
  
        <div className="text-center">
           <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}-{costForTwoMessage}</p>
           {restaurantCategories.map((category,index)=>(
           <RestaurantCategory 
           key={category.card.card.title} 
           data={category.card.card}
           showItems={index==showIndex?true:false}
           setShowIndex={()=>setShowIndex(index)}
           />
           ))}
          
        </div>
    )

}
export default RestaurantMenu;