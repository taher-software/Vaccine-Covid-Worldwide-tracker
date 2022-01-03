import { React, useEffect } from "react";
import Home from "./components/Home/home";
import CountryDetails from "./components/Details/Details";
import getVaccineData from "./Redux/Vaccination/Thunk/thunk";
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getVaccineData()), []);

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
