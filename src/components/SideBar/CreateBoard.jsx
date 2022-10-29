import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CreateBoard.css"

function CreateBoard() {
  return (
    <Form className="board">
      <Form.Group className="mb-3" controlId="Board Name">
        <Form.Label>Board Name:</Form.Label>
        <Form.Control type="boardName" placeholder="Enter Board Name" />
      </Form.Group>
      
      <Button className= "board-button" variant="primary" type="submit">
        Submit
      </Button> 
      <Button className= "board-button" variant="danger" type="cancel">
        Cancel
      </Button>
    </Form>
  );
}

export default CreateBoard;
