import { RES_IMAGE_URL } from "../utils/constants";
import withOpenLabel from "./withOpenLabel";

const RestaurantComponent = ({ data, index }) => {
  const { name, avgRatingString, cuisines, costForTwo, sla } = data;

  return (
    <div className="card-container" index={index}>
      <div className="res-imgContainer">
        <img className="img" src={RES_IMAGE_URL} />
      </div>
      <div className="details-res">
        <h3>{name}</h3>
        <h5>{cuisines.join(",")}</h5>
        <div className="rating-deliveryTime-conatiner">
          <h4>{`${avgRatingString} star`}</h4>
          <h4>{sla.deliveryTime}</h4>
          <h4>{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};
export default withOpenLabel(RestaurantComponent);
