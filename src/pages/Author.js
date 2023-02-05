import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heading, Container, Spinner } from '../components';
import AuthorsContext from '../context/authors/authorsContext';

export const Author = () => {
  const { id } = useParams();

  const {
    singleAuthor,
    isLoadingSingle,
    singleAuthorError,
    getSingleAuthorById,
  } = useContext(AuthorsContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      getSingleAuthorById(id);
    }
  }, [getSingleAuthorById, id]);

  return (
    <Container>
      {isLoadingSingle && !singleAuthorError ? (
        <div className='centered'>
          <Spinner />
        </div>
      ) : singleAuthor ? (
        <div className='px-4 py-5 sm:px-6'>
          <div className='mb-4 flex flex-col'>
            <Heading>
              {`${singleAuthor.firstName} ${singleAuthor.lastName}`}
            </Heading>
            <div className='flex justify-end mt-4'>{/* buttons */}</div>
          </div>
          <div className='border-gray-200 px-4 py-5 sm:p-0'>
            <dl className='sm:divide-y sm:divide-gray-200'>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-left'>
                  GUQ Tenure
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singleAuthor.joinYear} - {singleAuthor.leftYear}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-left'>
                  Author Scopus ID
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singleAuthor.scopusId}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-left'>
                  WoS ResearcherID
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singleAuthor.woSId}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-left'>
                  Research Gate Profile
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singleAuthor.researchGateUrl && (
                    <Link to={singleAuthor.researchGateUrl}>
                      Research Gate Profile
                    </Link>
                  )}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-left'>
                  Georgetown 360 Profile
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singleAuthor.threeSixtyProfileUrl && (
                    <Link to={singleAuthor.threeSixtyProfileUrl}>
                      Georgetown 360 Profile
                    </Link>
                  )}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-left'>
                  Google Scholar Profile
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singleAuthor.googleScholarProfileUrl && (
                    <Link to={singleAuthor.googleScholarProfileUrl}>
                      Google Scholar Profile
                    </Link>
                  )}
                </dd>
              </div>
            </dl>
          </div>
          <div className='mb-4 mt-4 pt-8 border-t border-gray-200 flex flex-col'>
            <h2 className='text-2xl'>Author Publications</h2>
            <div className='flex justify-end mt-4'>{/* buttons */}</div>
          </div>
        </div>
      ) : (
        <div>No Author</div>
      )}
    </Container>
  );
};
