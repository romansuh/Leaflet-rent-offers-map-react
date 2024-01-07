import {useSelector} from "react-redux";

const RentOffersCards = () => {
    const rentOffers = useSelector(state => state.offers.offers);

    return (
        <div className="info_cards_container">
            <ul className="info_cards_list">
                {rentOffers.map(rentOffer => {
                    return rentOffer.selected ? <li key={rentOffer.id}>{rentOffer.id}</li> : ''
                })}
            </ul>
        </div>
    );
}

export default RentOffersCards;