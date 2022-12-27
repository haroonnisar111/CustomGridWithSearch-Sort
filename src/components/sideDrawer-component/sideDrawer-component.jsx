import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import './sideDrawer.css';

function SideDrawer({ show, close, data }) {
  return (
    <>
      <Offcanvas show={show} onHide={close} placement='end'>
        <Offcanvas.Header className='canvasHeader' closeButton>
          <Offcanvas.Title>
            <strong> {data.name}</strong>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='d-flex justify-content-between'>
            <ul class='list-inline'>
              <li class='list-inline-item p-2'>Team Full Name </li>
              <li class='list-inline-item  p-2'>Total games in 2021</li>
            </ul>
            <ul class='list-inline'>
              <li class='list-inline-item p-2'>{data.full_name}</li>
              <li class='list-inline-item  p-2'>{data.id}1</li>
            </ul>
          </div>
          <strong>Random Game Details:</strong>
          <div className='d-flex justify-content-between'>
            <ul class='list-inline'>
              <li class='list-inline-item p-2 fw-bolder'> Date</li> <br />
              <li class='list-inline-item  p-2 fw-bolder'>Home Team</li> <br />
              <li class='list-inline-item p-2 fw-bolder'>
                Home Team Score{' '}
              </li>{' '}
              <br />
              <li class='list-inline-item  p-2 fw-bolder'>Vistor Team</li>{' '}
              <br />
              <li class='list-inline-item p-2 fw-bolder'>
                Vistor Team Score{' '}
              </li>{' '}
              <br />
            </ul>
            <ul class='list-inline'>
              <li class='list-inline-item p-2 fw-bolder'>
                {new Date().toLocaleDateString()}
              </li>
              <br />
              <li class='list-inline-item  p-1 fw-bolder'>{data.name}</li>{' '}
              <br />
              <li class='list-inline-item p-2 fw-bolder'>{data.id}4</li> <br />
              <li class='list-inline-item  p-2 fw-bolder'>
                {data.full_name}
              </li>{' '}
              <br />
              <li class='list-inline-item p-2 fw-bolder '>{data.id}7</li> <br />
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideDrawer;
