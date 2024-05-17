import { getCurrentUserByIdApi } from '@/lib/api/auth.api';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  currentUser: any;
  authState: boolean;
  loading: boolean;
  error: string | null;
  countNumberLogin: number;
}

const initialState: AuthState = {
  currentUser: null,
  authState: false,
  loading: false,
  error: null,
  countNumberLogin: 0,
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
    setIncrementCount: (state) => {
      return {
        ...state,
        countNumberLogin: state.countNumberLogin + 1,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUserByIdAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCurrentUserByIdAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    });
    builder.addCase(getCurrentUserByIdAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export const { setAuthState, setCurrentUser, setIncrementCount } = authSlice.actions;
export const authReducer = authSlice.reducer;
