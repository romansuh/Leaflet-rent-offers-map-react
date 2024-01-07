import './App.css';
import "leaflet/dist/leaflet.css";
import RentOffersMap from "./components/RentOffersMap/RentOffersMap";
import RentOffersCards from "./components/RentOffersCards/RentOffersCards";

function App() {
    return (
        <div className="App">
            <RentOffersMap/>
            <RentOffersCards/>
        </div>
    );
}

export default App;
