export function predictDelay(sample) {

    if (sample.status === "Completed") {

        return {
            risk: "Low",
            color: "#22c55e",
            score: 10,
            recommendation: "No action required."
        };

    }

    if (sample.days >= 5) {

        return {
            risk: "Critical",
            color: "#dc2626",
            score: 95,
            recommendation: "Assign immediately to another technician."
        };

    }

    if (sample.days >= 3) {

        return {
            risk: "High",
            color: "#f97316",
            score: 75,
            recommendation: "Prioritize this sample today."
        };

    }

    if (sample.days >= 1) {

        return {
            risk: "Medium",
            color: "#facc15",
            score: 45,
            recommendation: "Monitor closely."
        };

    }

    return {
        risk: "Low",
        color: "#22c55e",
        score: 15,
        recommendation: "Processing is on track."
    };

}