import React from 'react';

import './styles/App.css';
import Navbar from './components/NavBar';
import {
  BrowserRouter as Router,

} from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
      </Router>
    </React.Fragment>

  );
}

export default App;
