import React from 'react';

import './styles/App.css';
import Navbar from './components/NavBar';
import ProductSuggestion from './components/ProductSuggestion';
import {
  BrowserRouter as Router,

} from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <ProductSuggestion/>
      </Router>
    </React.Fragment>

  );
}

export default App;
