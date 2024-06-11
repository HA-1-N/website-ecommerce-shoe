import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './feature/auth.slice';
import productSlice from './feature/product.slice';
import cartSlice from './feature/cart.slice';
import profileSlice from './feature/profile.slice';
import counterSlice from './feature/counter.slice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authReducer,
    product: productSlice,
    cart: cartSlice,
    profile: profileSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
