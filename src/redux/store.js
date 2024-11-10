// import { configureStore } from "@reduxjs/toolkit";
// import campersReducer from "./campers/slice.js"
// import filtersReducer from "./filters/slice.js"
// import favouritesReducer from "./favourites/slice.js"

// export const store =configureStore({
// reducer: {
//     campers: campersReducer,
//     filters: filtersReducer,
//     favourites: favouritesReducer,
// }

// });

import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

import campersReducer from "./campers/slice.js"
import filtersReducer from "./filters/slice.js"
import favouritesReducer from "./favourites/slice.js"

const persistConfig = {
    key: "favourites",
    storage,
  };

  const persistedFavouriteReducer = persistReducer(persistConfig, favouritesReducer);

export const store =configureStore({
reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favourites: persistedFavouriteReducer,
}, 
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});

export const persistor = persistStore(store);