import { useReducer, useCallback } from 'react';
import { db } from '../../firebase/firebase-config';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import {
  GET_ALL_AUTHORS,
  AUTHORS_ERROR,
  GET_SINGLE_AUTHOR,
  SINGLE_AUTHOR_ERROR,
  RESET_SINGLE_AUTHOR_LOADING,
} from '../types';
import AuthorsContext from './authorsContext';
import authorsReducer from './authorsReducer';

const AuthorsState = ({ children }) => {
  const initialState = {
    authors: [],
    isLoading: true,
    authorsError: null,
    singleAuthor: null,
    isLoadingSingle: true,
    singleAuthorError: null,
  };

  const [state, dispatch] = useReducer(authorsReducer, initialState);

  const getAllAuthors = useCallback(async () => {
    const authorsRef = collection(db, 'authors');

    try {
      const querySnapshot = await getDocs(authorsRef);
      if (querySnapshot.empty) {
        dispatch({
          type: AUTHORS_ERROR,
          payload: 'No authors found',
        });
      } else {
        let allAuthors = [];
        querySnapshot.forEach((doc) => {
          allAuthors.push({ ...doc.data(), id: doc.id });
        });

        dispatch({
          type: GET_ALL_AUTHORS,
          payload: allAuthors,
        });
      }
    } catch (error) {
      dispatch({
        type: AUTHORS_ERROR,
        payload: error.message,
      });
    }
  }, [dispatch]);

  const getSingleAuthorById = useCallback(
    async (id) => {
      const authorRef = doc(db, 'authors', id);

      try {
        const docSnap = await getDoc(authorRef);

        if (docSnap.exists()) {
          dispatch({
            type: GET_SINGLE_AUTHOR,
            payload: { ...docSnap.data(), id: docSnap.id },
          });
        } else {
          dispatch({
            type: SINGLE_AUTHOR_ERROR,
            payload: 'Author not found',
          });
        }
      } catch (error) {
        dispatch({
          type: SINGLE_AUTHOR_ERROR,
          payload: error.message,
        });
      }
    },
    [dispatch]
  );

  const resetSingleAuthorLoading = useCallback(() => {
    dispatch({
      type: RESET_SINGLE_AUTHOR_LOADING,
    });
  }, [dispatch]);

  return (
    <AuthorsContext.Provider
      value={{
        authors: state.authors,
        isLoading: state.isLoading,
        authorsError: state.authorsError,
        singleAuthor: state.singleAuthor,
        isLoadingSingle: state.isLoadingSingle,
        singleAuthorError: state.singleAuthorError,
        getAllAuthors,
        getSingleAuthorById,
        resetSingleAuthorLoading,
      }}
    >
      {children}
    </AuthorsContext.Provider>
  );
};

export default AuthorsState;
