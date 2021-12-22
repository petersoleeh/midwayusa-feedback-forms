import React from 'react'
import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';


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
                <center style={{ marginTop: "80px" }}>
                    <h1>Click the feedback button to fill the Product Suggestion form</h1>
                    <Button onClick={HandleChange} variant="contained" style={{ marginTop: "30px" }}>Feedback</Button> {(hideForm &&

                        <Box component="form" sx={{
                            '& .MuiTextField-root': { m: 2, width: '40ch' },
                        }}>
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Name"
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email address"
                                    type="email"
                                />
                                <TextField
                                    required
                                    id="outlined-text"
                                    label="Description of Product required"
                                />
                            </div>
                        </Box>

                    )}

                </center>

            </React.Fragment>
        )
    }
}
export default ProductSuggestion
