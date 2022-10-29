import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CreateBoard from "./CreateBoard";

function SideBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    // 👇️ toggle shown state for create form
    setIsShown(current => !current);
// setIsShown(true);
  };

  return (
    <>
      <Button ClassName = 'sidebar' variant="primary" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Habi7s</Offcanvas.Title>
          <Button onClick={handleClick}>create new board</Button>
          {/* render create board component form when clicked */}
          
        </Offcanvas.Header>
        {isShown && (
        <CreateBoard/>
        )}
        <Offcanvas.Body>
         here is where i shall render all the buttons to the boards
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default SideBar