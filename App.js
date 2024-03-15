import React from "react";
import ReactDOM from "react-dom/client";

//React Element

// const heading = React.createElement(
//     "h1",
//     {id : "heading"},
//     "Namaste React :)"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//Using JSX
//JSX is camelCase
const jsxHeading = <h1 className="head">Namaste Using JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
