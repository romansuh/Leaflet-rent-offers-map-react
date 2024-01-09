import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {DATA_API_BASE_URL, DATA_API_ENDPOINTS} from "../../common/dataAPI";

export const fetchOffers = createAsyncThunk("offers/fetchOffers", async () => {
    const response = await axios.get(DATA_API_BASE_URL + DATA_API_ENDPOINTS.OFFERS);
    return response.data;
});

export const rentOffersSlice = createSlice({
    name: "offers",
    initialState: {
        offers: [],
    },
    reducers: {
        addRentOffer: (state, action) => {
            state.offers = [...state.offers, action.payload];
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchOffers.fulfilled, (state, action) => {
                action.payload.map(offer => offer.selected=true)
                state.offers = action.payload;
            })
    }
});

export const {addRentOffer} = rentOffersSlice.actions;
export default rentOffersSlice.reducer;