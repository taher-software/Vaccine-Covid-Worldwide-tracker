export const START_COUNTRY = 'COVID/COUNTRYVACCINATION/START';
export const FAILURE_COUNTRY = 'COVID/COUNTRYVACCINATION/FAILURE';
export const GET_COUNTRY = 'COVID/COUNTRYVACCINATION/GET';

export const startCountryData = () => ({
  type: START_COUNTRY,
});

export const failureCountryData = (payload) => ({
  type: FAILURE_COUNTRY,
  payload,
});

export const getCountryData = (payload) => ({
  type: GET_COUNTRY,
  payload,
});
