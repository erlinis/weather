import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
    // ... = ECMAScript6 spread syntax
    return [ action.payload.data, ...state ];
  }

  return state;
}
