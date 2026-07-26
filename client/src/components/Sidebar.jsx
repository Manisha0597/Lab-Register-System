import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFlask,
  FaFileMedical,
  FaChartBar,
  FaCog,
  FaRobot
} from "react-icons/fa";

import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-logo">
        <h2>🧪 LabFlow AI</h2>
        <p>Laboratory Intelligence</p>
      </div>

      <div className="sidebar-menu">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FaHome className="sidebar-icon" />
          Dashboard
        </NavLink>

        <NavLink
          to="/samples"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FaFlask className="sidebar-icon" />
          Sample Registry
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FaChartBar className="sidebar-icon" />
          Analytics
        </NavLink>

        <NavLink
          to="/ai-insights"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FaRobot className="sidebar-icon" />
          AI Insights
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FaFileMedical className="sidebar-icon" />
          Report Center
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FaCog className="sidebar-icon" />
          Settings
        </NavLink>

      </div>

    </div>
  );
}

export default Sidebar;