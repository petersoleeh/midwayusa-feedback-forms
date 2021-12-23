import React from 'react';

import './styles/App.css';
import Navbar from './components/NavBar';
import ProductSuggestion from './components/ProductSuggestion';
import ContactUs from './components/ContactUs';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import Box from "@mui/material/Box"

import { Grid, Container, Card, CardContent, Typography, CardActions } from '@mui/material';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Box>
          <Container maxWidth="lg" style={{ marginTop: "100px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6}>
                <Card >
                  <CardContent>
                    <Typography variant="h4" style={{ textAlign: "center", marginBottom: "30px" }}>
                      Feedback
                    </Typography>
                    <Typography variant="body1">
                      Chat with us - Our team is here to help you find the perfect product for your needs.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <ProductSuggestion />
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Card >
                  <CardContent>
                    <Typography variant="h4" style={{ textAlign: "center", marginBottom: "30px" }}>
                      Contact Us
                    </Typography>
                    <Typography variant="body1">
                      Send a message to our team, and we’ll get back to you as soon as possible.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <ContactUs />
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Router>
    </React.Fragment>

  );
}

export default App;
