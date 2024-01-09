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
    reducers: {
        selectOfferByID: (state, action) => {
            const selectedOfferID = action.payload;
            const unselectedOffers = state.offers.filter(offer => offer.id !== selectedOfferID);
            const selectedOffer = state.offers.find(offer => offer.id === selectedOfferID)

            if (unselectedOffers) {
                unselectedOffers.map(offer => offer.selected = false);
                selectedOffer.selected = true;
            }
        },
        selectAllOffers: (state) => {
            state.offers.map(offer => offer.selected = true)
        },
        unselectByBounds: (state, action) => {
            const bounds = action.payload;

            const unselectedOffers = state.offers.filter(
                offer => {
                    return !(
                        bounds._northEast.lat > offer.geocode[0] &&
                        bounds._southWest.lat < offer.geocode[0] &&
                        bounds._northEast.lng > offer.geocode[1] &&
                        bounds._southWest.lat < offer.geocode[0]
                    )
                }
            )

            if (unselectedOffers) {
                unselectedOffers.map(offer => offer.selected = false)
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchOffers.fulfilled, (state, action) => {
                action.payload.map(offer => offer.selected = true)
                state.offers = action.payload;
            })
            .addCase(addRentOffer.fulfilled, (state, action) => {
                action.payload.selected = true;
                state.offers = [action.payload, ...state.offers];
            })
    }
});

export const {selectOfferByID, selectAllOffers, unselectByBounds} = rentOffersSlice.actions;
export default rentOffersSlice.reducer;