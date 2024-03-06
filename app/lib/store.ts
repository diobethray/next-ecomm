import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dummyApi } from "@/app/services/dummy";
import productsReducer from '@/app/lib/productsSlice';
import productReducer from '@/app/lib/productSlice';
import wishlistReducer from '@/app/lib/wishlistSlice';
import cartReducer from '@/app/lib/cartSlice';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  [dummyApi.reducerPath]: dummyApi.reducer,
  products: productsReducer,
  product: productReducer,
  wishlist: wishlistReducer,
  cart: cartReducer
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['dummyApi','product','products']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(dummyApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);