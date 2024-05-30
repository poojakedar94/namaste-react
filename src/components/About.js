import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserCredentials from "./UserCredentials";
// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <User name="pooja" location="E-307,Western Avenue Pune" />
//       <UserClass name="pooja" location="E-307,Western Avenue Pune" />
//     </div>
//   );
// };

// export default About;

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent did mount");
  }
  render() {
    console.log("parent render");

    return (
      <div>
        <h1>About Page</h1>
        {/* <User name="pooja" location="E-307,Western Avenue Pune" /> */}
        <UserClass name="pooja" location="E-307,Western Avenue Pune" />
        <UserClass name="kedar" location="us" />
        <UserCredentials pass="Abhi013" />
      </div>
    );
  }
}
export default About;
/*
parent constructor
parent render
    pooja child constructure
    pooja child render
    kedar child constructure
    kedar child render
    Abhi013 child constructor
    Abhi013 child render
    pooja child componentDidMount
    kedar child componentDidMount
    Abhi013 child componentDidMount
parent componentDidMount */
