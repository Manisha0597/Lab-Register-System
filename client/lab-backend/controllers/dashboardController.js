const db = require("../database/database");

exports.getDashboardStats = (req, res) => {

    db.all("SELECT * FROM samples", [], (err, rows) => {

        if (err) {
            return res.status(500).json(err);
        }

        const total = rows.length;

        const pending = rows.filter(r => r.status === "Pending").length;

        const processing = rows.filter(r => r.status === "Processing").length;

        const completed = rows.filter(r => r.status === "Completed").length;

        res.json({
            total,
            pending,
            processing,
            completed,
            recentSamples: rows.slice(-5).reverse()
        });

    });

};