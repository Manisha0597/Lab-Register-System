import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";
import SampleTimeline from "./SampleTimeline";

function SampleDetailsDrawer({ sample, onClose }) {

    if (!sample) return null;

    return (

    <div
        className="drawer-overlay"
        onClick={onClose}
    >

        <div
            className="drawer"
            onClick={(e) => e.stopPropagation()}
        >

            <h2>🧪 Sample Details</h2>

            <hr />

            <p><strong>ID:</strong> {sample.id}</p>

            <p><strong>Patient:</strong> {sample.patient}</p>

            <p><strong>Test:</strong> {sample.test}</p>

            <p><strong>Collected:</strong> {sample.collected}</p>

            <p><strong>Technician:</strong> {sample.technician}</p>

            <p><strong>Waiting:</strong> {sample.days} Day(s)</p>

            <div className="badge-row">

                <StatusBadge status={sample.status} />

                <PriorityBadge days={sample.days} />

            </div>
            <SampleTimeline status={sample.status} />

            <button
                className="close-btn"
                onClick={onClose}
            >
                Close
            </button>

        </div>

    </div>

);

}

export default SampleDetailsDrawer;