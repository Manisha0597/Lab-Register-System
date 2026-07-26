import { useEffect, useState } from "react";

import AIRecommendationPanel from "../components/AIRecommendationPanel";
import PredictiveRiskPanel from "../components/PredictiveRiskPanel";
import SmartAlert from "../components/SmartAlert";
import AIChatAssistant from "../components/AIChatAssistant";

import API from "../api/sampleApi";


function AIInsights(){

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

            <h1>🤖 AI Laboratory Insights</h1>

            <p>
                AI-powered predictions and intelligent laboratory recommendations
            </p>


            <AIRecommendationPanel 
                samples={samples}
            />


            <PredictiveRiskPanel 
                samples={samples}
            />


            <SmartAlert 
                samples={samples}
            />


            <AIChatAssistant 
                samples={samples}
            />


        </div>

    );

}


export default AIInsights;