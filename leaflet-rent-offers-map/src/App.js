import './App.css';
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import {useState} from "react";
import RentOfferMarker from "./components/RentOfferMarker/RentOfferMarker";

function App() {
    const [markers, setMarkers] = useState([
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
    ]);

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
                    {markers.map((marker) => {
                        return (<RentOfferMarker markerInfo={marker}/>)
                    })}
                </MarkerClusterGroup>
            </MapContainer>

            <div className="info_cards_container">
                <ul className="info_cards_list">
                    {markers.map(marker => {
                        return marker.selected ? <li key={marker.id}>{marker.id}</li> : ''
                    })}
                </ul>
            </div>

        </div>
    );
}

export default App;
