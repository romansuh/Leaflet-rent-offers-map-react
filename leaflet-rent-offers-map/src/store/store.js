import {configureStore} from "@reduxjs/toolkit";
import rentOfferReducer from "./features/rentOffersSlice"

const store = configureStore({
    reducer: rentOfferReducer
})

export default store;