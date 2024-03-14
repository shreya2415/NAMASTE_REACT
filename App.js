const heading = React.createElement("h1", {
    id: "heading",
    xyx: "abc"
}, "Hello World from React!");
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


<div id ="parent">
    <div id ="child">
        <h1></h1>
    </div>
</div>

const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "I am react!")));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 

//git config --global user.email "you@example.com"