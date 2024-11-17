import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
    initialState: {
    filter: {
      location: '',
      AC: "",
      transmission: '',
      kitchen: "",
      TV: "",
      bathroom: "",
      water: "",
      gas: "",
      radio: "",
      refrigerator: "",
      microwave: "",
      form: "",
    },
    limit: 4,
    page: 1,
  },

  reducers: {
    updFilters: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
      state.page = 1;
    },
    addPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { updFilters, addPage } = filtersSlice.actions;
export default filtersSlice.reducer;
