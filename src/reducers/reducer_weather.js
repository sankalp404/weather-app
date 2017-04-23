import { FETCH_WEATHER } from '../actions/index'

export default function(state=[], action){
  // console.log('Action received:', action);
  switch(action.type){
    case FETCH_WEATHER:
      // Since we need to keep adding cities..
      // Also, we never update state directly
      // Only return a new instance of state
      // state.push(action.payload.data) will edit the state
      // concat creates a new instance
      //  return state.concat([action.payload.data]);
      // 
      // SO create a new array
      // below is [city,city,city] and not [city,[city,city]]
      // ...state flattens the array.
      return [action.payload.data, ...state];
  }
  return state;
}
