import { startCountryData, failureCountryData, getCountryData } from '../Action/Action';

const endPoint = 'https://covid-api.mmediagroup.fr/v1/vaccines?country=';
const fetchCountryData = (country) => {
  const url = endPoint + country;
  return fetch(url);
};

const getCountryCovidData = (country) => (dispatch) => {
  dispatch(startCountryData());
  fetchCountryData(country)
    .then((res) => res.json())
    .then((result) => getCountryData(result))
    .catch((err) => failureCountryData(err.message));
};

export default getCountryCovidData;
