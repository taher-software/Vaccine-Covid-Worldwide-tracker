import React from "react";
import Home from "./components/Home/home";
import CountryDetails from "./components/Details/Details";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'> <Home /></Route>
        <Route path='/Details'> <CountryDetails /></Route>
      </Switch>
    </Router>
  );
}

export default App;
