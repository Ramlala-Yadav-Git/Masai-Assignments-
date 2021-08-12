import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    header: {
        textTransform: "uppercase"
    }
}));

function CardSummary({ title, value, footer }) {
    const classes = useStyles();
    return (
        <>
            <Card>
                <CardContent>
                    <Typography
                        gutterBottom
                        className={classes.header}
                        color="textPrimary"
                    >
                        {title}
                    </Typography>
                    <Divider />
                    <Typography variant="h3" color="textPrimary">
                        {value}
                    </Typography>
                    <div>{footer}</div>
                </CardContent>
            </Card>
        </>
    );
}

export { CardSummary };
