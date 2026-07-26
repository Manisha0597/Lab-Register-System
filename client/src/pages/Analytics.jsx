import AnalyticsCharts from "../components/AnalyticsCharts";
import OperationsCenter from "../components/OperationsCenter";
import DashboardStats from "../components/DashboardStats";
import { useEffect, useState } from "react";
import API from "../api/sampleApi";


function Analytics(){

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



    return(

        <div>

            <h1>📊 Analytics Dashboard</h1>

            <p>
                Laboratory performance and workflow analysis
            </p>


            <DashboardStats samples={samples}/>


            <OperationsCenter samples={samples}/>


            <AnalyticsCharts samples={samples}/>


        </div>

    );

}


export default Analytics;