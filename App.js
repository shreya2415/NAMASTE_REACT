import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {
    id: "heading",
    xyx: "abc"
}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

  
/* <div id ="parent"></div>

const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "I am react!")));
*/

////const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(parent);  
