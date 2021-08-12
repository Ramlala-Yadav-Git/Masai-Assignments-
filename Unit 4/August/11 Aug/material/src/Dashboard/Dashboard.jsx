import { Grid } from "@material-ui/core";
import { PieChartComponent } from "./Components/PieChart";
import { BarChart } from "./Components/BarChart";
import React from "react";
import { CardBar } from "./Components/CardBar";
import { CardSummary } from "./Components/CardSummary";

function Dashboard() {
    return (
        <Grid>
            <Grid container spacing={3}>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <CardSummary
                        title="Problems completed today"
                        value={5}
                        footer={<div> 24% increase from yesterday </div>}
                    />
                </Grid>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <CardSummary
                        title="Total Assignment completed"
                        value={`98/130`}
                        footer={<div> 8% increase from yesterday </div>}
                    />
                </Grid>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <CardSummary
                        title="Attendance"
                        value={`78%`}
                        footer={<div> 5% decrease from last week </div>}
                    />
                </Grid>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <CardSummary
                        title="Total Points"
                        value={900}
                        footer={<div> 20% increase from last week </div>}
                    />
                </Grid>
                <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                    <CardBar title="Activity" chart={<BarChart />} />
                </Grid>
                <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                    <CardBar title="Stat" chart={<PieChartComponent />} />
                </Grid>
            </Grid>
        </Grid>
    );
}

export { Dashboard };
