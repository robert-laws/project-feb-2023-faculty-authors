import { Heading } from '../../components';
import { Link } from 'react-router-dom';

export const JournalArticle = ({
  title,
  sourceTitle,
  authorId,
  firstName,
  lastName,
  authorScopusId,
  authorResearcherId,
  authors,
  editors,
  year,
  documentType,
  abstract,
  bookReview,
  language,
  pageCount,
  pageStart,
  pageEnd,
  link,
  volume,
  issue,
  issn,
  isbn,
  doi,
  publisher,
  authorKeywords,
  indexKeywords,
  sustainableDevelopmentGoals,
  callNumber,
  publicationAffiliation,
  cirsSponsored,
  publishingGroup,
  fullText,
}) => {
  return (
    <>
      <div className='mb-4 flex flex-col'>
        <Heading>{title}</Heading>
      </div>
      <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
        <dl className='sm:divide-y sm:divide-gray-200'>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Author
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              <Link
                className='text-blue-500 hover:text-blue-800 hover:underline'
                to={`/authors/${authorId}`}
              >
                {firstName} {lastName}
              </Link>
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              All Authors
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {authors.map((author) => (
                <p key={author}>{author}</p>
              ))}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Journal Title
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {sourceTitle}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Publication Year
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {year}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Volume, Issue
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {volume ? `volume: ${volume} ` : ''}
              {issue ? `issue: ${issue}` : ''}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Pages
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {pageCount} ({pageStart}-{pageEnd})
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              ISSN
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {issn}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Language
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {language}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Permalink
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {link ? (
                <a
                  className='text-blue-500 hover:text-blue-800 hover:underline'
                  rel='noreferrer'
                  target='_blank'
                  href={`${link}`}
                >
                  Permalink
                </a>
              ) : (
                ''
              )}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Abstract
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {abstract}
            </dd>
          </div>

          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              DOI
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {doi ? (
                <a
                  className='text-blue-500 hover:text-blue-800 hover:underline'
                  rel='noreferrer'
                  target='_blank'
                  href={`${doi}`}
                >
                  {doi}
                </a>
              ) : (
                ''
              )}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Publisher
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {publisher}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Author Keywords
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {authorKeywords.map((keyword) => (
                <p key={keyword}>{keyword}</p>
              ))}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Index Keywords
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {indexKeywords.map((keyword) => (
                <p key={keyword}>{keyword}</p>
              ))}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Full Text
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {fullText}
            </dd>
          </div>

          <div className='relative py-10'>
            <div
              className='absolute inset-0 flex items-center'
              aria-hidden='true'
            >
              <div className='w-full border-t border-red-300' />
            </div>
            <div className='relative flex justify-center'>
              <span className='bg-white px-3 text-lg font-medium text-gray-900'>
                Content Below ... Should it be included?
              </span>
            </div>
          </div>

          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Author Scopus ID
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {authorScopusId}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              WoS ResearcherID
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {authorResearcherId}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Editors
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {editors.map((editor) => (
                <p key={editor}>{editor}</p>
              ))}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Document Type
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {documentType}
            </dd>
          </div>

          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Book Review Text
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {bookReview}
            </dd>
          </div>

          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              ISBN
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {isbn.map((isbn) => (
                <p key={isbn}>{isbn}</p>
              ))}
            </dd>
          </div>

          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Sustainable Development Goals
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {sustainableDevelopmentGoals.map((goal) => (
                <p key={goal}>{goal}</p>
              ))}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Call Number
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {callNumber}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              GUQ Affiliated
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {publicationAffiliation}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              CIRS Sponsored
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {cirsSponsored}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Author Status
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {publishingGroup}
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};
