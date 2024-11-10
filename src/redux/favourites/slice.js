import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name: "favourites",


    initialState: {
        favourites: []
    },

       reducers: {
    addFavourites: (state, action) => {
        state.favourites =  [...state.favourites, action.payload]
    },
    deleteFavourites: (state, action) => {
        state.favourites =  state.favourites.filter(item =>{return item.id !== action.payload})
    },
  },

});

export const {addFavourites, deleteFavourites} = favouritesSlice.actions;
export default favouritesSlice.reducer;