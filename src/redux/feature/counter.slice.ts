import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  spinnerLoading: boolean;
  notification: any;
  countNotification: number;
}

const initialState: CounterState = {
  value: 0,
  spinnerLoading: false,
  notification: null,
  countNotification: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    showSpinner(state, action) {
      return {
        ...state,
        spinnerLoading: action.payload,
      };
    },

    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setCountNotification: (state) => {
      return {
        ...state,
        countNotification: state.countNotification + 1,
      };
    },
    openNotification: (state, action) => {
      return {
        ...state,
        notification: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { showSpinner, increment, decrement, incrementByAmount, openNotification, setCountNotification } =
  counterSlice.actions;

export default counterSlice.reducer;
