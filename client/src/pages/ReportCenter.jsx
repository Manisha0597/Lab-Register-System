import { useEffect, useState } from "react";
import API from "../api/sampleApi";
import ExportCSV from "../components/ExportCSV";


function ReportCenter(){

    const [samples,setSamples] = useState([]);


    useEffect(()=>{

        loadSamples();

    },[]);



    async function loadSamples(){

        try{

            const res = await API.get("/api/samples");

            setSamples(res.data);

        }
        catch(error){

            console.log(error);

        }

    }



    const pending =
        samples.filter(
            sample => sample.status === "Pending"
        ).length;


    const processing =
        samples.filter(
            sample => sample.status === "Processing"
        ).length;


    const completed =
        samples.filter(
            sample => sample.status === "Completed"
        ).length;



    return(

        <div>

            <h1>📄 Laboratory Reports</h1>

            <p>
                Sample performance and workflow summary
            </p>


            <div
                style={{
                    display:"flex",
                    gap:"20px",
                    marginTop:"25px"
                }}
            >


                <div>
                    <h3>Total Samples</h3>
                    <h2>{samples.length}</h2>
                </div>



                <div>
                    <h3>Pending</h3>
                    <h2>{pending}</h2>
                </div>



                <div>
                    <h3>Processing</h3>
                    <h2>{processing}</h2>
                </div>



                <div>
                    <h3>Completed</h3>
                    <h2>{completed}</h2>
                </div>


            </div>



            <br/>


            <h2>Export Report</h2>


            <ExportCSV samples={samples}/>


        </div>

    );

}


export default ReportCenter;