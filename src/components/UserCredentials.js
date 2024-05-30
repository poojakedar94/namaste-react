import React from "react";

class UserCredentials extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.pass + "child constructor");
  }
  componentDidMount() {
    console.log(this.props.pass + "child componentDidMount");
  }
  render() {
    console.log(this.props.pass + "child render");

    return <h1>pass : {this.props.pass} </h1>;
  }
}

export default UserCredentials;
