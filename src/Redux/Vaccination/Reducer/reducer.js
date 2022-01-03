import { START, FAILURE, CONSUMEDATA} from '../Action/action.js';

const vaccinationReducer = (state = {}, action) => {
  switch (action.type) {
    case START: 
      return {
        ...state,
        loading : true
      };
    case FAILURE: 
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CONSUMEDATA:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default vaccinationReducer;