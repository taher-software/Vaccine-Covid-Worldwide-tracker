import { createStore, combineReducers, applyMiddleware } from 'redux';
import countryReducer from './Country/Reducer/redux';
import vaccinationReducer from './Vaccination/Reducer/reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const reducer = combineReducers({
  country: countryReducer,
  vaccination: vaccinationReducer
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
export default store;
