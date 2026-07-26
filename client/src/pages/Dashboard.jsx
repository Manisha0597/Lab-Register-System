import "./Dashboard.css";
import StatCard from "../components/StatCard";
import AlertBox from "../components/AlertBox";
import SampleTable from "../components/SampleTable";

import {
    statistics,
    alerts,
    recentSamples
} from "../data/dashboardData";

function Dashboard() {

    return (

        <div className="dashboard">

            <div className="stats-grid">

                {
                    statistics.map((item, index) => (

                        <StatCard

                            key={index}

                            title={item.title}

                            value={item.value}

                            color={item.color}

                        />

                    ))
                }

            </div>

            <h2>Alerts</h2>

            {
                alerts.map((alert, index) => (

                    <AlertBox

                        key={index}

                        message={alert}

                    />

                ))
            }

            <h2>Recent Samples</h2>

            <SampleTable

                samples={recentSamples}

            />

        </div>

    );

}

export default Dashboard;