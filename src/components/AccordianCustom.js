import { useState } from "react";

const AccordianCustom = ({
  title,
  itemCards,
  show,
  setShowIndex,
  index,
  showIndex,
}) => {
  const handleClick = () => {
    if (showIndex == index) setShowIndex(null);
    else setShowIndex(index);
  };
  return (
    <div>
      <h3 onClick={handleClick}>{title}</h3>
      {show && (
        <div>
          {itemCards.map((item) => (
            <div key={item.card.info.id}>{item.card.info.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};
export default AccordianCustom;
