import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"


export function GridBox() {

    const pages = new Array(12).fill(0).map((a, i) => i + 1);

    return (
        <>
            <Grid container spacing={2} p={5}>
                {
                    pages.map(item => (
                        <Grid xl={5} lg={4} md={3} sm={2} xs={1} item key={item} >

                            <Paper>
                                <Box>
                                    <Typography>
                                        Item : {item}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))
                }
                <Typography variant="h2" m={10}  >
                    Child
                </Typography>

                <Grid container spacing={5} >
                    <Grid item xl={1} xs={12} sm={2} >
                        <Paper>
                            <Typography>
                                item 2 :1
                            </Typography>
                        </Paper>

                    </Grid>
                    <Grid item xl={1} xs={12} sm={2} >
                        <Paper>
                            <Typography>
                                item 2 :2
                            </Typography>
                        </Paper>

                    </Grid>
                    <Grid item xl={1} xs={12} sm={2} >
                        <Paper>
                            <Typography>
                                item 2 :3
                            </Typography>
                        </Paper>

                    </Grid>
                    <Grid item xl={1} xs={12} sm={2} >
                        <Paper>
                            <Typography>
                                item 2 :4
                            </Typography>
                        </Paper>

                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}