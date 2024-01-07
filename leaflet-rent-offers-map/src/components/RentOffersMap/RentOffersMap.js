import {MapContainer, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import RentOfferMarker from "./RentOfferMarker/RentOfferMarker";
import {useSelector} from "react-redux";

const RentOffersMap = () => {
    const rentOffers = useSelector(state => state.offers.offers);

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
                {rentOffers.map((rentOffer) => {
                    console.log(rentOffer)
                    return (<RentOfferMarker rentOfferInfo={rentOffer}/>)
                })}

            </MarkerClusterGroup>
        </MapContainer>
    );
}

export default RentOffersMap;