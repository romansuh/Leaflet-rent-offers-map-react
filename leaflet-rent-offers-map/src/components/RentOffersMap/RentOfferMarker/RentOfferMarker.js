import {Marker, Popup} from "react-leaflet";
import {Icon} from "leaflet";
import {useDispatch} from "react-redux";
import {selectOfferByID} from "../../../store/features/rentOffersSlice";

const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38]
});

const RentOfferMarker = ({rentOfferInfo}) => {
    const dispatch = useDispatch();

    const handleOfferSelected = (offerID) => {
        dispatch(selectOfferByID(offerID));
    }

    return (
        <Marker
            position={rentOfferInfo.geocode}
            icon={customIcon}
        >
            <Popup>
                <p>{rentOfferInfo.description}</p>
                <button
                    type="button"
                    className="offer_marker_btn"
                    onClick={() => handleOfferSelected(rentOfferInfo.id)}
                >
                    SELECT
                </button>
            </Popup>
        </Marker>
    );
}

export default RentOfferMarker;