import { useContext, useEffect, useState } from 'react';
import PublicationsContext from '../context/publications/publicationsContext';
import { Container, Heading, Card, Spinner } from '../components';

export const Authors = () => {
  const [authors, setAuthors] = useState([]);

  const { publications, isLoading, publicationsError, getAllPublications } =
    useContext(PublicationsContext);

  useEffect(() => {
    if (publications.length === 0) {
      getAllPublications();
    }
  }, [publications, getAllPublications]);

  useEffect(() => {
    if (publications.length > 0) {
      const authors = publications.map(
        (publication) =>
          `${publication.authorId}|${publication.lastName}|${publication.firstName}|${publication.authorScopusId}|${publication.authorResearcherId}`
      );
      const uniqueAuthors = [...new Set(authors)];
      setAuthors(uniqueAuthors);
    }
  }, [publications]);

  return (
    <Container>
      <Heading>Authors</Heading>
      {isLoading && !publicationsError ? (
        <div className='centered'>
          <Spinner />
        </div>
      ) : publications ? (
        <ul>
          {authors &&
            authors
              .sort()
              .map((author, index) => <li key={index}>{author}</li>)}
        </ul>
      ) : (
        <div>No Publications</div>
      )}
      {publicationsError && <div>{publicationsError}</div>}
    </Container>
  );
};
