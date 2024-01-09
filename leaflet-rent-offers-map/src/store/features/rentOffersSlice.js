import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {DATA_API_BASE_URL, DATA_API_ENDPOINTS} from "../../common/dataAPI";
import {GEO_API_BASE_URL, GEO_API_KEY} from "../../common/geocodeAPI";

export const fetchOffers = createAsyncThunk("offers/fetchOffers", async () => {
    const response = await axios.get(DATA_API_BASE_URL + DATA_API_ENDPOINTS.OFFERS);
    return response.data;
});

export const addRentOffer = createAsyncThunk("offers/addOffer", async (offer) => {
    const offerToAdd = {
        description: offer.description,
        price: +offer.price,
    };

    const geocodeUrl = GEO_API_BASE_URL + `search?text=${offer.location.replace(" ", "+")}&api_key=${GEO_API_KEY}`
    const geocodeResponse = await axios.get(geocodeUrl);
    const geocode = geocodeResponse.data.features[0].geometry.coordinates;
    offerToAdd.geocode = [geocode[1], geocode[0]];
    const response = await axios.post(DATA_API_BASE_URL + DATA_API_ENDPOINTS.OFFERS, offerToAdd);
    return response.data
});

export const rentOffersSlice = createSlice({
    name: "offers",
    initialState: {
        offers: [],
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchOffers.fulfilled, (state, action) => {
                action.payload.map(offer => offer.selected = true)
                state.offers = action.payload;
            })
            .addCase(addRentOffer.fulfilled, (state, action) => {
                console.log(action)
                action.payload.selected = true;
                state.offers = [action.payload, ...state.offers];
            })
    }
});

export const {} = rentOffersSlice.actions;
export default rentOffersSlice.reducer;