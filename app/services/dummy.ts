import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Product from "@/app/types/Product";
import Products from '@/app/types/Products';

export const dummyApi = createApi({
  reducerPath: 'dummyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products, string>({
      query: (skip = '0') => `products?limit=10&skip=${skip}`
    }),
    getProduct: builder.query<Product, string | null>({
      query: (id = '0') => `products/${id}`
    })
  })
});

export const { useGetProductsQuery, useGetProductQuery } = dummyApi;