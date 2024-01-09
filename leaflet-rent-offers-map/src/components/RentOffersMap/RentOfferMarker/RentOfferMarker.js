import {Marker, Popup} from "react-leaflet";
import {Icon} from "leaflet";

const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38]
});

const RentOfferMarker = ({rentOfferInfo}) => {
    return (
        <Marker
            position={rentOfferInfo.geocode}
            icon={customIcon}
        >
            <Popup>
                <p>{rentOfferInfo.description}</p>
                <button type="button" className="offer_marker_btn" onClick={() => console.log(1)}>More...</button>
            </Popup>
        </Marker>
    );
}

export default RentOfferMarker;