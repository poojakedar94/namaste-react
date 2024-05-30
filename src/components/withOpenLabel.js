const withOpenLabel = (RestaurantComponent) => {
  return (props) => {
    return (
      <div className="open-label-card-container">
        {props.data.isOpen ? <label className="isOpenLabel">Open</label> : null}
        <RestaurantComponent {...props} />
      </div>
    );
  };
};

export default withOpenLabel;
