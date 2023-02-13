import { Link } from 'react-router-dom';

export const AuthorCard = ({
  id,
  authorId,
  firstName,
  lastName,
  joinYear,
  leftYear,
}) => {
  return (
    <div
      key={id}
      className='col-span-1 relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-blue-600 hover:bg-cyan-50'
    >
      <div className='flex w-full items-center justify-between space-x-6 p-3'>
        <div className='flex-1 truncate'>
          <div className='flex items-center space-x-3'>
            <h3 className='truncate text-md font-medium text-gray-900'>
              <Link
                to={`/authors/${authorId}`}
                className='block hover:underline text-blue-700 font-medium'
              >
                {lastName}, {firstName}
              </Link>
            </h3>
            <span>
              ({joinYear}-{leftYear})
            </span>
          </div>
          <p className='mt-1 truncate text-sm text-gray-500'>
            <strong></strong>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
