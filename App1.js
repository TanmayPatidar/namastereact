{
  /* <div id="parent">
<div id="child">
    <h1>

    </h1>
</div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Hello world from react JS I am h1 tag")
  )
);

console.log("object", parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
