export function getAIResponse(question, samples) {

    const query = question.toLowerCase();

    // Pending samples
    if (query.includes("pending")) {

        const pending = samples.filter(
            sample => sample.status === "Pending"
        );

        return `There are ${pending.length} pending sample(s).`;

    }

    // Completed samples
    if (query.includes("completed")) {

        const completed = samples.filter(
            sample => sample.status === "Completed"
        );

        return `${completed.length} sample(s) have been completed.`;

    }

    // Delayed samples
    if (query.includes("delay") || query.includes("overdue")) {

        const delayed = samples.filter(
            sample => sample.days >= 3
        );

        if (delayed.length === 0)
            return "There are no delayed samples.";

        return delayed
            .map(sample => `Sample #${sample.id} (${sample.patient})`)
            .join(", ");

    }

    // Technician workload
    if (query.includes("technician") || query.includes("workload")) {

        const workload = {};

        samples.forEach(sample => {

            if (sample.status !== "Completed") {

                workload[sample.technician] =
                    (workload[sample.technician] || 0) + 1;

            }

        });

        let best = "";
        let minimum = Infinity;

        Object.entries(workload).forEach(([name, count]) => {

            if (count < minimum) {

                minimum = count;
                best = name;

            }

        });

        return `${best} currently has the lowest workload and is recommended for the next sample.`;

    }

    return "Sorry, I couldn't understand that. Try asking about pending, completed, delayed samples, or technician workload.";

}