import { filterProductApi, filterProductWebsiteApi } from '@/lib/api/product.api';
import { TOTAL_COUNT_HEADER } from '@/lib/constants/page.constant';
import { ParamsModel } from '@/lib/model/page.model';
import { FilterProductModels, FilterProductWebsiteModels, ProductModels } from '@/lib/model/product.model';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface ProductState {
  formSearch: FilterProductWebsiteModels;
  productDetails: ProductModels[];
  productWebsiteDetails: ProductModels[];
  pageSearch: number;
  totalPage: number;
  loading: boolean;
  error: string | null;
  countProduct: number;
}

const initialState: ProductState = {
  formSearch: {
    name: null,
    status: null,
    categoryId: null,
    brandId: null,
    sizeId: null,
    colorId: null,
    minPrice: 0,
    maxPrice: 5000000,
  },
  productDetails: [],
  productWebsiteDetails: [],
  pageSearch: 1,
  totalPage: 0,
  loading: false,
  error: null,
  countProduct: 0,
};

export const filterProductAsync = createAsyncThunk(
  'product/filter',
  async (data: { body: FilterProductModels; params: ParamsModel }, thunkApi) => {
    try {
      const response = await filterProductApi(data.body, data.params);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const filterProductWebsiteAsync = createAsyncThunk(
  'product/filter-webiste',
  async (data: { body: FilterProductWebsiteModels; params: ParamsModel }, thunkApi) => {
    try {
      const response = await filterProductWebsiteApi(data.body, data.params);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    changeFormSearch: (state, action: PayloadAction<FilterProductWebsiteModels>) => {
      state.formSearch = action.payload;
    },
    changePageSearch: (state, action: PayloadAction<number>) => {
      state.pageSearch = action.payload;
    },
    incrementCountProduct(state) {
      return {
        ...state,
        countProduct: state.countProduct + 1,
      };
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(filterProductAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(filterProductAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.productDetails = action.payload.data;
      state.totalPage = parseInt(action.payload.headers[TOTAL_COUNT_HEADER]) || 0;
      state.error = null;
    });
    builder.addCase(filterProductAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(filterProductWebsiteAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(filterProductWebsiteAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.productWebsiteDetails = action.payload.data;
      state.totalPage = parseInt(action.payload.headers[TOTAL_COUNT_HEADER]) || 0;
      state.error = null;
    });
    builder.addCase(filterProductWebsiteAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { changeFormSearch, changePageSearch, incrementCountProduct, clearError } = productSlice.actions;
export default productSlice.reducer;
