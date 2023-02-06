import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthorsContext from '../context/authors/authorsContext';
import { Container, Heading, Spinner } from '../components';

export const Authors = () => {
  const {
    authors,
    isLoading,
    authorsError,
    getAllAuthors,
    resetSingleAuthorLoading,
    resetSingleAuthorPublicationsLoading,
  } = useContext(AuthorsContext);

  useEffect(() => {
    if (authors.length === 0) {
      getAllAuthors();
    }
  }, [authors, getAllAuthors]);

  useEffect(() => {
    resetSingleAuthorLoading();
  }, [resetSingleAuthorLoading]);

  useEffect(() => {
    resetSingleAuthorPublicationsLoading();
  }, [resetSingleAuthorPublicationsLoading]);

  return (
    <Container>
      <Heading>Authors</Heading>
      {isLoading && !authorsError ? (
        <div className='text-center'>
          <Spinner />
        </div>
      ) : authors ? (
        <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {authors.map((author) => (
            <li
              key={author.id}
              className='col-span-1 divide-y divide-gray-200 rounded-lg bg-gray-50 shadow'
            >
              <div className='flex w-full items-center justify-between space-x-6 p-6'>
                <div className='flex-1 truncate'>
                  <div className='flex items-center space-x-3'>
                    <h3 className='truncate text-sm font-medium text-gray-900'>
                      <Link
                        to={`/authors/${author.id}`}
                        className='hover:text-teal-600'
                      >
                        {author.firstName} {author.lastName}
                      </Link>
                    </h3>
                    <span className='inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800'>
                      id: {author.authorId}
                    </span>
                  </div>
                  <p className='mt-1 truncate text-sm text-gray-500'>
                    GUQ Tenure{' '}
                    <strong>
                      {author.joinYear} - {author.leftYear}
                    </strong>
                  </p>
                </div>
                <div>
                  {/* <Link
                    to={`/authors/${author.id}`}
                    className='rounded-md bg-teal-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'
                  >
                    profile
                  </Link> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No Authors</div>
      )}
      {authorsError && <div>{authorsError}</div>}
    </Container>
  );
};
