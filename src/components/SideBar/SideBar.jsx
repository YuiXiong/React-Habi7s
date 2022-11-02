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
  const [isCreateShown, setIsCreateShown] = useState(false);
  const handleCreateClick = (event) => {
    // 👇️ toggle shown state for create form
    setIsCreateShown((current) => !current);
  };

  //handle lifting of board state to app.jsx
  const handleBoardStateChange = (e) => {
    props.setBoardState(e.target.value);
  };

  // maping data from props to button
  const mapData = props.data.map((e) => (
    <div className = " mt-2" onClick={handleBoardStateChange}>
      <Button className="btn-success" role="button" aria-pressed="true" value={e._id} id={e._id}>
        {e.name}
      </Button>
      
    </div>
  ));

  return (
    <>
      <Button className="sidebar" variant="primary" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        
          <Offcanvas.Title>Habi7s</Offcanvas.Title>
         
          <Button onClick={handleCreateClick}>create new board</Button>
          {/* render create board component form when clicked */}
        
        </Offcanvas.Header>

        {isCreateShown && <CreateBoard />}

        <Offcanvas.Body>
        
          {/* here is where i shall render all the buttons to the boards */}
          <Container>{mapData}</Container>
        
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
