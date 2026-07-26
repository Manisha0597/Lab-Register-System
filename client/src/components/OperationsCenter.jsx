import "./OperationsCenter.css";

function OperationsCenter({ samples }) {

    const overdue = samples.filter(sample => sample.days >= 3);

    const workload = {};

    samples.forEach(sample => {

        if (sample.status !== "Completed") {

            workload[sample.technician] =
                (workload[sample.technician] || 0) + 1;

        }

    });

    return (

        <div className="operations-grid">

            {/* Critical Samples */}

            <div className="operations-card">

                <h3>🔴 Critical Samples</h3>

                {

                    overdue.length === 0 ?

                    (

                        <p>No delayed samples 🎉</p>

                    )

                    :

                    overdue.map(sample => (

                        <div
                            key={sample.id}
                            className="critical-item"
                        >

                            <strong>

                                #{sample.id}

                            </strong>

                            <br/>

                            {sample.patient}

                            <br/>

                            Waiting {sample.days} day(s)

                        </div>

                    ))

                }

            </div>

            {/* Technician Workload */}

            <div className="operations-card">

                <h3>👨‍🔬 Technician Workload</h3>

                {

                    Object.entries(workload).map(

                        ([name,count])=>(

                            <div
                                key={name}
                                className="work-row"
                            >

                                <span>{name}</span>

                                <progress
                                    value={count}
                                    max="10"
                                />

                                <strong>{count}</strong>

                            </div>

                        )

                    )

                }

            </div>

        </div>

    );

}

export default OperationsCenter;