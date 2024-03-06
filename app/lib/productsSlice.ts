import { createSlice } from "@reduxjs/toolkit";
import Product from '@/app/types/Product';

interface ProductStateProps {
  rows: Array<Product>;
  skip: number;
}

export interface ProductsState {
  products: ProductStateProps;
}

const initialState: ProductsState = {
  products: {
    rows: [],
    skip: 0
  }
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    append: (state, action) => {
      // checking for duplicates before pushing
      if (action.payload && action.payload.length) {
        action.payload.forEach((product: Product) => {
          const index = state.products.rows.findIndex((p) => {
            return p.id === product.id;
          });
          if (index < 0) {
            state.products.rows.push(product);
          }
        });
      }
    },
    loadMore: (state) => {
      // by updating the skip value, RTK query will pick it up in the component
      state.products.skip = state.products.rows.length;
    }
  }
});

export const { append, loadMore } = productsSlice.actions;

export default productsSlice.reducer;