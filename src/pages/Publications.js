import { useContext, useEffect, useState, useRef } from 'react';
import Fuse from 'fuse.js';
import PublicationsContext from '../context/publications/publicationsContext';
import { Container, Heading, PublicationCard, Spinner } from '../components';
import { AddToList } from '../utilities';
import ReactPaginate from 'react-paginate';

export const Publications = () => {
  const {
    publications,
    filteredPublications,
    isLoading,
    publicationsError,
    getAllPublications,
    filterPublications,
    resetSinglePublicationLoading,
    searchQuery,
    saveSearchQuery,
  } = useContext(PublicationsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [publicationsPerPage, setPublicationsPerPage] = useState(10);

  const filterListRef = useRef([]);

  //TODO: add filtersTouched to context - reset to false upon page change -> to reset display of filters/records
  const [filtersTouched, setFiltersTouched] = useState(false);

  const [filterLists, setFilterLists] = useState({
    publicationAffiliation: [],
    publishingGroup: [],
    cirsSponsored: [],
    lastName: [],
    documentType: [],
    language: [],
    year: [],
  });

  const [selectedFilters, setSelectedFilters] = useState({
    publicationAffiliation: [],
    publishingGroup: [],
    cirsSponsored: [],
    lastName: [],
    documentType: [],
    language: [],
    year: [],
  });

  const options = {
    includeScore: true,
    keys: [
      { name: 'title', weight: 0.2 },
      { name: 'sourceTitle', weight: 0.2 },
      { name: 'abstract', weight: 0.25 },
      { name: 'lastName', weight: 0.2 },
      { name: 'firstName', weight: 0.2 },
    ],
    useExtendedSearch: true,
    threshold: 0.25,
  };

  const fuse = new Fuse(publications, options);

  useEffect(() => {
    if (publications.length === 0) {
      getAllPublications();
    }
  }, [publications, getAllPublications]);

  const [searchQueryPublications, setSearchQueryPublications] = useState(
    searchQuery || ''
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQueryPublications.length > 0) {
      saveSearchQuery(searchQueryPublications);
    }
  };

  useEffect(() => {
    resetSinglePublicationLoading();
  }, [resetSinglePublicationLoading]);

  useEffect(() => {
    if (publications.length > 0) {
      setFilterLists({
        // publicationAffiliation: AddToList(
        //   publications,
        //   'publicationAffiliation'
        // ),
        publishingGroup: AddToList(publications, 'publishingGroup'),
        // cirsSponsored: AddToList(publications, 'cirsSponsored'),
        lastName: AddToList(publications, 'lastName'),
        documentType: AddToList(publications, 'documentType'),
        language: AddToList(publications, 'language'),
        year: AddToList(publications, 'year'),
      });
    }
  }, [publications]);

  useEffect(() => {
    const searchWithFuse = (query) => {
      if (query.length === 0) return [];
      const results = fuse.search(query).map((result) => result.item);
      return results;
    };

    if (searchQuery && publications.length > 0) {
      const results = searchWithFuse(searchQuery);
      filterPublications(results);
    }
  }, [searchQuery, publications, filterPublications]);

  const setFilters = (list, filter) => {
    setFiltersTouched(true);
    if (selectedFilters[list].includes(filter)) {
      const newFilters = selectedFilters[list].filter(
        (item) => item !== filter
      );
      setSelectedFilters({
        ...selectedFilters,
        [list]: newFilters,
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        [list]: [...selectedFilters[list], filter],
      });
    }
  };

  const getLists = (lists) => {
    const allLists = [];

    for (const property in lists) {
      const list = lists[property];

      const myList = Object.keys(list).map((key) => {
        return [key, list[key]];
      });

      if (property === 'year') {
        myList.sort((a, b) => b[0] - a[0]);
      }

      if (property === 'lastName') {
        myList.sort((a, b) => {
          const nameA = a[0].toUpperCase(); // ignore upper and lowercase
          const nameB = b[0].toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
      }

      allLists.push([property, myList]);
    }

    return allLists;
  };

  useEffect(() => {
    const filtersArray = Object.entries(selectedFilters);

    const applyFilters = (filterArray) => {
      let filteredPublications = publications;

      for (let i = 0; i < filterArray.length; i++) {
        const list = filterArray[i][0];
        const filters = filterArray[i][1];

        if (filters.length > 0) {
          filteredPublications = filteredPublications.filter((publication) =>
            filters.includes(publication[list])
          );
        }
      }

      return filteredPublications;
    };

    if (filtersTouched) {
      setCurrentPage(1);
      filterPublications(applyFilters(filtersArray));
    }
  }, [selectedFilters]);

  // pagination
  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = filteredPublications.slice(
    indexOfFirstPublication,
    indexOfLastPublication
  );

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const handleListToggle = (index) => {
    const list = filterListRef.current[index];
    list.classList.toggle('filter-list');
    if (list.querySelectorAll('p')[1].innerHTML === 'Show More') {
      list.querySelectorAll('p')[1].innerHTML = 'Show Less';
    } else {
      list.querySelectorAll('p')[1].innerHTML = 'Show More';
    }
  };

  const handleResetClick = () => {
    setFiltersTouched(false);
    setSelectedFilters({
      publishingGroup: [],
      lastName: [],
      documentType: [],
      language: [],
      year: [],
    });

    setCurrentPage(1);
    filterPublications(publications);
    saveSearchQuery('');
    setSearchQueryPublications('');

    if (filterListRef.current.length > 0) {
      filterListRef.current.forEach((list) => {
        if (list) {
          list.querySelectorAll('input').forEach((input) => {
            input.checked = false;
          });
        }
      });
    }
  };

  return (
    <Container>
      <Heading>Publications</Heading>
      {isLoading && !publicationsError ? (
        <div className='text-center pt-10'>
          <Spinner />
        </div>
      ) : publications ? (
        <>
          <div className='mt-1'>
            <span className='font-bold text-lg'>
              {filteredPublications.length} publications
            </span>
          </div>
          <div className='py-6'>
            <div className='relative mx-auto flex flex-col max-w-8xl justify-center sm:px-2 lg:flex-row lg:px-2 xl:px-4'>
              <div className='flex-auto lg:relative lg:block lg:flex-none mb-6 lg:mb-0'>
                <div className='sticky top-[2rem] ml-5 lg:-ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-2 pl-0.5'>
                  <aside className='w-64 pr-8 xl:w-72 xl:pr-16'>
                    <div className='self-start sticky top-0 space-y-4 overflow-y-auto'>
                      <div className='flex justify-center'>
                        <form
                          className='mb-2 w-full lg:w-full flex flex-col space-y-2'
                          onSubmit={handleSubmit}
                        >
                          <input
                            type='search'
                            className='min-w-0 flex-1 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300'
                            id='searchQuery'
                            placeholder='Enter search'
                            value={searchQueryPublications}
                            onChange={(e) =>
                              setSearchQueryPublications(e.target.value)
                            }
                          />
                          <div className='sm:mt-0'>
                            <button
                              type='submit'
                              className='block w-full rounded-md border border-transparent bg-blue-500 px-2 py-2 text-base font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 sm:px-10'
                            >
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className='sm:mt-0'>
                        <button
                          onClick={handleResetClick}
                          type='button'
                          className='block w-full rounded-md border border-transparent bg-rose-500 px-2 py-2 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-0 sm:px-10'
                        >
                          Reset All
                        </button>
                      </div>
                      <div className='flex flex-col pl-2'>
                        {getLists(filterLists).map((list, index) => {
                          return (
                            <div
                              className='pr-4 pb-4 filter-list'
                              ref={(ref) =>
                                (filterListRef.current[index] = ref)
                              }
                              key={index}
                            >
                              <p className='mb-2'>
                                {list[0] === 'documentType'
                                  ? 'Document Type'
                                  : list[0] === 'cirsSponsored'
                                  ? 'CIRS Sponsored'
                                  : list[0] === 'publicationAffiliation'
                                  ? 'Publication Affiliation'
                                  : list[0] === 'publishingGroup'
                                  ? 'Author Status'
                                  : list[0] === 'lastName'
                                  ? 'Author Name'
                                  : list[0].charAt(0).toUpperCase() +
                                    list[0].slice(1)}
                              </p>
                              {list[1].map((option, i) => {
                                if (
                                  list[0] === 'cirsSponsored' &&
                                  option[0] !== 'Yes'
                                ) {
                                  return null;
                                } else {
                                  return (
                                    <div
                                      className='flex items-start filter-item'
                                      key={i}
                                    >
                                      <div className='flex h-5 items-center mb-1'>
                                        <input
                                          type='checkbox'
                                          className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded'
                                          id={option[0]}
                                          name={option[0]}
                                          value={option[0]}
                                          onChange={(e) => {
                                            setFilters(list[0], e.target.value);
                                          }}
                                        ></input>
                                      </div>
                                      <div className='ml-1 text-sm mb-1'>
                                        <label
                                          htmlFor={option[0]}
                                          className='ml-1.5 font-medium text-gray-700'
                                        >
                                          {option[0]}{' '}
                                          <span className='text-gray-500 font-normal'>
                                            ({option[1]})
                                          </span>
                                          {/* {option[0] === ''
                                            ? 'Not Specified'
                                            : option[0]}{' '}
                                                                                    */}
                                          {/* {option[0] === 'GUQ' ? (
                                            <div className='group inline relative'>
                                              <span className='px-1 py-1'>*</span>
                                              <span
                                                className='group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-3 
        -translate-x-1 -translate-y-4 opacity-0 m-4 w-40'
                                              >
                                                Publications that were completed
                                                during the authors' affiliation with
                                                the University and list GU-Q as the
                                                affiliation of the author(s).
                                              </span>
                                            </div>
                                          ) : option[0] === 'Non-GUQ' ? (
                                            <div className='group inline relative'>
                                              <span className='px-1 py-1'>*</span>
                                              <span
                                                className='group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-3 
        -translate-x-1 -translate-y-4 opacity-0 m-4 w-40'
                                              >
                                                Publications by Non-GUQ members that were sponsored by CIRS.
                                              </span>
                                            </div>
                                          ) : (
                                            ''
                                          )} */}
                                        </label>
                                      </div>
                                    </div>
                                  );
                                }
                              })}
                              <p
                                onClick={() => handleListToggle(index)}
                                className='text-blue-500 hover:underline hover:cursor-pointer filter-list-show'
                              >
                                {list[1].length > 5 ? 'Show More' : ''}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
              <div className='min-w-0 max-w-3xl flex-auto px-4 py-2 lg:max-w-6xl lg:pr-0 lg:pl-8 xl:px-10'>
                <main className=''>
                  <div className=' space-y-4'>
                    {filteredPublications ? (
                      filteredPublications.length > 0 ? (
                        currentPublications.map((publication) => (
                          <PublicationCard
                            key={publication.pubId}
                            docId={publication.id}
                            authorId={publication.authorId}
                            title={
                              publication.title === ''
                                ? publication.sourceTitle
                                : publication.title
                            }
                            sourceTitle={publication.sourceTitle}
                            author={`${publication.firstName} ${publication.lastName}`}
                            year={publication.year}
                            language={
                              publication.language === ''
                                ? 'Not Specified'
                                : publication.language
                            }
                            documentType={publication.documentType}
                            doi={publication.doi}
                            link={publication.link}
                          />
                        ))
                      ) : (
                        <div>
                          <div className='whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            No Publications
                          </div>
                        </div>
                      )
                    ) : (
                      <div className='mt-4 flex flex-col'>
                        Loading Publications...
                      </div>
                    )}
                    <ReactPaginate
                      onPageChange={paginate}
                      pageCount={Math.ceil(
                        filteredPublications.length / publicationsPerPage
                      )}
                      previousLabel={'Prev'}
                      nextLabel={'Next'}
                      containerClassName={'pagination'}
                      pageLinkClassName={'page-number'}
                      previousLinkClassName={'page-number'}
                      nextLinkClassName={'page-number'}
                      activeLinkClassName={'active'}
                      disabledClassName={'disabled'}
                    />
                    <span className='hidden lg:inline-block font-medium ml-2'>
                      Results Per Page
                    </span>
                    <select
                      id='currentPageSize'
                      name='currentPageSize'
                      className='w-full lg:w-auto mt-8 lg:mt-8 ml-0 lg:ml-3 inline rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                      value={publicationsPerPage}
                      onChange={(e) => {
                        setPublicationsPerPage(Number(e.target.value));
                      }}
                    >
                      {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                          Show {pageSize}
                        </option>
                      ))}
                    </select>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>No Publications</div>
      )}
      {publicationsError && <div>{publicationsError}</div>}
    </Container>
  );
};
