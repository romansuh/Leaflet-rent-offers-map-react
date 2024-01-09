import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import RentOfferMarker from "./RentOfferMarker/RentOfferMarker";
import {useDispatch, useSelector} from "react-redux";
import "./RentOffersMap.css";
import {unselectByBounds} from "../../store/features/rentOffersSlice";

const MapControl = () => {
    const dispatch = useDispatch();

    const map = useMapEvents({
        zoomend: (e) => {
            dispatch(unselectByBounds(e.target.getBounds()));
        },
        moveend: (e) => {
            dispatch(unselectByBounds(e.target.getBounds()));
        },
        dragend: (e) => {
            dispatch(unselectByBounds(e.target.getBounds()));
        }
    })

    return null
}

const RentOffersMap = () => {
    const rentOffers = useSelector(state => state.offers.offers);

    return (
        <MapContainer
            center={[48.850, 33.025]}
            zoom={6}
        >
            <MapControl/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerClusterGroup
                chunkedLoading
            >
                {rentOffers.map((rentOffer) => {
                    return (<RentOfferMarker rentOfferInfo={rentOffer}/>)
                })}

            </MarkerClusterGroup>
        </MapContainer>
    );
}

export default RentOffersMap;