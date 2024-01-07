import {configureStore} from "@reduxjs/toolkit";
import rentOffersReducer from "./features/rentOffersSlice"

const store = configureStore({
    reducer: {
        offers: rentOffersReducer
    },
})

export default store;