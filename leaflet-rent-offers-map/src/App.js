import './App.css';
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import RentOfferMarker from "./components/RentOfferMarker/RentOfferMarker";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function App() {
    const rentOffers = useSelector(state => state.offers.offers);
    useEffect(() => console.log(rentOffers), [rentOffers]);

    return (
        <div className="App">
            <MapContainer
                center={[48.850, 33.025]}
                zoom={6}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MarkerClusterGroup
                    chunkedLoading
                >
                    {rentOffers.map((rentOffer) => {
                        console.log(rentOffer)
                        return (<RentOfferMarker rentOfferInfo={rentOffer}/>)
                    })}

                </MarkerClusterGroup>
            </MapContainer>

            <div className="info_cards_container">
                <ul className="info_cards_list">
                    {rentOffers.map(rentOffer => {
                        return rentOffer.selected ? <li key={rentOffer.id}>{rentOffer.id}</li> : ''
                    })}
                </ul>
            </div>

        </div>
    );
}

export default App;
