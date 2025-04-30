import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{
const [listOfRestaurants,setListofRestaurants]=useState([]);
const [filteredList,setFilteredList]=useState([]);
const [searchText,setSearchText]=useState([]);

useEffect(()=>{
    fetchData()
    },[]);

  const  fetchData= async()=>{
const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const json= await data.json();
console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
const onlineStatus=useOnlineStatus();
console.log("status,",onlineStatus)
if(onlineStatus===false)
   return (
  <div>
  <h1>Looks like you are offline</h1>
  </div>
  );

    return(
      <div className="body">
        <div className="flex items-center">
          <div className="m-4 p-4">
            <input  className="border border-solid border-black" type="text" value={searchText} onChange={(event)=>{setSearchText(event.target.value)}}/><span>
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
              const filteredList=listOfRestaurants.filter((res)=>{
                return res.info.name.toLowerCase().includes(searchText)})
                console.log("filtered list",filteredList)
                setFilteredList(filteredList)              
               }}>Search</button></span></div>
       <div className="m-4 p-4">
            <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{
                console.log("click event")
                const filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating > 4);
                setListofRestaurants(filteredList);
            }}>Top Rated Restaurant</button>
        </div>
        </div>
       
        <div className="flex flex-wrap">
         
       
         {
          filteredList.map((restaurant)=>(
            <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resObj={restaurant}/> </Link>
          ))
         }
  
         </div>
         </div>
          )
  
  }

  export default Body;