import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CartItem from "@/app/types/CartItem";

export interface CartItemState {
  cart: Array<CartItem>;
}

const initialState: CartItemState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Array<CartItem>>) => {
      // checking for duplicates before pushing
      action.payload.forEach((ci: CartItem) => {
        const index = state.cart.findIndex((c) => {
          return c.id === ci.id;
        });
        if (index < 0) {
          state.cart.push(ci);
        }
      });
    },
    updateInCart: (state, action: PayloadAction<CartItem>) => {
      // find and update that CartItem
      const objIndex = state.cart.findIndex((obj) => {
        return obj.id === action.payload.id;
      });
      if (objIndex > 0 && action.payload && (action?.payload?.quantity ?? 0 ) > 0) {
        state.cart[objIndex] = action.payload;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const objIndex = state.cart.findIndex((obj) => {
        return obj.id === action.payload;
      });
      if (objIndex !== -1) {
        state.cart.splice(objIndex, 1);
      }
    }
  }
});

export const { addToCart, updateInCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;