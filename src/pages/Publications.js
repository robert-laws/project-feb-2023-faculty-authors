import { useContext, useEffect, useState } from 'react';
import PublicationsContext from '../context/publications/publicationsContext';
import { Container, Heading, Card, Spinner } from '../components';

export const Publications = () => {
  const { publications, isLoading, publicationsError, getAllPublications } =
    useContext(PublicationsContext);

  useEffect(() => {
    if (publications.length === 0) {
      getAllPublications();
    }
  }, [publications, getAllPublications]);

  return (
    <Container>
      <Heading>Publications</Heading>
      {isLoading && !publicationsError ? (
        <div className='centered'>
          <Spinner />
        </div>
      ) : publications ? (
        <div>{publications.length}</div>
      ) : (
        <div>No Publications</div>
      )}
      {publicationsError && <div>{publicationsError}</div>}
    </Container>
  );
};
