import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import CreateBoard from "./CreateBoard";

function SideBar(props) {
  //toggling display of sidebar
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle shown state for create form
    setIsShown((current) => !current);
  };

  //handle lifting of board state to app.jsx
  const handleBoardStateChange = (e) => {
    props.setBoardState(e.target.value);
  };

  // maping data from props to button
  const mapData = props.data.map((e) => (
    <div onClick={handleBoardStateChange}>
      <button value={e._id} id={e._id}>
        {e.name}
      </button>
    </div>
  ));

  return (
    <>
      <Button ClassName="sidebar" variant="primary" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Habi7s</Offcanvas.Title>
          <Button onClick={handleClick}>create new board</Button>
          {/* render create board component form when clicked */}
        </Offcanvas.Header>

        {isShown && <CreateBoard />}

        <Offcanvas.Body>
          here is where i shall render all the buttons to the boards
          <Container>{mapData}</Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
