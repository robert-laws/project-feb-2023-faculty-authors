import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heading, Container, Spinner, Card } from '../components';
import AuthorsContext from '../context/authors/authorsContext';

export const Author = () => {
  const { id } = useParams();

  const {
    singleAuthor,
    authorPublications,
    isLoadingSingle,
    isLoadingAuthorPublications,
    singleAuthorError,
    authorPublicationsError,
    getSingleAuthorById,
    getPublicationsByAuthorId,
  } = useContext(AuthorsContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      getSingleAuthorById(id);
    }
  }, [getSingleAuthorById, id]);

  useEffect(() => {
    if (singleAuthor) {
      getPublicationsByAuthorId(singleAuthor.authorId);
    }
  }, [getPublicationsByAuthorId, singleAuthor]);

  return (
    <Container>
      {isLoadingSingle && !singleAuthorError ? (
        <div className='text-center'>
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
                  Author ID
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singleAuthor.authorId}
                </dd>
              </div>
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
            {isLoadingAuthorPublications &&
            !authorPublicationsError &&
            authorPublications.length === 0 ? (
              <div className='text-center'>
                <Spinner />
              </div>
            ) : authorPublications ? (
              <>
                <div className='mt-1 mb-4'>
                  <span className='font-bold text-lg'>
                    {authorPublications.length} publications
                  </span>
                </div>
                <section className='md:col-span-12 lg:col-span-10 xl:col-span-9'>
                  <div className='grid grid-cols-1 gap-4 sm:grid-cols-1'>
                    {authorPublications.map((publication) => (
                      <Card
                        key={publication.pubId}
                        docId={publication.id}
                        authorId={publication.authorId}
                        title={
                          publication.title === ''
                            ? publication.sourceTitle
                            : publication.title
                        }
                        author={`${publication.firstName} ${publication.lastName}`}
                        year={publication.year}
                        language={
                          publication.language === ''
                            ? 'Not Specified'
                            : publication.language
                        }
                        documentType={publication.documentType}
                      />
                    ))}
                  </div>
                </section>
              </>
            ) : (
              <div>No Publications</div>
            )}
          </div>
        </div>
      ) : (
        <div>No Author</div>
      )}
    </Container>
  );
};
