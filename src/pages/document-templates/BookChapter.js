import { Heading } from '../../components';
import { Link } from 'react-router-dom';

export const BookChapter = ({
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
              GU-Q Author / Editor
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
          {authors.length > 1 && (
            <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
              <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                Other Authors
              </dt>
              <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                {authors.map((author) => {
                  return author.includes(lastName) ? (
                    ''
                  ) : (
                    <p key={author}>{author}</p>
                  );
                })}
              </dd>
            </div>
          )}
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Editor(s)
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {editors.map((editor) => (
                <p key={editor}>{editor}</p>
              ))}
            </dd>
          </div>
          <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
            <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
              Book Title
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
              Pages
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {pageStart}-{pageEnd}
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
              Document Type
            </dt>
            <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
              {documentType}
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
        </dl>
      </div>
    </>
  );
};
