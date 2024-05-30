import { getCardHeaderUtilityClass } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RES_IMAGE_URL } from "../utils/constants";
import { clearCart, removeFromCart } from "../utils/slices/cartSlice";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <button className="clear-cart" onClick={handleClearCart}>
        Clear Cart
      </button>
      {cartData.length == 0 ? (
        <h2>Please add some item in to the cart</h2>
      ) : null}
      <div>
        {cartData.length > 0
          ? cartData.map((item) => (
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
                  <button onClick={() => dispatch(removeFromCart(item))}>
                    DELETE
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Cart;
