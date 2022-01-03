export const START = 'COVID/VACCINATION/START';
export const FAILURE = 'COVID/VACCINATION/FAILURE';
export const CONSUMEDATA = 'COVID/VACCINATION/CONSUMEDATA';

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