import { predictDelay } from "../utils/predictDelay";
import "./PredictiveRiskPanel.css";

function PredictiveRiskPanel({ samples }) {

    return (

        <div className="risk-panel">

            <h2>🧠 Predictive AI Risk Analysis</h2>

            {

                samples.map(sample => {

                    const prediction = predictDelay(sample);

                    return (

                        <div
                            key={sample.id}
                            className="risk-card"
                            style={{
                                borderLeft: `8px solid ${prediction.color}`
                            }}
                        >

                            <h3>

                                Sample #{sample.id}

                            </h3>

                            <p>
                                <strong>Probability</strong>
                            </p>
                                                    
                            <div
                                style={{
                                    background: prediction.color,
                                    color: "#fff",
                                    display: "inline-block",
                                    padding: "6px 14px",
                                    borderRadius: "25px",
                                    fontWeight: "600",
                                    marginBottom: "12px"
                                }}
                            >
                                {prediction.score}% Risk
                            </div>

                            <p>

                                <strong>Risk:</strong>

                                {" "}

                                {prediction.risk}

                            </p>

                            <p>

                                <strong>Probability:</strong>

                                {" "}

                                {prediction.score}%

                            </p>

                            <p>

                                <strong>Recommendation:</strong>

                                {" "}

                                {prediction.recommendation}

                            </p>

                        </div>

                    );

                })

            }

        </div>

    );

}

export default PredictiveRiskPanel;