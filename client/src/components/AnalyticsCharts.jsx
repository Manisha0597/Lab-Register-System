import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis
} from "recharts";


function AnalyticsCharts({ samples }) {

    const statusData = [
        {
            name: "Pending",
            value: samples.filter(s => s.status === "Pending").length
        },
        {
            name: "Processing",
            value: samples.filter(s => s.status === "Processing").length
        },
        {
            name: "Completed",
            value: samples.filter(s => s.status === "Completed").length
        }
    ];

    const COLORS = [
        "#F59E0B",
        "#3B82F6",
        "#22C55E"
    ];

    return (

        <div className="chart-grid">

            <div className="chart-card">

                <h3>Status Distribution</h3>

                <ResponsiveContainer width="100%" height={280}>

                    <PieChart>

                        <Pie
                            data={statusData}
                            dataKey="value"
                            outerRadius={90}
                        >

                            {
                                statusData.map((entry,index)=>(

                                    <Cell
                                        key={index}
                                        fill={COLORS[index]}
                                    />

                                ))
                            }

                        </Pie>

                        <Tooltip/>

                    </PieChart>

                </ResponsiveContainer>

            </div>

            <div className="chart-card">

                <h3>Samples Overview</h3>

                <ResponsiveContainer width="100%" height={280}>

                    <BarChart data={statusData}>

                        <XAxis dataKey="name"/>

                        <YAxis/>

                        <Tooltip/>

                        <Bar
                            dataKey="value"
                            fill="#2563EB"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default AnalyticsCharts;