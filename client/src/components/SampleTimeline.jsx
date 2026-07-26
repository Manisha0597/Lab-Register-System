function SampleTimeline({ status }) {

    const steps = [
        "Sample Collected",
        "Registered",
        "Assigned Technician",
        "Processing",
        "Report Generated"
    ];

    let currentStep = 0;

    switch (status) {

        case "Pending":
            currentStep = 2;
            break;

        case "Processing":
            currentStep = 3;
            break;

        case "Completed":
            currentStep = 4;
            break;

        default:
            currentStep = 0;

    }

    return (

        <div className="timeline">

            <h3>📍 Sample Journey</h3>

            {steps.map((step, index) => (

                <div
                    key={index}
                    className="timeline-item"
                >

                    <span>

                        {index < currentStep && "✔"}

                        {index === currentStep && "⏳"}

                        {index > currentStep && "○"}

                    </span>

                    <span>{step}</span>

                </div>

            ))}

        </div>

    );

}

export default SampleTimeline;