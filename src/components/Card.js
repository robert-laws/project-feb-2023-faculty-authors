import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({
  docId,
  title,
  authorId,
  author,
  year,
  language,
  documentType,
}) => {
  return (
    <div className='relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-cyan-600 hover:bg-cyan-50'>
      <div className='flex-shrink-0'>{/* Future Checkbox */}</div>
      <div>
        <dl className=''>
          <div className=''>
            <dt className='text-lg'>
              <span className='block hover:underline text-blue-700 font-bold'>
                <Link to={`/publications/${docId}`}>{title}</Link>
              </span>
              <span className='block hover:underline text-blue-700 font-medium'>
                <Link to={`/authors/${authorId}`}>{author}</Link>
              </span>
            </dt>
            <dd className='mt-1 text-base font-semibold tracking-tight text-gray-900'>
              <span>
                Published: <span className='text-gray-700'>{year}</span>
              </span>
              <span className='px-2 text-gray-200' aria-hidden='true'>
                |
              </span>
              <span>
                Language: <span className='text-gray-700'>{language}</span>
              </span>
              <span className='px-2 text-gray-200' aria-hidden='true'>
                |
              </span>
              <span>
                Document Type:{' '}
                <span className='text-gray-700'>{documentType}</span>
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
