import "./FilterDropdown.css";

function FilterDropdown({ statusFilter, setStatusFilter }) {

    return (

        <div className="filter-container">

            <label>Status</label>

            <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
            >
                <option>All</option>
                <option>Pending</option>
                <option>Processing</option>
                <option>Completed</option>
            </select>

        </div>

    );

}

export default FilterDropdown;