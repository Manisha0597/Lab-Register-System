import {
  FaUser,
  FaFlask,
  FaCalendarAlt,
  FaUserMd,
  FaEye,
  FaEdit,
  FaTrash,
  FaClock
} from "react-icons/fa";

import "./SampleCard.css";

function SampleCard({
  sample,
  onViewDetails,
  onEdit,
  onDelete
}) {

  function statusClass(status) {
    switch (status) {
      case "Completed":
        return "completed";
      case "Processing":
        return "processing";
      default:
        return "pending";
    }
  }

  return (
    <div className="sample-card">

      <div className="sample-header">

        <div className="avatar">
          {sample.patient.charAt(0).toUpperCase()}
        </div>

        <div>

          <h3>{sample.patient}</h3>

          <span className={`status ${statusClass(sample.status)}`}>
            {sample.status}
          </span>

        </div>

      </div>

      <div className="sample-body">

        <p>
          <FaFlask />
          {sample.test}
        </p>

        <p>
          <FaUserMd />
          {sample.technician}
        </p>

        <p>
          <FaCalendarAlt />
          {sample.collected}
        </p>

        <p>
          <FaClock />
          {sample.days} Day(s)
        </p>

      </div>

      <div className="sample-actions">

        <button onClick={() => onViewDetails(sample)}>
          <FaEye />
        </button>

        <button onClick={() => onEdit(sample)}>
          <FaEdit />
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(sample.id)}
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
}

export default SampleCard;