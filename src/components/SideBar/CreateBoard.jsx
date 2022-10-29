import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CreateBoard.css";
import axios from "axios";

function CreateBoard() {
  const [formData, setFormData] = useState({
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
    console.log("formdata : ", formData);
    axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/board/`,
        formData
      )
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
        console.log("Board Created Successfully");
      }})
      .catch(function (error) {
        console.log("Board creation error: ", error);
      });

    // fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/board/`, {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // })
    //   .then((jsonResponse) => {
    //     // displaying success message
    //     console.log("Create board successful",jsonResponse);
    //   })
    //   .catch((err) => {
    //     console.log("err.msg: ", err.message);
    //   });
  };

  return (
    <Form className="board">
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Board Name:</Form.Label>
        <Form.Control
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="Enter Board Name"
        />
      </Form.Group>

      <Button
        onClick={handleFormSubmit}
        className="board-button"
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
      <Button className="board-button" variant="danger" type="cancel">
        Cancel
      </Button>
    </Form>
  );
}

export default CreateBoard;
