import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button ClassName = 'sidebar' variant="primary" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Habi7s</Offcanvas.Title>
          <Button>create new board</Button>

        </Offcanvas.Header>
        <Offcanvas.Body>
         here is where i shall render all the buttons to the boards
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default SideBar