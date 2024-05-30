const User = (props) => {
  return (
    <div className="user-card">
      <h1>Name:{props.name}</h1>
      <h2>Location: {props.location}</h2>
      <h2>contact: 7721038072</h2>
    </div>
  );
};
export default User;
