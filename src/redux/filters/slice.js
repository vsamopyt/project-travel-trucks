import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    // initialState: {filters:{
    //     location: "",
    //     AC:null,
    //     // transmission: '',
    //     transmission: [],
    //     kitchen: null,
    //     TV:null,
    //     bathroom: null,
    //     form: null,
    //     limit:4,
    //     page: 1,
     
    //  }},

    initialState: {
        filter: {
            location: "",
                AC:null,
                transmission: '',
                // transmission: [],
                kitchen: null,
                TV:null,
                bathroom: null,
                water: null,
                gas:null,
                radio: null,
                refrigerator: null,
                microwave: null,
                form: null,
        },
        limit:4,
        page: 1,
    },

       reducers: {
    updFilters: (state, action) => {
        state.filter =  {...state.filter, ...action.payload}
        state.page =1;
    //   return state.filters = action.payload
    },
    addPage: (state, action) => {
        state.page =  action.payload
   
    },
  },

});

export const {updFilters, addPage} = filtersSlice.actions;
export default filtersSlice.reducer;
