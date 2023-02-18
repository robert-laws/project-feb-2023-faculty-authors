import { useReducer, useCallback } from 'react';
import {
  SET_QUERY,
  SET_FILTERS,
  SET_SORT,
  TOGGLE_FILTERS_TOUCHED,
} from '../types';
import InteractionsContext from './interactionsContext';
import interactionsReducer from './interactionsReducer';

const InteractionsState = ({ children }) => {
  const initialState = {
    query: '',
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
    filtersTouched: false,
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

  const setFiltersTouched = useCallback(
    (boolean) => {
      dispatch({
        type: TOGGLE_FILTERS_TOUCHED,
        payload: boolean,
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
        filtersTouched: state.filtersTouched,
        setQuery,
        setFilters,
        setSort,
        setFiltersTouched,
      }}
    >
      {children}
    </InteractionsContext.Provider>
  );
};

export default InteractionsState;
