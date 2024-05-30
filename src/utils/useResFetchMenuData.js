import { useEffect, useState } from "react";

const useResFetchData = (resId) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
          resId +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await result.json();
      setDetails(json);
    };
    fetchData();
  }, []);
  return details;
};
export default useResFetchData;
