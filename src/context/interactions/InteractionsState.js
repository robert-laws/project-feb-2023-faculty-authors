import { useReducer, useCallback } from 'react';
import { SET_QUERY, SET_FILTERS, SET_SORT } from '../types';
import InteractionsContext from './interactionsContext';
import interactionsReducer from './interactionsReducer';

const InteractionsState = ({ children }) => {
  const initialState = {
    query: null,
    filters: {
      publishingGroup: [],
      year: [],
      lastName: [],
      documentType: [],
      language: [],
    },
    sort: {
      field: 'lastName',
      direction: 'asc',
    },
  };

  const [state, dispatch] = useReducer(interactionsReducer, initialState);

  const setQuery = useCallback(
    (query) => {
      dispatch({
        type: SET_QUERY,
        payload: query,
      });
    },
    [dispatch]
  );

  const setFilters = useCallback(
    (filters) => {
      dispatch({
        type: SET_FILTERS,
        payload: filters,
      });
    },
    [dispatch]
  );

  const setSort = useCallback(
    (sort) => {
      dispatch({
        type: SET_SORT,
        payload: sort,
      });
    },
    [dispatch]
  );

  return (
    <InteractionsContext.Provider
      value={{
        query: state.query,
        filters: state.filters,
        sort: state.sort,
        setQuery,
        setFilters,
        setSort,
      }}
    >
      {children}
    </InteractionsContext.Provider>
  );
};

export default InteractionsState;
