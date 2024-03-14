import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './feature/auth.slice';
import productSlice from './feature/product.slice';
import cartSlice from './feature/cart.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productSlice,
    cart: cartSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
