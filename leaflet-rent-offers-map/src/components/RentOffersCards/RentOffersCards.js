import {useSelector} from "react-redux";
import "./RentOffersCards.css";
import axios from "axios";
import {useEffect, useState} from "react";
import {GEO_API_BASE_URL, GEO_API_KEY} from "../../common/geocodeAPI";
import SelectAllButton from "../SelectAllButton/SelectAllButton";

const fetchAddress = async (coords) => {
    const url = GEO_API_BASE_URL + `reverse?point.lat=${coords[0]}&point.lon=${coords[1]}&api_key=${GEO_API_KEY}`;
    const response = await axios.get(url);
    const data = response.data;
    const addressInfo = data.features[0].properties;

    const displayableAddress = addressInfo.name + ', ' + addressInfo.region + ', ' + addressInfo.country;

    return displayableAddress;
};

const RentOfferCard = ({offerInfo}) => {
    const [address, setAddress] = useState('');

    useEffect(() => {
        const getAddress = async () => {
            try {
                const result = await fetchAddress(offerInfo.geocode);
                setAddress(result);
            } catch (error) {
                console.error('Error fetching address:', error);
            }
        };

        getAddress();
    }, [offerInfo.geocode]);

    return (
        <li key={offerInfo.id}>
            <div className="info_card_container">
                <h3 className="offer_description">{offerInfo.description}</h3>
                <p className="offer_address">{address}</p>
                <h4 className="offer_price">{offerInfo.price} &#8372;</h4>
            </div>
        </li>
    );
};


const RentOffersCards = () => {
    const rentOffers = useSelector(state => state.offers.offers);

    return (
        <div className="info_cards_container">
            <SelectAllButton/>
            <ul className="info_cards_list">
                {rentOffers.map(rentOffer => {
                    return rentOffer.selected ? <RentOfferCard offerInfo={rentOffer}/> : ''
                })}
            </ul>
        </div>
    );
}

export default RentOffersCards;