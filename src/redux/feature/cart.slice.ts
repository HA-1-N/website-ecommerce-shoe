import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CartState {
  loading: boolean;
  error: string | null;
  countCartIncrement: number;
  listCartItems: any[];
}

const initialState: CartState = {
  loading: false,
  error: null,
  countCartIncrement: 0,
  listCartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setCountCart: (state) => {
      return {
        ...state,
        countCartIncrement: state.countCartIncrement + 1,
      };
    },
    setListCartItems: (state, action: PayloadAction<any[]>) => {
      state.listCartItems = action.payload;
    },
  },
});

export const { setLoading, setError, setCountCart, setListCartItems } = cartSlice.actions;

export default cartSlice.reducer;
