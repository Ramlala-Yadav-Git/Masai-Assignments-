import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';
import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


export const SubmissionForm = () => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [sure, setSure] = useState(false)
    const handleSubmit = () => {
        console.log(name, number);
        setName("")
        setNumber("")
    }

    const open = () => {

    }
    const handleClose = () => {

    }
    const handleOpen = () => {

    }

    return <>
        <div>
            <Input placeholder="Enter Your Full Name ..." type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <Input placeholder="Enter Your Phone Number" type="number" onChange={(e) => setNumber(e.target.value)} value={number} />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>

            <SimpleModal />

        </div>

    </>
}




function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">  Are You Sure</h2>

            <SimpleModal />
        </div>
    );

    return (
        <div>

            <Button variant="contained" color="primary" onClick={handleOpen} >
                Submit
            </Button>

            <Modal
                open={open}
                onClick={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}


