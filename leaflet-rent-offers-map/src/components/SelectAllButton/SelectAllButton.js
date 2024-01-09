import "./SelectAllButton.css"
import {selectAllOffers} from "../../store/features/rentOffersSlice";
import {useDispatch} from "react-redux";

const SelectAllButton = () => {
    const dispatch = useDispatch();

    const handleSelectAll = () => {
        dispatch(selectAllOffers())
    }

    return (
        <button
            type="button"
            className="select-btn"
            onClick={() => handleSelectAll()}
        >
            SELECT ALL
        </button>
    );
}

export default SelectAllButton;