import { GET_AGGREGATES } from '../actions/aggregates.action';

const initialState = {
  aggregates: [],
  options: []
}

export default (state = initialState, action) => {

  switch(action.type) {

    case GET_AGGREGATES: {

      return  {
        ...state,
        aggregates: action.data,
        options: action.options
      }
    }

    default:
      return state;
  }
}
