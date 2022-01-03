import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import { useHistory } from 'react-router-dom';
import getMap from '../../assets/Maps/getMap';
import { globalRateVaccination, countryRateVaccination } from '../../Logic/Logic';
import WORLDMAP from '../../assets/Images/world-map.jpg';
import HeaderPage from '../Navbar/Nav';
import { setCountry } from '../../Redux/Country/Action/Action';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state) => state.vaccination);
  const [worldVaccination, setWorldVaccination] = useState(globalRateVaccination(data));
  const [countries, setCountriesData] = useState(Object.keys(data));
  useEffect(() => setWorldVaccination(globalRateVaccination(data)), [data]);
  useEffect(() => setCountriesData(Object.keys(data)), [data]);
  let i = -1;
  const backColor = ['rgb(65, 103, 174)', 'rgb(62, 97, 163)', 'rgb(62, 97, 163)', 'rgb(65, 103, 174)'];
  const selectCountry = (e) => {
    const country = e.target.textContent;
    if (country === '') {
      setCountriesData(Object.keys(data));
    } else {
      setCountriesData([country]);
    }
  };
  const getDetails = (country) => {
    dispatch(setCountry(country));
    history.push('/Details');
  };
  return (
    <>
      <HeaderPage page="home" changeHandler={selectCountry} />
      <div className="general-inf">
        <div className="worldwide-map">
          <img src={WORLDMAP} alt="worldwide-map" />
        </div>
        <div className="worldwide-vacc">
          <div className="display-text">
            <h1>WORLDWIDE</h1>
            <span>
              {' '}
              {worldVaccination === 'Waiting data...' ? worldVaccination : `${worldVaccination}% vaccinated`}
            </span>
          </div>
        </div>
      </div>
      <Typography sx={{ pl: '2.5%', mb: 0 }} variant="subtitle2" gutterBottom style={{ backgroundColor: 'rgb(52, 84, 139)', color: 'white' }}> STATS BY COUNTRY</Typography>
      <Grid container columns={12} style={{ backgroundColor: 'rgb(85, 136, 227)' }}>
        {countries.map((country) => {
          if (country.toLowerCase() !== 'global') {
            const rate = countryRateVaccination(data, country);
            i += 1;
            return (
              <Grid
                item
                xs={6}
                key={country}
                style={{
                  height: '242px',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: `${backColor[i % 4]}`,
                }}
                onClick={() => getDetails(country)}
              >
                <div
                  className="map"
                  style={{
                    width: '100%',
                    height: '140px',
                    display: 'flex',
                  }}
                >
                  <div style={{
                    backgroundImage: getMap(country) ? `url(${getMap(country)})` : 'none',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    filter: 'invert(0.8)',
                    width: '85%',
                    height: '140px',
                  }}
                  />
                  <ArrowCircleRightTwoToneIcon style={{ color: 'white', margin: '5px 0 0 2.5%' }} />
                </div>
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', height: '98px', marginRight: '2.5%',
                }}
                >
                  <Typography
                    variant="h2"
                    style={{
                      textTransform: 'uppercase', fontFamily: 'Gill, sans-serif', fontSize: '14px', color: 'white',
                    }}
                  >
                    {country}
                  </Typography>
                  <Typography style={{ fontFamily: 'Lato, sans-serif', color: 'white' }} variant="span">{rate === 'Waiting data...' || rate === 'No data available...' ? rate : `${rate}% vaccinated`}</Typography>
                </div>
              </Grid>
            );
          }
          return undefined;
        })}

      </Grid>
    </>
  );
};

export default Home;
