import RestaurantComponent from "./RestaurantComponent";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SHIMMER_CARD } from "../utils/constants";
import { Link } from "react-router-dom";
import useFindOnline from "../utils/useFindOnline";
const Body = () => {
  const [data, setData] = useState([]);
  const [searchedFilterList, setSearchedFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useFindOnline();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await res.json();
      const realres =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setData(realres);
      setSearchedFilterList(realres);
    };
    getData();
  }, []);
  console.log(data);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  if (isOnline == false)
    return (
      <h1>Looks like you are offline Please check you internet connection</h1>
    );

  return (
    <>
      {data.length === 0 ? (
        <div className="body">
          <div className="res-container">
            {SHIMMER_CARD.map((item, index) => (
              <Shimmer />
            ))}
          </div>
        </div>
      ) : (
        <div className="body">
          <div className="search-filter">
            <div className="search">
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                value={searchText}
              />
              <button
                onClick={() => {
                  const searchedRes = data.filter((item) =>
                    item.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setSearchedFilterList(searchedRes);
                }}
              >
                Search
              </button>
            </div>
            <div className="filter">
              <button
                className="top-rated-btn"
                onClick={() => {
                  const filteredList = data.filter(
                    (item) => item.info.avgRatingString > "4.3"
                  );
                  setSearchedFilterList(filteredList);
                }}
              >
                Top Rated Restaurants
              </button>
            </div>
          </div>
          <div className="res-container">
            {searchedFilterList.map((item) => {
              return (
                <Link to={"restaurent/" + item.info.id}>
                  <RestaurantComponent data={item.info} key={item.info.id} />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
