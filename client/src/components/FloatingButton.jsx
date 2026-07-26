import { FaPlus } from "react-icons/fa";

function FloatingButton({ onClick }) {

    return (

        <button
            className="fab"
            onClick={onClick}
        >
            <FaPlus />
        </button>

    );

}

export default FloatingButton;