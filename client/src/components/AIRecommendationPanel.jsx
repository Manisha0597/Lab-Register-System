import {
    FaRobot,
    FaCheckCircle,
    FaExclamationTriangle,
    FaFlask,
    FaChartLine
} from "react-icons/fa";

import "./AIRecommendationPanel.css";

function AIRecommendationPanel({ samples }) {

    const pending = samples.filter(
        s => s.status === "Pending"
    ).length;

    const overdue = samples.filter(
        s => s.days >= 3
    ).length;

    const completed = samples.filter(
        s => s.status === "Completed"
    ).length;

    const total = samples.length;

    const efficiency =
        total === 0
            ? 100
            : Math.round((completed / total) * 100);

    return (

        <div className="ai-panel">

            <h2>

                <FaRobot />

                AI Recommendations

            </h2>

            <div className="ai-grid">

                <div className="ai-card success">

                    <FaCheckCircle />

                    <div>

                        <h4>Technician Recommendation</h4>

                        <p>

                            Assign the next sample to the
                            least busy technician.

                        </p>

                    </div>

                </div>

                <div className="ai-card warning">

                    <FaExclamationTriangle />

                    <div>

                        <h4>Pending Samples</h4>

                        <p>

                            {pending} sample(s) require attention.

                        </p>

                    </div>

                </div>

                <div className="ai-card info">

                    <FaFlask />

                    <div>

                        <h4>Overdue Samples</h4>

                        <p>

                            {overdue} sample(s) waiting more than
                            2 days.

                        </p>

                    </div>

                </div>

                <div className="ai-card purple">

                    <FaChartLine />

                    <div>

                        <h4>Lab Efficiency</h4>

                        <p>

                            {efficiency}% Completed Successfully

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AIRecommendationPanel;