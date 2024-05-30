import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      count: 0,
      userInfo: {},
    };
    console.log(this.props.name + "child constructure");
  }
  async componentDidMount() {
    const getUserData = await fetch(
      "https://api.github.com/users/poojakedar94"
    );
    const json = await getUserData.json();
    this.setState({ userInfo: json });
    console.log(this.props.name + "child did mount");
  }
  render() {
    console.log(this.props.name + "child render");

    return (
      <div className="user-card">
        <h1>Name:{this.state?.userInfo?.login}</h1>
        <h2>Location: {this.props.location}</h2>
        <h2>contact: 7721038072</h2>
        <div>my Favourite coolor is :{this.state.color}</div>
        <button onClick={() => this.setState({ color: "red" })}>change</button>
        <div>count:{this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase count
        </button>
      </div>
    );
  }
}
export default UserClass;
