import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import React from 'react';
import { useSuccessNotification } from './SuccessNotification';
import { Link } from 'react-router-dom';
import { StylesContext } from '@material-ui/styles';
import styles from "./BookProperty.module.css"
import axios from 'axios';


export const SubmissionForm = () => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [sure, setSure] = useState(false)
    const { successAlert, setSuccesAlert } = useSuccessNotification(false)

    const handleSubmit = () => {
        const payload = {
            name: name,
            number: number
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
                <Input placeholder="Enter Your Full Name ..." type="text" onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <br />
                <Input placeholder="Enter Your Phone Number" type="number" onChange={(e) => setNumber(e.target.value)} value={number} />
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





