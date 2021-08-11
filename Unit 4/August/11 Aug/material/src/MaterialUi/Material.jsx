import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import CheckBox from "@material-ui/core/CheckBox"
import TextField from "@material-ui/core/TextField"
import TypoGraphy from "@material-ui/core/TypoGraphy"
import MenuItem from "@material-ui/core/MenuItem"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/styles"
import Modal from "@material-ui/core/Modal"
import { useState } from "react"

const useStyles = makeStyles({
    modal: {

        margin: "1px",
        marginTop: "1px"
    },
    model2: {



        background: "gray",
        width: "500px",
        margin: "auto",
        borderRadius: "10px",
        marginTop: "10px",
        padding: "10px",
    },
    model3: {



        background: "white",
        width: "500px",
        height: "50px",
        margin: "auto",
        borderRadius: "10px",
        marginTop: "10px",
        padding: "10px",
        justifyContent: "center",
        justifyItems: "center",
        textAlign: "center",
    }

})
function Material() {
    const [checked, setChecked] = useState(false);
    const [country, setCountry] = useState("IN")
    const [open, setOpen] = useState(false)

    const styles = useStyles()
    const handleClose = () => {
        setOpen(!open)
    }
    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="App">

            <TypoGraphy variant="h3">
                App
            </TypoGraphy>
            <Box p={4} ml={5} className={styles.modal}>
                <Button variant="contained">Default</Button>
                <Button
                    variant="contained" color="primary">
                    Primary
                </Button>
                <CheckBox color="primary" />
            </Box>
            <Box>
                <TextField variant="outlined" label="email" />

            </Box>


            <Box className={styles.model2}>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    <TypoGraphy>
                        Open Model
                    </TypoGraphy>
                </Button>
                <Box  >
                    <Modal
                        open={open}
                        onClose={handleClose}
                        className={styles.model3}
                    >

                        <TypoGraphy>

                            <Button variant="contained" color="secondary" onClick={handleOpen} >   close</Button>

                        </TypoGraphy>
                    </Modal>
                </Box>
            </Box>

        </div>
    );
}

export default Material;
