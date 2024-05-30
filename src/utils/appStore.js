const { configureStore } = require("@reduxjs/toolkit");
import { useDispatch } from "react-redux";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default appStore;
//step-1 ---> creation of store
//step2- /* * provided store to the application with Provider from react-redux */ /
//step3-create a slices
//step4 added slice reducer to appStore-reducer
//subscribe to store from header
//const data = useSelector((store)=>store.cart.items) & you can access the data
//const dispatch= useDispatch();   dispatch(addToCart("item"))   you can dispatch an action with payload so that reducer function update the state
