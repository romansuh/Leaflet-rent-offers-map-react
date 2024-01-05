import './App.css';
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import {useState} from "react";
import RentOfferMarker from "./components/RentOfferMarker/RentOfferMarker";

function App() {
    const [markers, setMarkers] = useState([
        {
            geocode: [48.86, 30.3522],
            popUp: "Hello, I am pop up 1"
        },
        {
            geocode: [48.85, 31.3522],
            popUp: "Hello, I am pop up 2"
        },
        {
            geocode: [48.855, 32.34],
            popUp: "Hello, I am pop up 3"
        }
    ]);

    return (
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
    );
}

export default App;
