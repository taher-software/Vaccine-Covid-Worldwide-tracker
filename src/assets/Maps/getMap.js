import { NoEncryption } from "@mui/icons-material";
import { gist } from "./gistfile";

const getMap = (country) => {
  const omittedCountry = ['Micronesia', 'Marshall Islands'];
  if (omittedCountry.includes(country)) return undefined;
  try {
    const gistCountry = Object.keys(gist).find(key => gist[key] === country);
    const urlMap = `https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/${gistCountry.toLowerCase()}/vector.svg`;
    return urlMap;
  }
  catch {
    return undefined;
  }
}; 
export default getMap;
