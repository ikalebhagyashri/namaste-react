import { useEffect, useState } from "react";
import {useParams} from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {

    const resInfo=useRestaurantMenu(resId);
    const {resId}=useParams();

    useEffect(() => {
        fetchData();
    }, []);


   if(resInfo === null) return <><div>NO DATA FOUND</div></>
   
   console.log(resInfo)
   const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
   const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4].card.card;
    console.log("itemCards",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4].card.card)
   
    return (
  
        <div className="menu">
           <h1>{name}</h1>
            <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>(
                <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price ||item.card.info.defaultPrice}</li>
                ))}
            </ul>
        </div>
    )

}
export default RestaurantMenu;