import React from "react";
import { Paper } from "@material-ui/core";
import {
    Chart,
    BarSeries,
    ArgumentAxis,
    ValueAxis,
    Tooltip
} from "@devexpress/dx-react-chart-material-ui";

import { EventTracker } from "@devexpress/dx-react-chart";

const data = [
    { date: "03-10-2020", status: "2" },
    { date: "04-10-2020", status: "3" },
    { date: "05-10-2020", status: "3" },
    { date: "06-10-2020", status: "4" },
    { date: "07-10-2020", status: "5" },
    { date: "08-10-2020", status: "6" },
    { date: "09-10-2020", status: "6" }
];

function BarChart() {
    return (
        <Paper>
            <Chart data={data}>
                <ArgumentAxis />
                <ValueAxis />
                <BarSeries valueField="status" argumentField="date" />
                <EventTracker />
                <Tooltip />
            </Chart>
        </Paper>
    );
}

export { BarChart };
