import { getOrderByUserIdApi } from '@/lib/api/order.api';
import { OrderDetailModels } from '@/lib/model/order.model';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  loading: boolean;
  error: string | null;
  countProfileIncrement: number;
  orderDetails: OrderDetailModels[];
}

const initialState: ProfileState = {
  loading: false,
  error: null,
  countProfileIncrement: 0,
  orderDetails: [],
};

export const getOrderByUserIdAsync = createAsyncThunk(
  'profile/get-order-by-user-id',
  async (userId: number, thunkApi) => {
    try {
      const response = await getOrderByUserIdApi(userId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setIncrementCountProfile: (state, action: PayloadAction<number>) => {
      state.countProfileIncrement = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderByUserIdAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrderByUserIdAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetails = action.payload.data;
        state.error = null;
      })
      .addCase(getOrderByUserIdAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setLoading, setError, setIncrementCountProfile } = profileSlice.actions;
export default profileSlice.reducer;
