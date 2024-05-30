import React, { useState } from "react";
import { useParams } from "react-router";
import useResFetchData from "../utils/useResFetchMenuData";
import Accordian from "./Accordian";
import AccordianCustom from "./AccordianCustom";
import Shimmer from "./Shimmer";

const RestarauntMenuPage = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const details = useResFetchData(resId);

  if (details == null) return <Shimmer />;

  console.log(details);
  const { name, costForTwoMessage, sla, cuisines } =
    details?.data?.cards[2].card.card.info;
  const itemsNeedsToFilter =
    details?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const filterItem = itemsNeedsToFilter.filter(
    (item) => !!item.card.card.itemCards
  );
  console.log(filterItem);
  const { itemCards, title } =
    details?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      .card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <div className="accordian-container">
        {filterItem.map((item) => (
          <Accordian
            title={item.card.card.title}
            itemCards={item.card.card.itemCards}
          />
        ))}
        {filterItem.map((item, index) => (
          <AccordianCustom
            title={item.card.card.title}
            itemCards={item.card.card.itemCards}
            show={index == showIndex ? true : false}
            // setShowIndex={() => {
            //   if (showIndex === index) setShowIndex(null);
            //   else setShowIndex(index);
            // }}
            setShowIndex={setShowIndex}
            index={index}
            showIndex={showIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default RestarauntMenuPage;
