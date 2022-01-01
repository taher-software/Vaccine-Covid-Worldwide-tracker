import { createStore, combineReducers, applyMiddleware } from 'redux';
import countryReducer from './Country/redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const reducer = combineReducers({
  country: countryReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
export default store;
