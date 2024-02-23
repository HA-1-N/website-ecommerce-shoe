import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  authState: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  authState: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
