import {
  GET_ALL_AUTHORS,
  AUTHORS_ERROR,
  GET_SINGLE_AUTHOR,
  SINGLE_AUTHOR_ERROR,
  RESET_SINGLE_AUTHOR_LOADING,
} from '../types';

const authorsReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_AUTHORS:
      return {
        ...state,
        authors: action.payload,
        isLoading: false,
        authorsError: null,
      };

    case GET_SINGLE_AUTHOR:
      return {
        ...state,
        singleAuthor: action.payload,
        isLoadingSingle: false,
        singleAuthorError: null,
      };

    case AUTHORS_ERROR:
      return {
        ...state,
        authorsError: action.payload,
        isLoading: false,
      };

    case SINGLE_AUTHOR_ERROR:
      return {
        ...state,
        singleAuthorError: action.payload,
        isLoadingSingle: false,
      };

    case RESET_SINGLE_AUTHOR_LOADING:
      return {
        ...state,
        isLoadingSingle: true,
      };

    default:
      return state;
  }
};

export default authorsReducer;
