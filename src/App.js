// React
import React from 'react';

// tirt-parts
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Application
import HomePage from './pages/Home/HomePage'
import './App.scss'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
