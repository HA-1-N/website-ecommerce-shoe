import { getCurrentUserByIdApi } from '@/lib/api/auth.api';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  currentUser: any;
  authState: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  authState: false,
  loading: false,
  error: null,
};

export const getCurrentUserByIdAsync = createAsyncThunk('auth/get-by-id', async (id: number) => {
  const response = await getCurrentUserByIdApi(id);
  return response.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },

    setCurrentUser: (state, action: PayloadAction<any>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setAuthState, setCurrentUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
