import {createSlice} from "@reduxjs/toolkit";

export const rentOffersSlice = createSlice({
    name: "offers",
    initialState: {
        offers: [
            {
                id: 1,
                geocode: [48.86, 32.3522],
                selected: true,
                description: "Description 1",
                price: 40000
            },
            {
                id: 2,
                geocode: [48.85, 32.3522],
                selected: true,
                description: "Description 2",
                price: 4000
            },
            {
                id: 3,
                geocode: [47.855, 31.34],
                selected: true,
                description: "Description 3",
                price: 1000
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