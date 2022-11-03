import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import CreateBoard from "./CreateBoard";
import EditDeleteBoard from "./EditDeleteBoard";

function SideBar(props) {
  //toggling display of sidebar
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //state related to creating board
  const [isCreateShown, setIsCreateShown] = useState(false);
  const handleCreateClick = (event) => {
    setIsCreateShown((current) => !current);
  };

  //state related to edit board
  const [isEditShown, setIsEditShown] = useState(false); 
  const [currentOpenBoardId, setCurrentOpenBoardId ] = useState("");
  const handleEditClick = (event) => {
    console.log("event : ", event.target.id)

    // setIsEditShown((editCurrent) => !editCurrent);
    setCurrentOpenBoardId(event.target.id)
  };
  
  //handle lifting of board state to app.jsx
  const handleBoardStateChange = (e) => {
    props.setBoardState(e.target.value);
  };

  // maping data from props to button
  const mapData = props.data.map((e) => (
    <div className= "mt-2" onClick={handleBoardStateChange}>
      <Button
        className= "btn-success"
        value= {e._id}
        id= {e._id}
      >
        {e.name}
        <Button id={e._id} onClick={(event)=>handleEditClick(event)}>
          Edit/Del board
        </Button>
        {currentOpenBoardId=== e._id && <EditDeleteBoard boardObjectIdForEdit={e._id} />}
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
