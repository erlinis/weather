import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case `${FETCH_WEATHER}_FULFILLED`:
    return [ action.payload.data, ...state ];   // ... = ECMAScript6 spread syntax
  }

  return state;
}
