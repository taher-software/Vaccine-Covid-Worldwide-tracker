import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import HeaderPage from '../Navbar/Nav';
import getCountryCovidData from '../../Redux/CountryVaccination/Thunk/thunk';
import { getRegionData, getCitiesNames, getCities } from '../../Logic/Logic';
import CountryVaccinationChart from './chartCountry';

const CountryDetails = () => {
  const date = new Date();
  const today = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.covidCountry);
  const country = useSelector((state) => state.country);
  useEffect(() => dispatch(getCountryCovidData(country)), []);
  const citiesData = getCities(data);
  const [cities, setCities] = useState(getCitiesNames(data));
  useEffect(() => setCities(getCitiesNames(data)), [data]);
  let i = 0;
  const selectRegion = (e) => {
    const city = e.target.textContent;
    if (city === '') return setCities(getCitiesNames(data));
    
    return setCities([city]);
  };
  return (
    <>
      <HeaderPage page={country} cities={citiesData} changeHandler={selectRegion} />
      <CountryVaccinationChart countryData={data} />
      <Typography sx={{ pl: '2.5%' }} style={{ backgroundColor: 'rgb(52, 84, 139)', color: 'white' }}>
        CITY/TOWN BREAKDOWN -
        {today}
      </Typography>
      {cities.length === 0
       && (
       <Typography
         variant="h6"
         style={{
           backgroundColor: 'rgb(65, 103, 174)', padding: '200px 10%', color: 'white', fontFamily: 'Lato, sans-serif', fontWeight: 'bold',
         }}
       >
         There are no region data for
         {country}
       </Typography>
       )}
      {cities.length > 0
        && (
        <Grid container columns={12} style={{ backgroundColor: 'rgb(85, 136, 227)' }}>
          {cities.map((city) => {
            i += 1;
            const administered = getRegionData(data, city);
            return (
              <Grid
                item
                xs={12}
                key={city}
                style={{
                  display: 'flex', alignItems: 'center', height: '100px', backgroundColor: i % 2 === 0 ? 'rgb(65, 103, 174)' : 'rgb(62, 97, 163)',
                }}
              >
                <Typography
                  variant="h2"
                  style={{
                    margin: '0 20% 0 5%', fontSize: '18px', color: 'white', fontFamily: 'Lato, sans-serif', width: '30%',
                  }}
                >
                  {city}
                </Typography>
                <Typography
                  variant="h2"
                  style={{
                    fontSize: '18px', color: 'white', fontFamily: 'Lato, sans-serif', width: '35%',
                  }}
                >
                  {administered === 'No data available' ? administered : `${administered} administered` }
                </Typography>
                <ArrowCircleRightTwoToneIcon style={{ color: 'white', margin: '5px 0 0 2.5%' }} />
              </Grid>
            );
          })}
        </Grid>
        )}
    </>
  );
};

export default CountryDetails;
