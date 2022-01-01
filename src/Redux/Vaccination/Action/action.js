const START = 'COVID/VACCINATION/START';
const FAILURE = 'COVID/VACCINATION/FAILURE';
const CONSUMEDATA = 'COVID/VACCINATION/CONSUMEDATA';

export const loadingStart = () => ({
  type: START,
});

export const loadingFailed = (payload) => ({
  type: FAILURE,
  payload
});

export const loadingData = (payload) => ({
  type: CONSUMEDATA,
  payload,
});