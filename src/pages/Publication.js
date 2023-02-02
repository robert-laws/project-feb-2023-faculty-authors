import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heading, Container, Spinner } from '../components';
import PublicationsContext from '../context/publications/publicationsContext';

export const Publication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    singlePublication,
    isLoadingSingle,
    singlePublicationError,
    getSinglePublicationById,
    deleteSinglePublication,
  } = useContext(PublicationsContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      getSinglePublicationById(id);
    }
  }, [getSinglePublicationById, id]);

  const handleEditClick = () => {
    navigate(`/admin/edit/${id}`);
  };

  const handleDeleteClick = () => {
    const answer = window.confirm(
      'Are you sure you want to delete this publication?'
    );

    if (answer) {
      deleteSinglePublication(id);
      navigate('/publications');
    }
  };

  return (
    <Container>
      {isLoadingSingle && !singlePublicationError ? (
        <div className='centered'>
          <Spinner />
        </div>
      ) : singlePublication ? (
        <div className='px-4 py-5 sm:px-6'>
          <div className='mb-4 flex flex-col'>
            <Heading>
              {singlePublication && singlePublication.title
                ? singlePublication.title
                : singlePublication.sourceTitle}
            </Heading>
            <div className='flex justify-end mt-4'>
              <button
                type='button'
                className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                onClick={handleEditClick}
              >
                Edit this Publication
              </button>
              <button
                type='button'
                className='inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ml-4'
                onClick={handleDeleteClick}
              >
                Delete this Publication
              </button>
            </div>
          </div>
          <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
            <dl className='sm:divide-y sm:divide-gray-200'>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Author
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.firstName} {singlePublication.lastName}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Author Scopus ID
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.authorScopusId}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  WoS ResearcherID
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.authorResearcherId}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  All Authors
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.authors.map((author) => (
                    <p key={author}>{author}</p>
                  ))}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Editors
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.editors.map((editor) => (
                    <p key={editor}>{editor}</p>
                  ))}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Publication Year
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.year}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Document Type
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.documentType}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Abstract
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.abstract}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Book Review Text
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.bookReview}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Language
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.language}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Pages
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.pageCount} ({singlePublication.pageStart}-
                  {singlePublication.pageEnd})
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Permalink
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.link ? (
                    <a
                      rel='noreferrer'
                      target='_blank'
                      href={`${singlePublication.link}`}
                    >
                      Resource Link
                    </a>
                  ) : (
                    ''
                  )}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Volume, Issue
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.volume
                    ? `volume: ${singlePublication.volume} `
                    : ''}
                  {singlePublication.issue
                    ? `issue: ${singlePublication.issue}`
                    : ''}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  ISSN
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.issn}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  ISBN
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.isbn.map((isbn) => (
                    <p key={isbn}>{isbn}</p>
                  ))}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  DOI
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.doi}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Publisher
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.publisher}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Author Keywords
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.authorKeywords.map((keyword) => (
                    <p key={keyword}>{keyword}</p>
                  ))}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Index Keywords
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.indexKeywords.map((keyword) => (
                    <p key={keyword}>{keyword}</p>
                  ))}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Sustainable Development Goals
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.sustainableDevelopmentGoals.map((goal) => (
                    <p key={goal}>{goal}</p>
                  ))}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Call Number
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.callNumber}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  GUQ Affiliated
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.guqAffiliated}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  CIRS Sponsored
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.cirsSponsored}
                </dd>
              </div>
              <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                  Full Text
                </dt>
                <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                  {singlePublication.fullText}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ) : (
        <div>No Publication</div>
      )}
    </Container>
  );
};
