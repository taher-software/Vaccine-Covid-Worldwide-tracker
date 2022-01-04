/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PropTypes from 'prop-types';
import Filter from './citySelector';
import './Navbar.css';
import CountrySelect from './CountrySelector';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#fff',
    },
  },
  text: {
    secondary: '#fff',
  },
});

const HeaderPage = (props) => {
  const history = useHistory();
  const date = new Date();
  const month = (date.getMonth() + 1).length === 1 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDate().length === 1 ? date.getDate() : `0${date.getDate()}`;
  const today = `${date.getFullYear()}-${month}-${day}`;

  const { page, changeHandler, cities } = props;
  const country = useSelector((state) => state.country);
  const backToHome = () => {
    history.push('/');
  };
  return (
    <header className="header">

      {page === 'home' && (
      <Grid container spacing={0} columns={12}>
        <Grid item xs={2}>
          <p className="date">{today}</p>
        </Grid>
        <Grid item xs={4} className="title">
          <p> Covid Worldwide Vaccination</p>
        </Grid>
        <Grid item xs={6}>
          <CountrySelect changeHandler={changeHandler} />
        </Grid>
      </Grid>
      )}

      {page !== 'home' && (
      <ThemeProvider theme={theme}>
        <Grid container spacing={0} columns={12}>
          <Grid item xs={1} onClick={backToHome}>
            <ArrowBackIosIcon style={{ margin: '30% 0 0 15%' }} />
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'center' }}>
            <p>
              {country}
              /Covid State
            </p>
          </Grid>
          <Grid item xs={5}>
            <Filter cities={cities} changeHandler={changeHandler} />
          </Grid>

        </Grid>
      </ThemeProvider>
      )}
    </header>

  );
};

HeaderPage.propTypes = {
  page: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  cities: PropTypes.instanceOf(Array),
};
HeaderPage.defaultProps = {
  cities: [],
};
export default HeaderPage;
