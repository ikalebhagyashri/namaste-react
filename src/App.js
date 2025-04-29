import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUS from "./components/Contact";
//import Grocery from "./components/Grocery";
import ErrorNew from "./components/Error";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocery=lazy(()=>import('./components/Grocery'))
const AppLayout=()=>{

 

  return ( <div className="app">     
     <Header/>
     <Outlet/>
       </div>)
};


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} errorElement={<ErrorNew/>}>
        <Route path="/" element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUS />} />
        <Route path="grocery" element={<Suspense fallback={<h1>Loadinggg-----</h1>}><Grocery /></Suspense>} />
        <Route path="restaurants/:resId" element={<RestaurantMenu />} />
       </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);
