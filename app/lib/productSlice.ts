import { createSlice } from '@reduxjs/toolkit';
import Product from '@/app/types/Product';

export interface ProductState {
  product?: Product;
}

let p: Product = {
  id: 0,
  title: '',
  description: '',
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: '',
  category: '',
  thumbnail: '',
  images: []
};

const initialState: ProductState = {
  product: p
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateProduct: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.product = action.payload;
    }
  }
});

export const { updateProduct } = productSlice.actions;

export default productSlice.reducer;