

function DashboardStats({ samples }) {

    const total = samples.length;

    const pending = samples.filter(
        sample => sample.status === "Pending"
    ).length;

    const processing = samples.filter(
        sample => sample.status === "Processing"
    ).length;

    const completed = samples.filter(
        sample => sample.status === "Completed"
    ).length;

    const cards = [
        {
            title: "Total Samples",
            value: total,
            color: "#2563EB"
        },
        {
            title: "Pending",
            value: pending,
            color: "#F59E0B"
        },
        {
            title: "Processing",
            value: processing,
            color: "#0EA5E9"
        },
        {
            title: "Completed",
            value: completed,
            color: "#16A34A"
        }
    ];

    return (

        <div className="stats-grid">

            {cards.map((card) => (

                <div
                    key={card.title}
                    className="stat-card"
                    style={{
                        borderLeft: `6px solid ${card.color}`
                    }}
                >

                    <h4>{card.title}</h4>

                    <h1>{card.value}</h1>

                </div>

            ))}

        </div>

    );

}

export default DashboardStats;