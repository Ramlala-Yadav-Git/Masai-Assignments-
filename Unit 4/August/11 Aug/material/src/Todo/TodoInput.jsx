import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export function TodoInput({ GetTodo }) {
    const classes = useStyles();
    const [input, setInput] = useState("")

    const handleClick = () => {
        GetTodo(input);
        alert("Task Added")
        setInput("")
    }

    return (

        <Box m={3} style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <form className={classes.root} Validate autoComplete="off">
                <TextField id="standard-basic" label="+ ADD A TASK" onChange={(e) => { setInput(e.target.value) }} value={input} />
            </form>
            <Icon style={{ fontSize: 40, cursor: "pointer", marginTop: "21px" }} color="primary" onClick={() => handleClick()}>add_circle</Icon>
        </Box >
    );
}