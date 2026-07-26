import {
  FaHome,
  FaFlask,
  FaChartBar,
  FaRobot,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const menuItems = [
    { path: "/dashboard", icon: <FaHome />, label: "Dashboard" },
    { path: "/samples", icon: <FaFlask />, label: "Samples" },
    { path: "/analytics", icon: <FaChartBar />, label: "Analytics" },
    { path: "/ai-insights", icon: <FaRobot />, label: "AI Insights" },
    { path: "/reports", icon: <FaFileAlt />, label: "Reports" },
    { path: "/settings", icon: <FaCog />, label: "Settings" },
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-header">
        <div className="logo-circle">🧪</div>

        <div>
          <h2 className="logo">LabFlow AI</h2>
          <p className="logo-subtitle">Laboratory Intelligence</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <span className="menu-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="status-dot"></div>
        <div>
          <strong>System Online</strong>
          <p>AI Monitoring Active</p>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;