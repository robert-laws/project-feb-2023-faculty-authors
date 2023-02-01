import { useReducer, useCallback } from 'react';
// import { v4 as uuid } from 'uuid';
import { db } from '../../firebase/firebase-config';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import {
  GET_ALL_PUBLICATIONS,
  GET_FILTERED_PUBLICATIONS,
  PUBLICATIONS_ERROR,
  GET_SINGLE_PUBLICATION,
  SINGLE_PUBLICATION_ERROR,
  RESET_SINGLE_PUBLICATION_LOADING,
  UPDATE_SINGLE_PUBLICATION,
} from '../types';
import PublicationsContext from './publicationsContext';
import publicationsReducer from './publicationsReducer';

const PublicationsState = ({ children }) => {
  const initialState = {
    publications: [],
    filteredPublications: [],
    isLoading: true,
    publicationsError: null,
    singlePublication: null,
    isLoadingSingle: true,
    singlePublicationError: null,
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

  const getSinglePublicationById = useCallback(
    async (docId) => {
      const docRef = doc(db, 'publications', docId);

      try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          dispatch({
            type: GET_SINGLE_PUBLICATION,
            payload: { ...docSnap.data(), id: docSnap.id },
          });
        } else {
          dispatch({
            type: SINGLE_PUBLICATION_ERROR,
            payload: 'No publication found',
          });
        }
      } catch (error) {
        dispatch({
          type: SINGLE_PUBLICATION_ERROR,
          payload: `Database Error: ${error.message}`,
        });
      }
    },
    [dispatch]
  );

  const filterPublications = useCallback(
    (results) => {
      dispatch({
        type: GET_FILTERED_PUBLICATIONS,
        payload: results,
      });
    },
    [dispatch]
  );

  const resetSinglePublicationLoading = useCallback(() => {
    dispatch({
      type: RESET_SINGLE_PUBLICATION_LOADING,
    });
  }, [dispatch]);

  const updateSinglePublication = useCallback(
    async (publicationData) => {
      const docId = publicationData.id;
      delete publicationData.id;
      const docRef = doc(db, 'publications', docId);

      try {
        const updatedPublication = await updateDoc(docRef, publicationData);

        if (updatedPublication.exists()) {
          dispatch({
            type: UPDATE_SINGLE_PUBLICATION,
            payload: {
              ...updatedPublication.data(),
              id: updatedPublication.id,
            },
          });
        } else {
          dispatch({
            type: SINGLE_PUBLICATION_ERROR,
            payload: 'Error Updating Publication',
          });
        }
      } catch (error) {
        dispatch({
          type: SINGLE_PUBLICATION_ERROR,
          payload: `Database Error: ${error.message}`,
        });
      }
    },
    [dispatch]
  );

  return (
    <PublicationsContext.Provider
      value={{
        publications: state.publications,
        filteredPublications: state.filteredPublications,
        isLoading: state.isLoading,
        publicationsError: state.publicationsError,
        singlePublication: state.singlePublication,
        isLoadingSingle: state.isLoadingSingle,
        singlePublicationError: state.singlePublicationError,
        getAllPublications,
        filterPublications,
        getSinglePublicationById,
        resetSinglePublicationLoading,
        updateSinglePublication,
      }}
    >
      {children}
    </PublicationsContext.Provider>
  );
};

export default PublicationsState;
