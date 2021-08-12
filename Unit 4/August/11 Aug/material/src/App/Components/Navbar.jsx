import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import GithubIcon from "@material-ui/icons/GitHub";
import MessageIcon from "@material-ui/icons/Message";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { useHistory } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flex: 1
    },
    buttonNavbar: {
        padding: 10
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerHeader: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(5, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    contentHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    }
}));

function Navbar(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    const handleRouteChange = (to) => {
        history.push(to);
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        edge="start"
                        onClick={() => setOpen(!open)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6">
                        Masai School
                    </Typography>
                    <IconButton color="inherit">
                        <GithubIcon />
                        <Typography
                            className={classes.buttonNavbar}
                            variant="h6"
                            color="inherit"
                        >
                            Github
                        </Typography>
                    </IconButton>
                    <IconButton color="inherit">
                        <MessageIcon />
                        <Typography
                            className={classes.buttonNavbar}
                            variant="h6"
                            color="inherit"
                        >
                            Slack
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.drawerHeader}>
                    <Avatar>MS</Avatar>
                    <Typography variant="h6"> Masai School </Typography>
                    <Typography variant="subtitle1"> Batch Name </Typography>
                </div>
                <Divider />
                <List>
                    {[
                        {
                            text: "Dashboard",
                            icon: <DashboardIcon />,
                            to: "/"
                        },
                        {
                            text: "Orders",
                            icon: <AssignmentIcon />,
                            to: "/orders"
                        }
                    ].map((item) => (
                        <ListItem
                            onClick={() => handleRouteChange(item.to)}
                            button
                            key={item.text}
                        >
                            <ListItemIcon> {item.icon} </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open
                })}
            >
                <div className={classes.contentHeader} />
                {props.children}
            </main>
        </div>
    );
}

export { Navbar };
