import {createSlice} from "@reduxjs/toolkit";

export const rentOffersSlice = createSlice({
    name: "offers",
    initialState: {
        offers: [
            {
                id: 1,
                geocode: [48.86, 30.3522],
                selected: true,
            },
            {
                id: 2,
                geocode: [48.85, 31.3522],
                selected: true,
            },
            {
                id: 3,
                geocode: [48.855, 32.34],
                selected: true,
            }
        ],
    },
    reducers: {
        addRentOffer: (state, action) => {
            state.offers.push(action.payload);
        }
    },
});

export const {addRentOffer} = rentOffersSlice.actions;
export default rentOffersSlice.reducer;