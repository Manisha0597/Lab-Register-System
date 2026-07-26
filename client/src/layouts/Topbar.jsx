import {
    FaBell,
    FaSearch,
    FaMoon,
    FaUserCircle
} from "react-icons/fa";

import "./Topbar.css";

function Topbar() {

    return (

        <header className="topbar">

            <div className="topbar-left">

                <h2>🧪 LabFlow AI</h2>

                <p>AI Powered Laboratory Management System</p>

            </div>

            <div className="topbar-right">

                <div className="search-box">

                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Search..."
                    />

                </div>

                <button className="icon-btn">

                    <FaMoon />

                </button>

                <button className="icon-btn notification">

                    <FaBell />

                    <span>3</span>

                </button>

                <div className="profile-card">

                    <FaUserCircle />

                    <div>

                        <strong>Admin</strong>

                        <small>Laboratory Head</small>

                    </div>

                </div>

            </div>

        </header>

    );

}

export default Topbar;