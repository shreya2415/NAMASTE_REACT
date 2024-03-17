import React from "react";
import ReactDOM from "react-dom/client";

/** React Food Ordering app Structure
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 * - Search
 * - RestrauntContainer
 *  - RestruantCard
 *  -- Img
 *  -- Name of Res, Rating, Cuisine , deliveryTime
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header =() =>{
    return(
        <div className = "header">
            <div className="logo">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    )
};
const RestruantCard = () =>{
    return (
   <div className="res-card">
            <h1> Megana Foods</h1>
   </div>
    )
};
const Body =() => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
               <RestruantCard />

            </div>
        </div>
    )
 };
 const AppLayout =() =>{
    return (
        <div className = "app">
                 <Header />
                 <Body />
        </div>
   
    )
 }
const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout />);