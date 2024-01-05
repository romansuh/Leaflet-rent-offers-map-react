import './App.css';
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer} from "react-leaflet";

function App() {
    return (
        <MapContainer center={[48.850, 33.025]} zoom={6}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}

export default App;
