import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import React from "react";
import { RES_IMAGE_URL } from "../utils/constants";
import { addToCart } from "../utils/slices/cartSlice";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../utils/slices/wishlistSlice";

const Accordian = ({ title, itemCards }) => {
  const dispatch = useDispatch();
  console.log(dispatch);

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title} ({itemCards.length})
        </AccordionSummary>
        <AccordionDetails>
          {itemCards.map((item) => (
            <div key={item.card.info.id} className="accordian-list">
              <div className="details-container">
                <div className="heading">
                  {item.card.info.name}-{item.card.info.price}
                </div>
                <div className="accordian-description">
                  {item.card.info.description}
                </div>
              </div>
              <div className="image-add-container">
                <img className="menu-img" src={RES_IMAGE_URL} />
                <button onClick={() => dispatch(addToCart(item))}>ADD+</button>
                <button onClick={() => dispatch(addToWishlist(item))}>
                  Add To Wishlist+
                </button>
              </div>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Accordian;
