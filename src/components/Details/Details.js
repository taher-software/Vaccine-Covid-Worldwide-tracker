import React from "react";
import HeaderPage from "../Navbar/Nav";
const CountryDetails = (props) => {
    const {country} = {props}
    return (
      <HeaderPage page= {country}/>
   );
}