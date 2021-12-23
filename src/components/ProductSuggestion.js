import React from 'react'
import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';


class ProductSuggestion extends React.Component {
    state = {
        formcontainer: false,
    }
    render() {
        const HandleChange = e => {
            this.setState({ formcontainer: !this.state.formcontainer })
        }
        const hideForm = this.state.formcontainer
        return (
            <React.Fragment>
                <center style={{ marginTop: "10px" }}>
                    <Button onClick={HandleChange} variant="contained" style={{ backgroundColor: "#ffc930" }}>Feedback</Button> {(hideForm &&
                        <Box component="form" sx={{
                            '& .MuiTextField-root': { m: 2, width: '40ch' },
                        }}>
                            <div>
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
                                    <TextField
                                        required
                                        id="outlined-text"
                                        label="Description of Product required"
                                        multiline rows={4}
                                    />
                                </Grid>
                            </div>
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
export default ProductSuggestion
