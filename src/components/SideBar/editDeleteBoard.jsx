import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CreateBoard.css";
import axios from "axios";

function EditDeleteBoard(props) {
    //for editing board Name
  const [editFormData, setEditFormData] = useState({
    name: "",
  });

  function handleInputChange(e) {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
  }
  console.log("boardObjectIdForEdit is :", props.boardObjectIdForEdit)
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Editformdata : ", editFormData);
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/api/v1/board/${props.boardObjectIdForEdit}`,
    editFormData
      )
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
        console.log("Board edit Successfully");
      }})
      .catch(function (error) {
        console.log("Board edit error: ", error);
      });
     //set state to objectID 
  };

  //for handling delete board
  const handleDelete = (event) => {
    console.log("deleting board by objectID : ", props.boardObjectIdForEdit);
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/v1/board/${props.boardObjectIdForEdit}`,
      )
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
        console.log("Board deleted Successfully");
      }})
      .catch(function (error) {
        console.log("Board deletion error: ", error);
      });
    }

  return (
    <Form className="board">
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Edit Board Name:</Form.Label>
        <Form.Control
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="Edit Board Name"
        />
      </Form.Group>

      <Button
        onClick={handleFormSubmit}
        className="board-button"
        variant="primary"
        type="submit"
      >
        Save
      </Button>
      <Button className="board-button" variant="danger" type="cancel">
        Cancel
      </Button>

      <div>
      <Button
        onClick={handleDelete}
        className="board-button"
        variant="danger"
        type="submit"
      >
        Delete
      </Button>
      </div>
    </Form>
  );
}

export default EditDeleteBoard;
