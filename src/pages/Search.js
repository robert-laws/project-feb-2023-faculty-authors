import { Container, Heading } from '../components';

export const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('search....');
  };

  return (
    <Container>
      <Heading>Search</Heading>
      <div className='flex justify-center'>
        <form
          className='mt-20 mb-3 w-full lg:w-2/3 flex'
          onSubmit={handleSubmit}
        >
          <input
            type='search'
            className='min-w-0 flex-1 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300'
            id='searchInput'
            placeholder='Enter search'
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
    </Container>
  );
};
