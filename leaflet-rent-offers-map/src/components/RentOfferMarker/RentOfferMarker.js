import {Marker} from "react-leaflet";
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
        />
    );
}

export default RentOfferMarker;