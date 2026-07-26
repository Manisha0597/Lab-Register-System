
function SmartAlert({samples}) {

    const alerts = [];

    // Check overdue samples
    samples.forEach((sample) => {

        if (sample.days >= 3 && sample.status !== "Completed") {

            alerts.push(
                `⚠ Sample #${sample.id} has been waiting for ${sample.days} day(s).`
            );

        }

    });

    // Count pending samples
    const pendingCount = samples.filter(
        sample => sample.status === "Pending"
    ).length;

    if (pendingCount >= 2) {

        alerts.push(
            `⚠ ${pendingCount} samples are currently pending.`
        );

    }

    return (

        <div className="alert-card">

            <h3>🔔 Smart Alerts</h3>

            {
                alerts.length === 0 ? (

                    <p>✅ No critical alerts.</p>

                ) : (

                    alerts.map((alert, index) => (

                        <p key={index}>
                            {alert}
                        </p>

                    ))

                )
            }

        </div>

    );

}

export default SmartAlert;