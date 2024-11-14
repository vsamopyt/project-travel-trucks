import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operation';
import { fetchCamperById } from './operation';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    count: null,
    items: [],
    item: null,
    isLoading: false,
    error: null,
    pageFlag: 1,
  },

  reducers: {
    resetCampers: state => {
      state.items = [];
      state.count = null;
    },

    resetPageFlag: state => {
      state.pageFlag = 1;
    },
    setPageFlag: (state, action) => {
      state.pageFlag = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        if (state.pageFlag === 1) {
          state.items = action.payload.items;
        } else if (
          state.items.length < state.pageFlag * 4 &&
          state.items.length < state.count
        ) {
          state.items = [...state.items, ...action.payload.items];
        }

        state.count = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //  BY ID
      .addCase(fetchCamperById.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addCampers, resetCampers, resetPageFlag, setPageFlag } =
  campersSlice.actions;

export default campersSlice.reducer;
