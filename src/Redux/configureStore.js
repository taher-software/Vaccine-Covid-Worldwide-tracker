import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countryReducer from './Country/Reducer/redux';
import vaccinationReducer from './Vaccination/Reducer/reducer';
import covidCountryReducer from './CountryVaccination/Reducer/reducer';

const reducer = combineReducers({
  country: countryReducer,
  vaccination: vaccinationReducer,
  covidCountry: covidCountryReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
export default store;
