import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div>
      Hello World!
    </div>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";

const Header =()=>{
  return(
   <div className="header">
    <div className="logo-container">
     <img className="logo" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-express-by-alvinnavarra-designcrowd.png" />
     </div>
   <div className="nav-items">
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
    </ul>
   </div>

   </div> )
}

const RestaurantCard=(props)=>{
const {resObj}=props;
console.log(resObj?.card?.card?.info)
const {id,name,cloudinaryImageId,locality,areaName,cuisines,avgRating,sla}=resObj?.card?.card?.info;

  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+cloudinaryImageId}/>
      <h3>{name}</h3>
       <h4>{cuisines.join(", ")}</h4>
       <h4>{avgRating}</h4>
       <h4>{sla.deliveryTime}</h4>
    </div>
  )
}

const resObj= [
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "895966",
                  "name": "Boba Bhai",
                  "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/24/89a3640b-3f3a-446f-a22d-714f6fc6e1be_ad758601-024a-44e9-acd4-e4750cdbd255.jpg_compressed",
                  "locality": "Navarathna Agrahara",
                  "areaName": "PRESTIGE TECH CLOUD",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                      "Bubble Tea",
                      "Burger",
                      "Korean",
                      "Beverages",
                      "Fast Food",
                      "Juice and shake"
                  ],
                  "avgRating": 4.2,
                  "parentId": "361235",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "72",
                  "promoted": true,
                  "adTrackingId": "cid=27936752~p=1~adgrpid=27936752#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=895966~plpr=COLLECTION~eid=5ffed1ee-3a2d-4bea-adc2-19d9140bcdd5~srvts=1745413475313~collid=83637",
                  "sla": {
                      "deliveryTime": 39,
                      "lastMileTravel": 8.7,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "8.7 km",
                      "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                      "nextCloseTime": "2025-04-23 21:00:00",
                      "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                      "entityBadges": {
                          "textBased": {},
                          "imageBased": {},
                          "textExtendedBadges": {}
                      }
                  },
                  "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹79",
                      "logoCtx": {
                          "text": "BENEFITS"
                      }
                  },
                  "orderabilityCommunication": {
                      "title": {},
                      "subTitle": {},
                      "message": {},
                      "customIcon": {},
                      "commsStyling": {}
                  },
                  "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                      }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                      "aggregatedRating": {
                          "rating": "--"
                      }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  "campaignId": "27936752"
              },
              "analytics": {},
              "cta": {
                  "link": "swiggy://menu?restaurant_id=895966&source=collection&query=Burger",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
          }
      }
  },
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "334355",
                  "name": "McDonald's",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/6d7ab8fb-493d-4f53-b6f7-aa62268abe84_334355.jpg",
                  "locality": "Meenakunte Sadahalli Gate",
                  "areaName": "Devanahalli",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                      "Burgers",
                      "Beverages",
                      "Cafe",
                      "Desserts"
                  ],
                  "avgRating": 4.4,
                  "parentId": "630",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "959",
                  "sla": {
                      "deliveryTime": 31,
                      "lastMileTravel": 7.5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "7.5 km",
                      "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                      "nextCloseTime": "2025-04-23 23:45:00",
                      "opened": true
                  },
                  "badges": {
                      "imageBadges": [
                          {
                              "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                              "description": "Delivery!"
                          }
                      ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                      "entityBadges": {
                          "textBased": {},
                          "imageBased": {
                              "badgeObject": [
                                  {
                                      "attributes": {
                                          "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                                          "description": "Delivery!"
                                      }
                                  }
                              ]
                          },
                          "textExtendedBadges": {}
                      }
                  },
                  "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹199"
                  },
                  "orderabilityCommunication": {
                      "title": {},
                      "subTitle": {},
                      "message": {},
                      "customIcon": {},
                      "commsStyling": {}
                  },
                  "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                      }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                      "aggregatedRating": {
                          "rating": "--"
                      }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {},
              "cta": {
                  "link": "swiggy://menu?restaurant_id=334355&source=collection&query=Burger",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
          }
      }
  },
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "895967",
                  "name": "Seoul Burgers & Shakes",
                  "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/24/df806c58-b0a2-483b-b5ad-f23f000d7a96_21e3b9a8-ae2b-4fab-98c1-d57368b0a2ac.jpg_compressed",
                  "locality": "Navarathna Agrahara",
                  "areaName": "PRESTIGE TECH CLOUD",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                      "Burger",
                      "Bubble Tea",
                      "Fast Food",
                      "Beverages",
                      "Juice and shake"
                  ],
                  "avgRating": 4.3,
                  "parentId": "588706",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "81",
                  "promoted": true,
                  "adTrackingId": "cid=27936699~p=2~adgrpid=27936699#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=895967~plpr=COLLECTION~eid=a2dc5b66-e483-49b2-933c-b6130b0b5d50~srvts=1745413475313~collid=83637",
                  "sla": {
                      "deliveryTime": 42,
                      "lastMileTravel": 8.7,
                      "serviceability": "SERVICEABLE",
                      "slaString": "40-45 mins",
                      "lastMileTravelString": "8.7 km",
                      "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                      "nextCloseTime": "2025-04-23 21:00:00",
                      "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                      "entityBadges": {
                          "textExtendedBadges": {},
                          "textBased": {},
                          "imageBased": {}
                      }
                  },
                  "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹79",
                      "logoCtx": {
                          "text": "BENEFITS"
                      }
                  },
                  "orderabilityCommunication": {
                      "title": {},
                      "subTitle": {},
                      "message": {},
                      "customIcon": {},
                      "commsStyling": {}
                  },
                  "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                      }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                      "aggregatedRating": {
                          "rating": "--"
                      }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  "campaignId": "27936699"
              },
              "analytics": {},
              "cta": {
                  "link": "swiggy://menu?restaurant_id=895967&source=collection&query=Burger",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
          }
      }
  },
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "395276",
                  "name": "McDonald's Gourmet Burger Collection",
                  "cloudinaryImageId": "xr7msf2iwhi5eldvdndl",
                  "locality": "Sadahalli Gate",
                  "areaName": "Yelahanka",
                  "costForTwo": "₹600 for two",
                  "cuisines": [
                      "Burgers",
                      "Beverages",
                      "Cafe",
                      "Desserts"
                  ],
                  "avgRating": 4.3,
                  "parentId": "10761",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "57",
                  "sla": {
                      "deliveryTime": 33,
                      "lastMileTravel": 7.5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "7.5 km",
                      "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                      "nextCloseTime": "2025-04-23 23:45:00",
                      "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                      "entityBadges": {
                          "textExtendedBadges": {},
                          "textBased": {},
                          "imageBased": {}
                      }
                  },
                  "orderabilityCommunication": {
                      "title": {},
                      "subTitle": {},
                      "message": {},
                      "customIcon": {},
                      "commsStyling": {}
                  },
                  "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                      }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                      "aggregatedRating": {
                          "rating": "--"
                      }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {},
              "cta": {
                  "link": "swiggy://menu?restaurant_id=395276&source=collection&query=Burger",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
          }
      }
  },
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "798857",
                  "name": "Five Star",
                  "cloudinaryImageId": "d25bbddc9e87eb0c5ba19fb2734db7b5",
                  "locality": "Mukuttam Nagar",
                  "areaName": "Yelahanka",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                      "Fast Food",
                      "Snacks",
                      "North Indian"
                  ],
                  "avgRating": 3.8,
                  "parentId": "16949",
                  "avgRatingString": "3.8",
                  "totalRatingsString": "20",
                  "promoted": true,
                  "adTrackingId": "cid=27207123~p=4~adgrpid=27207123#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=798857~plpr=COLLECTION~eid=01dded3f-9a41-49f0-981f-632e09f7a837~srvts=1745413475313~collid=83637",
                  "sla": {
                      "deliveryTime": 60,
                      "lastMileTravel": 14.2,
                      "serviceability": "SERVICEABLE",
                      "slaString": "55-60 mins",
                      "lastMileTravelString": "14.2 km",
                      "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                      "nextCloseTime": "2025-04-23 23:00:00",
                      "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                      "entityBadges": {
                          "textExtendedBadges": {},
                          "textBased": {},
                          "imageBased": {}
                      }
                  },
                  "aggregatedDiscountInfoV3": {
                      "header": "10% OFF",
                      "subHeader": "UPTO ₹40",
                      "logoCtx": {
                          "text": "BENEFITS"
                      }
                  },
                  "orderabilityCommunication": {
                      "title": {},
                      "subTitle": {},
                      "message": {},
                      "customIcon": {},
                      "commsStyling": {}
                  },
                  "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                      }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                      "aggregatedRating": {
                          "rating": "--"
                      }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  "campaignId": "27207123"
              },
              "analytics": {},
              "cta": {
                  "link": "swiggy://menu?restaurant_id=798857&source=collection&query=Burger",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
          }
      }
  },
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "844818",
                  "name": "Five Star Chicken",
                  "cloudinaryImageId": "84a314610e8fdcf4d3b7b8d8e687dd7f",
                  "locality": "Yerthiganahalli",
                  "areaName": "Devanahalli",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                      "Snacks",
                      "Burgers"
                  ],
                  "avgRating": 4.2,
                  "parentId": "376",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "7",
                  "sla": {
                      "deliveryTime": 35,
                      "lastMileTravel": 7.4,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "7.4 km",
                      "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                      "nextCloseTime": "2025-04-23 23:45:00",
                      "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                      "entityBadges": {
                          "textBased": {},
                          "imageBased": {},
                          "textExtendedBadges": {}
                      }
                  },
                  "aggregatedDiscountInfoV3": {
                      "header": "10% OFF",
                      "subHeader": "UPTO ₹40",
                      "logoCtx": {
                          "text": "BENEFITS"
                      }
                  },
                  "orderabilityCommunication": {
                      "title": {},
                      "subTitle": {},
                      "message": {},
                      "customIcon": {},
                      "commsStyling": {}
                  },
                  "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                      }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                      "aggregatedRating": {
                          "rating": "--"
                      }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {},
              "cta": {
                  "link": "swiggy://menu?restaurant_id=844818&source=collection&query=Burger",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
          }
      }
  },
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "936472",
                  "name": "No.1 Burger",
                  "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/7/b28a5671-89eb-4b61-9d3b-30b7d54a7c86_573e1065-cc8b-4034-8e08-05876aa85d86.png",
                  "locality": "Bypass Road",
                  "areaName": "Devanahalli",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                      "Desserts",
                      "American",
                      "Fast Food"
                  ],
                  "avgRating": 3.9,
                  "parentId": "537476",
                  "avgRatingString": "3.9",
                  "totalRatingsString": "30",
                  "sla": {
                      "deliveryTime": 49,
                      "lastMileTravel": 12.1,
                      "serviceability": "SERVICEABLE",
                      "slaString": "45-50 mins",
                      "lastMileTravelString": "12.1 km",
                      "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                      "nextCloseTime": "2025-04-24 03:00:00",
                      "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                      "entityBadges": {
                          "textBased": {},
                          "imageBased": {},
                          "textExtendedBadges": {}
                      }
                  },
                  "orderabilityCommunication": {
                      "title": {},
                      "subTitle": {},
                      "message": {},
                      "customIcon": {},
                      "commsStyling": {}
                  },
                  "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                      }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                      "aggregatedRating": {
                          "rating": "--"
                      }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {},
              "cta": {
                  "link": "swiggy://menu?restaurant_id=936472&source=collection&query=Burger",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
          }
      }
  }
];


const Body=()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
       
     
       {
        resObj.map((restaurant)=>(
          <RestaurantCard key={restaurant.card?.card?.info.id} resObj={restaurant}/>
        ))
       }

       </div>
       </div>
        )

}


const AppLayout=()=>{
  return ( <div className="app">     
     <Header/>
     <Body/>
       </div>)
};




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
