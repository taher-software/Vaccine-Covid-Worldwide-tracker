import { COUNTRY } from '../Action/Action'

const countryReducer = (state = '',action) => {
  switch (action.type){
    case COUNTRY :
      return action.payload;
    default: 
      return state;
  }
}

export default countryReducer;