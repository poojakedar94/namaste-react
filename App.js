// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "dsjnfd" },
//   "hello world from react"
// );
// console.log(heading); //it is an object
const parent = [
  React.createElement("div", { id: "parent" }, [
    React.createElement("h1", {}, "hello world"),
    React.createElement("h1", {}, "hello react"),
  ]),
  React.createElement("div", { id: "parent" }, [
    React.createElement("h1", {}, "hello world"),
    React.createElement("h1", {}, "hello react"),
  ]),
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //put this haeding into root element
