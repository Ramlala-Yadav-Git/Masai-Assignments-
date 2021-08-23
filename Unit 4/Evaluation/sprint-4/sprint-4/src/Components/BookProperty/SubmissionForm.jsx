import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';
import { Typography } from '@material-ui/core';


export const SubmissionForm = () => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const handleSubmit = () => {
        console.log(name, number);
        setName("")
        setNumber("")
    }

    const open = () => {

    }
    const handleClose = () => {

    }

    return <>
        <div>
            <Input placeholder="Enter Your Full Name ..." type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <Input placeholder="Enter Your Phone Number" type="number" onChange={(e) => setNumber(e.target.value)} value={number} />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>

            <Modal

                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Typography>
                    Open
                </Typography>
            </Modal>


        </div>

    </>
}


