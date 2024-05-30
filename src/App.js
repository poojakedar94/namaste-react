import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import Header from "./components/Header";
import RestarauntMenuPage from "./components/RestarauntMenuPage";
const Grocery = lazy(() => import("./components/Grocery"));
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const Cart = lazy(() => import("./components/Cart"));
// provided store to the application with Provider from react-redux
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactus",
        element: <Contactus />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>...Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<h1>...Loading</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurent/:resId", //dynamicRoute
        element: <RestarauntMenuPage />,
      },
    ],
  },
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "dsjnfd" },
//   "hello world from react"
// );

// React.createElement ===> ReactElement( js object) ===> htmlElement (render)
// console.log(heading); //it is an object
// const parent = [
//   React.createElement("div", { id: "parent" }, [
//     React.createElement("h1", {}, "hello world"),
//     React.createElement("h1", {}, "hello react"),
//   ]),
//   React.createElement("div", { id: "parent" }, [
//     React.createElement("h1", {}, "hello world"),
//     React.createElement("h1", {}, "hello react"),
//   ]),
// ];

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); //put this heading/parent into root element

// const jsxHeading = <h1>namste React</h1> // jsx is not html inside javascript, it is html like syntax, React element using jsx

// so parent & jsxHeading is react element ===>object ===both are one and the same
// console.log(parent)
// console.log(jsxHeading)
// JSX ==> babel transpiled to React.createElement ==> ReactElement (js object) ==> Html element (render) --->done by babel (basically takes all jsx code convert to react element now react can understand the code)
//jsx - babel transpiled before reaches to javascript engine by using parcel - Babel transpilar babel is javascript compiler it takes jsx code convert into code which js engine understands

// React Component:
// Class Based Component
// Functional Based Component
// FUNCTIONAL COMPONENT : is a function which return a react element
// componentName should be in capital letter
// const HeadingComponent = () => {
//     return("jsx)
// }

// const title = <h1>kedar</h1>; //thanks to babel it is converting all jsx to react code
// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       <h1>Pooja</h1>
//       {title}
//     </div>
//   );
// };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
// component composition is components are render in another component

// # parcel
// -dev build
// -local server
// -HMR hot module replacement
// -parcel is doing File Watching Algorithm which is done in c++
// faster build because of caching
//parcel cach is cashing & supprting HMR to build faster
// image optimization
//minification
//it will bundle the file
//compress
//consistant hashing
//code splitting
//differential bundling to supprt older browser
// error handling error suggestions
//beautifull diagnostics (if you make any error it will show on browser)
//tree shaking -remove unused code for you
