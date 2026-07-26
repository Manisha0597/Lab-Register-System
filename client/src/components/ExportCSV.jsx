function ExportCSV({ samples }) {


    function downloadCSV(){

        const headers = [
            "ID",
            "Patient",
            "Test",
            "Technician",
            "Status",
            "Days"
        ];


        const rows = samples.map(sample => [

            sample.id,
            sample.patient,
            sample.test,
            sample.technician,
            sample.status,
            sample.days

        ]);


        const csvContent = [

            headers,
            ...rows

        ]
        .map(row => row.join(","))
        .join("\n");



        const blob = new Blob(
            [csvContent],
            {
                type:"text/csv"
            }
        );


        const url = URL.createObjectURL(blob);


        const link = document.createElement("a");

        link.href = url;

        link.download = "laboratory_report.csv";

        link.click();


    }



    return (

        <button
            onClick={downloadCSV}
            style={{
                padding:"12px 20px",
                borderRadius:"10px",
                border:"none",
                background:"#2563eb",
                color:"white",
                cursor:"pointer"
            }}
        >

            📥 Export CSV Report

        </button>

    );

}


export default ExportCSV;