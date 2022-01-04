import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeaderPage from '../Navbar/Nav';
import getCountryCovidData from '../../Redux/CountryVaccination/Thunk/thunk';
import { getCities } from '../../Logic/Logic';
import CountryVaccinationChart from './chartCountry';

const CountryDetails = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.covidCountry);
  const country = useSelector((state) => state.country);
  useEffect(() => dispatch(getCountryCovidData(country)), []);
  const cities = getCities(data);
  return (
    <>
      <HeaderPage page={country} cities={cities} />
      <CountryVaccinationChart countryData={data} />
    </>
  );
};

export default CountryDetails;
