import { useReducer, useCallback } from 'react';
// import { v4 as uuid } from 'uuid';
import { db } from '../../firebase/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import {
  GET_ALL_PUBLICATIONS,
  GET_FILTERED_PUBLICATIONS,
  PUBLICATIONS_ERROR,
} from '../types';
import PublicationsContext from './publicationsContext';
import publicationsReducer from './publicationsReducer';

const PublicationsState = ({ children }) => {
  const initialState = {
    publications: [],
    filteredPublications: [],
    isLoading: true,
    publicationsError: null,
  };

  const [state, dispatch] = useReducer(publicationsReducer, initialState);

  const getAllPublications = useCallback(async () => {
    const pubsRef = collection(db, 'publications');

    try {
      const querySnapshot = await getDocs(pubsRef);
      if (querySnapshot.empty) {
        dispatch({
          type: PUBLICATIONS_ERROR,
          payload: 'No publications found',
        });
      } else {
        let allPublications = [];
        querySnapshot.forEach((doc) => {
          allPublications.push({ ...doc.data(), id: doc.id });
        });

        dispatch({
          type: GET_ALL_PUBLICATIONS,
          payload: allPublications,
        });
      }
    } catch (error) {
      dispatch({
        type: PUBLICATIONS_ERROR,
        payload: `Database Error: ${error.message}`,
      });
    }
  }, [dispatch]);

  return (
    <PublicationsContext.Provider
      value={{
        publications: state.publications,
        filteredPublications: state.filteredPublications,
        isLoading: state.isLoading,
        publicationsError: state.publicationsError,
        getAllPublications,
      }}
    >
      {children}
    </PublicationsContext.Provider>
  );
};

export default PublicationsState;
