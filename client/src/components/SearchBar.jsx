import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm }) {

    return (

        <div className="search-container">

            <FaSearch className="search-icon" />

            <input
                type="text"
                placeholder="Search by Patient, Test or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

        </div>

    );

}

export default SearchBar;