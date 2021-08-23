import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import React from 'react';
import { useSuccessNotification } from './SuccessNotification';
import { Link } from 'react-router-dom';
import styles from "./BookProperty.module.css"
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



export const SubmissionForm = () => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [sure, setSure] = useState(false)
    const [dob, setDob] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const { successAlert, setSuccesAlert } = useSuccessNotification(false)

    const handleSubmit = () => {
        const payload = {
            name: name,
            number: number,
            dob: dob,
            startDate: startDate,
            endDate: endDate
        }
        alert("Are you Sure");
        axios.post("http://localhost:3001/data", payload)
        setName("")
        setNumber("")
        setSure(!sure);
        console.log(successAlert);
        setSuccesAlert(true)
        setTimeout(() => {
            setSuccesAlert(false)
        }, 2000)
    }







    return <>
        <div className={styles.submission}>
            <div>
                <Input placeholder="Enter Full Name ..." type="text" onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <br />
                <Input placeholder="Enter Phone Number ..." type="number" onChange={(e) => setNumber(e.target.value)} value={number} />
                <br />
                <br />

                <DatePickers label={"Birth date"} className={styles.datePicker} onChange={(e) => setDob(e.target.value)} />
                <br />
                <br />
                <DatePickers label={"Booking date Start"} className={styles.datePicker} onChange={(e) => setStartDate(e.target.value)} />
                <br />
                <br />
                <DatePickers label={"Booking date End"} className={styles.datePicker} onChange={(e) => setEndDate(e.target.value)} />
                <br />
                <br />

                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                <br />
                <br />

            </div>
            {
                successAlert && <div className={styles.alert}>
                    <h3>
                        Your request has been successfully filled!
                    </h3>
                </div>
            }
            <Button variant="outlined" color="primary">
                <Link to="/">
                    Back
                </Link>


            </Button>
        </div>
    </>
}





const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(73),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function DatePickers({ label }) {
    const classes = useStyles();

    return (
        <form className={classes.container} >
            <TextField
                id="date"
                label={label}
                type="date"
                defaultValue="2021-08-23"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}

