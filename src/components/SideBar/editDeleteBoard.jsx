import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CreateBoard.css";
import axios from "axios";

function editDeleteBoard() {
  const [editFormData, setEditFormData] = useState({
    name: "",
  });

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Editformdata : ", editFormData);
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/api/v1/board/:boardidhere`,
        formData
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
    </Form>
  );
}

export default editDeleteBoard;
