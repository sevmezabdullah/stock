import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { uri, apiKey } from '../constants/uri';

const initialState = {
  error: null,
  loading: false,
  stocks: null,
};

export const fetchStock = createAsyncThunk('fetch/all', async () => {
  const response = await axios.get(uri.fetchStock, {
    headers: {
      'X-RapidAPI-Key': '332b567239mshbe16314b2cb825cp14393ejsn6bb939320a23',
      'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com',
    },
    params: {
      symbol: 'AAPL,MSFT,^SPX,AMZN,YNDX,BAC,TSLA,GOOG',
    },
  });

  return response.data;
});
const stockSlice = createSlice({
  name: 'stock',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchStock.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchStock.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.stocks = action.payload;
    });

    builder.addCase(fetchStock.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.stocks = null;
    });
  },
});

export default stockSlice.reducer;
