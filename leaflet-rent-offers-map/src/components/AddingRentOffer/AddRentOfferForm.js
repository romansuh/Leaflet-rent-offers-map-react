import {useFormik} from "formik";
import '@geocodeearth/autocomplete-element'

const AddRentOfferForm = ({isOpen, onClose, onSubmit}) => {
    const formik = useFormik({
        initialValues: {
            description: "",
            location: "",
            price: "",
        },
        onSubmit: (values) => {
            onSubmit(values);
            formik.resetForm();
            onClose();
        },
    });

    return (
        <div className={`modal ${isOpen ? "is-active" : ""}`}>
            <h2>Adding rent offer</h2>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label>Description</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                id="description"
                                name="description"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Location</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                id="location"
                                name="location"
                                onChange={formik.handleChange}
                                value={formik.values.location}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Price</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                id="price"
                                name="price"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn-add">
                        Add Rent Offer
                    </button>
                    <button type="button" className="btn-close" onClick={onClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddRentOfferForm;