import {
  GET_ALL_PUBLICATIONS,
  GET_FILTERED_PUBLICATIONS,
  PUBLICATIONS_ERROR,
} from '../types';

const publicationsReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PUBLICATIONS:
      return {
        ...state,
        publications: action.payload,
        filteredPublications: action.payload,
        isLoading: false,
        publicationsError: null,
      };

    case GET_FILTERED_PUBLICATIONS:
      return {
        ...state,
        filteredPublications: action.payload,
        isLoading: false,
        publicationsError: null,
      };

    case PUBLICATIONS_ERROR:
      return {
        ...state,
        publicationsError: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default publicationsReducer;