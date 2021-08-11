
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Toolbar from "@material-ui/core/Toolbar"
import Container from "@material-ui/core/Container"
import IconButton from "@material-ui/core/IconButton"
import { Typography } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';



export const Layout = ({ children }) => {



    return (<>
        <Container maxWidth="sm">
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon />
                        <Typography>
                            Menu
                        </Typography>
                    </IconButton>
                </Toolbar>

            </AppBar>
            <Box>
                {children}
            </Box>
        </Container>
    </>)
}