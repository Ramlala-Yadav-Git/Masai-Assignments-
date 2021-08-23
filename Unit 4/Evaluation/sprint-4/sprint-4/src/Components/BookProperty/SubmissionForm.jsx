import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';
import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSuccessNotification } from './SuccessNotification';


export const SubmissionForm = () => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [sure, setSure] = useState(false)
    const { successAlert, setSuccesAlert } = useSuccessNotification(false)

    const handleSubmit = () => {
        alert("Are you Sure")
        setName("")
        setNumber("")
        setSure(!sure);
        console.log(successAlert);
        setSuccesAlert(true)
        setTimeout(() => {
            setSuccesAlert(false)
        }, 2000)
    }



    const handleClose = () => {
        alert("fhaskh")
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


        </div>
        {
            successAlert && <div>
                <h3>
                    Your request has been successfully filled!
                </h3>
            </div>
        }
    </>
}





