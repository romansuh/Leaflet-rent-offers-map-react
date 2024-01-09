import './App.css';
import "leaflet/dist/leaflet.css";
import RentOffersMap from "./components/RentOffersMap/RentOffersMap";
import RentOffersCards from "./components/RentOffersCards/RentOffersCards";
import AddingRentOffer from "./components/AddingRentOffer/AddingRentOffer";
import {useEffect} from "react";
import {fetchOffers} from "./store/features/rentOffersSlice";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOffers());
    }, [dispatch])

    return (
        <div className="App">
            <AddingRentOffer/>

            <RentOffersMap/>

            <RentOffersCards/>
        </div>
    );
}

export default App;
