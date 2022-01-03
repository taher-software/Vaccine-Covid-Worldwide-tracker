import { START_COUNTRY, FAILURE_COUNTRY, GET_COUNTRY } from '../Action/Action';

const covidCountryReducer = (state = {}, action) => {
  switch (action.type) {
    case START_COUNTRY:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FAILURE_COUNTRY:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_COUNTRY:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default covidCountryReducer;
