import React from "react";
import { Paper } from "@material-ui/core";
import { PieChart, Pie } from "recharts";

const data = [
    {
        name: "completed",
        value: 100
    },
    {
        name: "pending",
        value: 20
    },
    {
        name: "not started",
        value: 10
    }
];

function PieChartComponent() {
    return (
        <Paper>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey={"name"}
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                />
            </PieChart>
        </Paper>
    );
}

export { PieChartComponent };
