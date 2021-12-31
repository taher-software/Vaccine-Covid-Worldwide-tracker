import React from "react";
import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Typography } from "@mui/material";
import CountrySelect from "./CountrySelector";
import './Navbar.css';

const useStyles = makeStyles({
  title: {
    fontSize: '1rem',
  },
});

const HeaderPage = () => {
  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  
  const classes = useStyles();
  return (
    <header className="header">
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
    </Grid>
    </header>
  )
}

export default HeaderPage;