import React from 'react';
import SideDrawer from '../sideDrawer-component/sideDrawer-component';

function DataGrid({ data, sortData }) {
  const [showModal, setShowModal] = React.useState({
    open: false,
    rowData: {},
  });

  const handleModelOpen = item => {
    setShowModal({ ...showModal, open: true, rowData: item });
  };
  const handleCloseModel = () => {
    setShowModal({ ...showModal, open: false, rowData: {} });
  };

  return (
    <>
      <table className='table table-hover'>
        <thead className='bg-primary'>
          <tr className='text-white'>
            <th scope='col'>Team Name</th>
            <th scope='col'>
              City{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-arrow-down-short'
                viewBox='0 0 16 16'
                onClick={() => sortData('up')}
              >
                <path
                  fill-rule='evenodd'
                  d='M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-arrow-up-short'
                viewBox='0 0 16 16'
                onClick={() => sortData('down')}
              >
                <path
                  fill-rule='evenodd'
                  d='M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z'
                />
              </svg>
            </th>
            <th scope='col'>Abbrevation</th>
            <th scope='col'>Conference</th>
            <th scope='col'>Division</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(item => {
            return (
              <tr key={item.id} onClick={() => handleModelOpen(item)}>
                <th scope='row'>{item.name}</th>
                <td>{item.city}</td>
                <td>{item.abbreviation}</td>
                <td>{item.conference}</td>
                <td>{item.division}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <SideDrawer
        show={showModal.open}
        data={showModal.rowData}
        close={handleCloseModel}
      />
    </>
  );
}

export default DataGrid;
