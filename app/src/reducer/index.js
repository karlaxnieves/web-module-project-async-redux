import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from './../actions';

const initialState = {
    meal : {
        strMeal: "",
        strArea: "",
        strInstructions:""
    },
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case(FETCH_START):
        return({
          ...state,
          isFetching: true
        });
      case(FETCH_SUCCESS):
        return({
          ...state,
          isFetching:false,
          meal: action.payload
        });
      case(FETCH_FAIL):
        return({
          ...state,
          error: action.payload,
          isFetching: false
        });
      default:
        return state;
    }
  };