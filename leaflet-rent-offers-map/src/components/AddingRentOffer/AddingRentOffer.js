import {useState} from "react";
import AddRentOfferForm from "./AddRentOfferForm";
import "./AddingRentOffer.css";
import {useDispatch} from "react-redux";
import {addRentOffer} from "../../store/features/rentOffersSlice";

const AddingRentOffer = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setModalOpen] = useState(false);

    const handleAddRentOffer = (values) => {
        dispatch(addRentOffer(values))
    };

    return (
        <div>
            <button className="button is-primary" onClick={() => setModalOpen(true)}>
                Add Rent Offer
            </button>
            <AddRentOfferForm
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleAddRentOffer}
            />
        </div>
    );
}

export default AddingRentOffer;