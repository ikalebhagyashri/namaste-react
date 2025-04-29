import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import {Link} from "react-router";
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


    return(
      <div className="body">
        <div>
          <div><input type="text" value={searchText} onChange={(event)=>{setSearchText(event.target.value)}}/><span>
            <button onClick={()=>{
              const filteredList=listOfRestaurants.filter((res)=>{
                return res.info.name.toLowerCase().includes(searchText)})
                console.log("filtered list",filteredList)
                setFilteredList(filteredList)              
               }}>Search</button></span></div>
        </div>
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                console.log("click event")
                const filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating > 4);
                setListofRestaurants(filteredList);
            }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
         
       
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