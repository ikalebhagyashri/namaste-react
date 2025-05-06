import { CDN_URL} from "../utils/constants";
const RestaurantCard=(props)=>{
    const {resObj}=props;
    console.log(resObj?.info)
    const {id,name,cloudinaryImageId,locality,areaName,cuisines,avgRating,sla}=resObj?.info;
    
      return(
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-600" >
          <img className="rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
          <h3 className="font-bold py-4 text-lg">{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{avgRating}</h4>
           <h4>{sla.deliveryTime}</h4>
        </div>
      )
    }

   //Higher order component

   export const isOpenLable=(RestaurantCard)=>{
    return (props)=>{
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
   }


    export default RestaurantCard;