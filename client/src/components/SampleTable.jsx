function SampleTable({ samples }) {

    return (

        <table className="sample-table">

            <thead>

                <tr>

                    <th>ID</th>

                    <th>Patient</th>

                    <th>Test</th>

                    <th>Status</th>

                    <th>Days</th>

                </tr>

            </thead>

            <tbody>

                {

                    samples.map(sample => (

                        <tr key={sample.id}>

                            <td>{sample.id}</td>

                            <td>{sample.patient}</td>

                            <td>{sample.test}</td>

                            <td>{sample.status}</td>

                            <td>{sample.days}</td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}

export default SampleTable;