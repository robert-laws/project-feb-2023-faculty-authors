import { SET_QUERY, SET_FILTERS, SET_SORT } from '../types';

const interactionsReducer = (state, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    case SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };

    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };

    default:
      return state;
  }
};

export default interactionsReducer;
