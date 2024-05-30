import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useFindOnline from "../utils/useFindOnline";
import { useSelector } from "react-redux";
import { Store } from "@mui/icons-material";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const isOnline = useFindOnline();
  const cartItems = useSelector((store) => store.cart.items);
  const wishListItem = useSelector((store) => store.wishlist.items);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <div>{isOnline ? "online" : "offline"}</div>
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/about" className="item">
          About Us
        </Link>
        <Link to="/contactus" className="item">
          Contact Us
        </Link>
        <Link to="/grocery" className="item">
          Grocery
        </Link>
        <Link to="/cart" className="item">
          Cart:({cartItems.length} items)
        </Link>
        <Link to="/cart" className="item">
          Wishlist:({wishListItem.length} items)
        </Link>
        <button
          className="log-in"
          onClick={() =>
            login === "Login" ? setLogin("Log-Out") : setLogin("Login")
          }
        >
          {login}
        </button>
      </div>
    </div>
  );
};
export default Header;
