import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.items.push(action.payload);
    },
    clearWishlist: (state, action) => {
      return [];
    },
  },
});

export const { addToWishlist, clearWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;
