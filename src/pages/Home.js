import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PublicationsContext from '../context/publications/publicationsContext';
import { Container } from '../components';
// import { DataLoadPublications } from '../utilities';
// import { DataLoadAuthors } from '../utilities';

export const Home = () => {
  // TODO: Add full-text search feature
  // TODO: Add home page content - hero image, search bar, etc.

  const navigate = useNavigate();

  const { saveSearchQuery } = useContext(PublicationsContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // const results = searchWithFuse(searchQuery);
    // setSearchResults(results);
    if (searchQuery.length > 0) {
      saveSearchQuery(searchQuery);
      navigate('/publications');
    }
  };

  return (
    <Container>
      {/* <DataLoadPublications /> */}
      {/* <DataLoadAuthors /> */}
      <main>
        <div className='relative px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl py-16 sm:py-20 lg:py-24'>
            <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
              {/* <div className='relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                Comprehensive listing of GU-Q Authored publications.{' '}
                <Link
                  to='/publications'
                  className='font-semibold text-blue-600'
                >
                  <span className='absolute inset-0' aria-hidden='true' />
                  View All <span aria-hidden='true'>&rarr;</span>
                </Link>
              </div> */}
            </div>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                GU-Q Research
              </h1>
              <div className='flex justify-center'>
                <form
                  className='mt-20 mb-3 w-full lg:w-full flex'
                  onSubmit={handleSubmit}
                >
                  <input
                    type='search'
                    className='min-w-0 flex-1 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300'
                    id='searchQuery'
                    placeholder='Enter search'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className='mt-4 sm:mt-0 sm:ml-3'>
                    <button
                      type='submit'
                      className='block w-full rounded-md border border-transparent bg-rose-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10'
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <p className='mt-6 text-lg leading-8 text-gray-600 text-justify'>
                This is a comprehensive database of publications completed
                during the authors' affiliation with Georgetown University in
                Qatar (GUQ). It includes: (1) publications that name GUQ as an
                author affiliation; (2) works published during an author's
                tenure at GUQ and name Georgetown University rather than GUQ as
                the author's affiliation; and (3) works published during an
                author's tenure at GUQ and the author did not name as their
                affiliation institutions other than GU and GUQ. Please search
                the database to discover researchers, browse and access their
                publications, and visualize research growth at GUQ.
              </p>
              {/* <div className='mt-10 flex items-center justify-center gap-x-6'>
                <Link
                  to='/publications'
                  className='rounded-md bg-blue-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                >
                  Publications
                </Link>
                <Link
                  to='/authors'
                  className='rounded-md bg-teal-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'
                >
                  Authors
                </Link>
              </div> */}
            </div>
          </div>
          <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
            <svg
              className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
              viewBox='0 0 1155 678'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
                fillOpacity='.3'
                d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
              />
              <defs>
                <linearGradient
                  id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
                  x1='1155.49'
                  x2='-78.208'
                  y1='.177'
                  y2='474.645'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#9089FC' />
                  <stop offset={1} stopColor='#FF80B5' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </Container>
  );
};
