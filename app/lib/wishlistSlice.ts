import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import WishListItem from "@/app/types/WishListItem";

export interface WishListItemState {
  wishlist: Array<WishListItem>;
}

const initialState: WishListItemState = {
  wishlist: []
}

export const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<Array<WishListItem>>) => {
      // checking for duplicates before pushing
      if (action.payload && action.payload.length) {
        action.payload.forEach((wish: WishListItem) => {
          const index = state.wishlist.findIndex((w) => {
            return w.id === wish.id;
          });
          if (index < 0) {
            state.wishlist.push(wish);
          }
        });
      }
    },
    removeFromWishList: (state, action: PayloadAction<number>) => {
      const objIndex = state.wishlist.findIndex((obj) => {
        return obj.id === action.payload;
      });
      if (objIndex !== -1) {
        state.wishlist.splice(objIndex, 1);
      }
    }
  }
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;