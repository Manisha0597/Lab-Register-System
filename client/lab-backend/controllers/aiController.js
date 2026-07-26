const db = require("../database/database");

exports.getInsights = (req, res) => {

    db.all("SELECT * FROM samples", [], (err, rows) => {

        if (err) {
            return res.status(500).json(err);
        }

        const insights = [];

        // Overdue samples
        const overdue = rows.filter(sample => sample.days >= 3);

        if (overdue.length > 0) {

            insights.push({
                type: "warning",
                title: "Overdue Samples",
                message: `${overdue.length} sample(s) require immediate attention.`
            });

        }

        // Technician workload
        const technicianLoad = {};

        rows.forEach(sample => {

            technicianLoad[sample.technician] =
                (technicianLoad[sample.technician] || 0) + 1;

        });

        Object.entries(technicianLoad).forEach(([tech, count]) => {

            if (count >= 3) {

                insights.push({

                    type: "info",

                    title: "Technician Workload",

                    message: `${tech} is handling ${count} samples.`

                });

            }

        });

        // Pending count
        const pending = rows.filter(
            sample => sample.status === "Pending"
        );

        if (pending.length >= 5) {

            insights.push({

                type: "critical",

                title: "High Pending Queue",

                message: `${pending.length} samples are still pending.`

            });

        }

        res.json(insights);

    });

};