export function recommendTechnician(samples) {

    if (samples.length === 0)
        return "Kavya";

    const workload = {};

    samples.forEach(sample => {

        if (sample.status !== "Completed") {

            workload[sample.technician] =
                (workload[sample.technician] || 0) + 1;

        }

    });

    let recommended = "";
    let minimum = Infinity;

    Object.entries(workload).forEach(([name, count]) => {

        if (count < minimum) {

            minimum = count;
            recommended = name;

        }

    });

    return recommended || "Kavya";

}