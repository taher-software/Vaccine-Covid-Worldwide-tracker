import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Typography } from "@mui/material";
import CountrySelect from "./CountrySelector";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import './Navbar.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    fontSize: '1rem',
  },
});

const theme = createTheme({
  palette: {
    primary:{
      main: '#fff',
    },
    secondary: {
      main: '#fff',
    }
  },
  text: {
    secondary: '#fff',
  },
});

const HeaderPage = (props) => {
  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const classes = useStyles();
  const {page} = props;

  return (
    <header className="header">

      {page ==='home' &&(
      <Grid container spacing={0} columns={12}>
        <Grid item xs={3} >
          <p className="date">{today}</p>
        </Grid>
        <Grid item xs={4} className="title">
          <p> Covid Worldwide Vaccination</p>
        </Grid>
        <Grid item xs={5}>
          <CountrySelect />
        </Grid>
      </Grid>)}
      
      {page !== 'home' && (
    <ThemeProvider theme={theme}>
      <Grid container spacing={0} columns={12}>
        <Grid item xs={1}>
          <ArrowBackIosIcon style={{ margin: '30% 0 0 15%' }}/>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <p>{page}/Covid State</p>
        </Grid>
        <Grid item xs={5}>
          <TextField
           id="date"
           label="Date"
           type="date"
           style= {{width: '180px'}}
           defaultValue={today}
           sx={{ width: 220 }}
           InputLabelProps={{
           shrink: true,
        }}
      />
        </Grid>

      </Grid>
    </ThemeProvider>
      )}
    </header>
   
  )
}

export default HeaderPage;