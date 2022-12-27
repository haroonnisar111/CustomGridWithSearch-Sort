import React from 'react';
import DataGrid from '../components/table-component/table-component';
import './searchGrid.css';

const SearchGrid = () => {
  const [data, setData] = React.useState([]);

  const [searchStr, setSearchStr] = React.useState('');
  const [pageNo, setPageNo] = React.useState(0);

  React.useEffect(() => {
    fetchData(0);
  }, []);
  const fetchData = pageNo => {
    let url = `https://www.balldontlie.io/api/v1/teams?per_page=${10}&page=${pageNo}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        response.data.forEach((item, i) => (item.id = i + 1));
        setData(response.data);
      })
      .catch(err => console.error(err));
  };

  const onSearchChange = e => {
    const searchField = e.target.value.toLocaleLowerCase();
    setSearchStr(searchField);
  };
  const filteredData = data.filter(team => {
    return team.name.toLocaleLowerCase().includes(searchStr);
  });
  const customPagination = pageNo => {
    setPageNo(pageNo);
    fetchData(pageNo);
  };
  const sortByName = sort => {
    let sortedData = filteredData.sort((a, b) => {
      if (a.city > b.city && sort === 'down') {
        return -1;
      }
      if (b.city > a.city && sort === 'up') {
        return -1;
      }
      return 0;
    });
    setData(sortedData);
  };
  return (
    <div className='mainDiv'>
      <h2 className='text-primary'> NBA TEAMS</h2>
      <div class='row'>
        <div class='col-md-6 p-3'>
          <div class='input-group'>
            <span class='input-group-append'>
              <button
                class='btn btn-outline-secondary bg-white border-end-0 border ms-n5'
                type='button'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='28'
                  fill='currentColor'
                  class='bi bi-search'
                  viewBox='0 0 16 16'
                >
                  <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                </svg>
              </button>
            </span>
            <input
              class='form-control border-start-0 border'
              type='search'
              value={searchStr}
              onChange={onSearchChange}
            />
          </div>
        </div>
      </div>

      <DataGrid data={filteredData} sortData={sortByName} />
      <nav className='navbar'>
        <ul className='pagination'>
          <li className='page-item'>
            <a
              className={`${pageNo === 0 ? 'disabled' : 'page-link'}`}
              onClick={() => customPagination(pageNo - 1)}
              aria-label='Previous'
            >
              <span aria-hidden='true'>&laquo;</span>
              <span className='sr-only'>Previous</span>
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' onClick={() => customPagination(1)}>
              1
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' onClick={() => customPagination(2)}>
              2
            </a>
          </li>

          <li className='page-item'>
            <a
              className='page-link'
              onClick={() => customPagination(pageNo + 1)}
              aria-label='Next'
            >
              <span aria-hidden='true'>&raquo;</span>
              <span className='sr-only'>Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SearchGrid;
