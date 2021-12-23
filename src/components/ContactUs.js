import React from 'react'
import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


class ContactUs extends React.Component {
    state = {
        formcontainer: false,
        reason: ''
    }
    render() {
        const hideForm = this.state.formcontainer
        const [reason, setReason] = this.state.reason

        const HandleChange = e => {
            this.setState({ formcontainer: !this.state.formcontainer })
        }

        const handleReason = (e) => {
            setReason(e.target.value)

        }
        return (
            <React.Fragment>

                <center style={{ marginTop: "10px" }}>
                    <Button onClick={HandleChange} variant="contained" style={{ backgroundColor: "#ffc930" }}>Contact Us</Button> {(hideForm &&
                        <Box component="form" sx={{
                            '& .MuiTextField-root': { m: 2, width: '40ch' },
                        }}>
                            <Grid xs={12} sm={6} item>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Name"
                                />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email address"
                                    type="email"
                                />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <FormControl sx={{ m: 1, minWidth: "40ch" }}>
                                    <InputLabel>Contact reason</InputLabel>
                                    <Select
                                        label="Contact reason"
                                        id="outlined-required"
                                        value={reason}
                                        onChange={handleReason}
                                    >
                                        <MenuItem value={"Order question"}>Order question</MenuItem>
                                        <MenuItem value={"Website feedback"}>Website feedback</MenuItem>
                                        <MenuItem value={"Trouble finding product"}>Trouble finding product</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField
                                    required
                                    id="outlined-text"
                                    label="Message"
                                    multiline rows={4}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <Button>Submit</Button>
                            </Grid>
                        </Box>
                    )}

                </center>
            </React.Fragment>
        )
    }
}
export default ContactUs
