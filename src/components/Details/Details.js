import { React, useEffect, useState } from 'react';
import HeaderPage from '../Navbar/Nav';
import { useSelector, useDispatch } from 'react-redux';
import getCountryCovidData from '../../Redux/CountryVaccination/Thunk/thunk';
import { getCities } from '../../Logic/Logic';
const CountryDetails = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.covidCountry);
  const country = useSelector( state => state.country);
  useEffect(() => dispatch(getCountryCovidData(country)),[]);
  const cities = getCities(data);
  return (
    <HeaderPage page={country} cities={cities} />
  );
};

export default CountryDetails;
