import "./LabHealthCenter.css";

function LabHealthCenter({ samples }) {

    const total = samples.length;

    const completed = samples.filter(
        s => s.status === "Completed"
    ).length;

    const pending = samples.filter(
        s => s.status === "Pending"
    ).length;

    const overdue = samples.filter(
        s => s.days >= 3
    ).length;

    let score = 100;

    score -= overdue * 10;

    score -= pending * 2;

    if (score < 0)
        score = 0;

    let status = "Excellent";

    if (score < 90)
        status = "Good";

    if (score < 70)
        status = "Warning";

    if (score < 50)
        status = "Critical";

    return (

        <div className="health-center">

            <h2>🧬 Laboratory Health Center</h2>

            <div className="health-grid">

                <div className="health-card">

                    <h3>Health Score</h3>

                    <h1>{score}%</h1>

                    <p>{status}</p>

                </div>

                <div className="health-card">

                    <h3>Total Samples</h3>

                    <h1>{total}</h1>

                </div>

                <div className="health-card">

                    <h3>Completed</h3>

                    <h1>{completed}</h1>

                </div>

                <div className="health-card">

                    <h3>Pending</h3>

                    <h1>{pending}</h1>

                </div>

                <div className="health-card">

                    <h3>Critical</h3>

                    <h1>{overdue}</h1>

                </div>

            </div>

        </div>

    );

}

export default LabHealthCenter;