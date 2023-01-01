import React from 'react';
import SideDrawer from '../sideDrawer-component/sideDrawer-component';
import './tableComponent.css';

function DataGrid({ data, sortData }) {
  const [showModal, setShowModal] = React.useState({
    open: false,
    rowData: {},
  });
  const [selectRow, setSelectRow] = React.useState(null);

  const handleModelOpen = (item, i) => {
    setShowModal({ ...showModal, open: true, rowData: item });
    if (i === selectRow) {
      setSelectRow(null);
    } else {
      setSelectRow(i);
    }
  };
  const handleCloseModel = () => {
    setShowModal({ ...showModal, open: false, rowData: {} });
    setSelectRow(null);
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
                class='bi bi-arrow-down-circle m-1'
                viewBox='0 0 16 16'
                onClick={() => sortData('down')}
              >
                <path
                  fill-rule='evenodd'
                  d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-arrow-up-circle'
                viewBox='0 0 16 16'
                onClick={() => sortData('up')}
              >
                <path
                  fill-rule='evenodd'
                  d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z'
                />
              </svg>
            </th>
            <th scope='col'>Abbrevation</th>
            <th scope='col'>Conference</th>
            <th scope='col'>Division</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => {
            return (
              <tr
                key={item.id}
                onClick={() => handleModelOpen(item, i)}
                className={`${selectRow === i ? 'clicked' : ''}`}
              >
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
