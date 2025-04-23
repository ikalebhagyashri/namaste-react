import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body=()=>{
const [listOfRestaurants,setListofRestaurants]=useState([]);

useEffect(()=>{
    fetchData()
    },[]);

  const  fetchData= async()=>{
const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const json= await data.json();
console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return(
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                console.log("click event")
                const filteredList = listOfRestaurants.filter((res) => res?.card?.card?.info?.avgRating > 4);
                
                setListofRestaurants(filteredList);
            }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
         
       
         {
          listOfRestaurants.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resObj={restaurant}/>
          ))
         }
  
         </div>
         </div>
          )
  
  }

  export default Body;