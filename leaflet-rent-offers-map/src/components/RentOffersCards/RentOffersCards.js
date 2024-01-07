import {useSelector} from "react-redux";
import "./RentOffersCards.css";
import axios from "axios";
import {useEffect, useState} from "react";
import {API_BASE_URL, API_KEY} from "../../common/geocodeAPI";

const fetchAddress = async (coords) => {
    const url = API_BASE_URL + `reverse?point.lat=${coords[0]}&point.lon=${coords[1]}&api_key=${API_KEY}`;
    const response = await axios.get(url);
    const data = response.data;
    const address = data.features[0].properties.label;
    return address;
};

const RentOfferCard = ({ offerInfo }) => {
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
            <div  key={offerInfo.id} className="info_card_container">
                <span  key={offerInfo.id}>{address}</span>
            </div>
        </li>
    );
};


const RentOffersCards = () => {
    const rentOffers = useSelector(state => state.offers.offers);

    return (
        <div className="info_cards_container">
            <ul className="info_cards_list">
                {rentOffers.map(rentOffer => {
                    return rentOffer.selected ? <RentOfferCard offerInfo={rentOffer}/> : ''
                })}
            </ul>
        </div>
    );
}

export default RentOffersCards;