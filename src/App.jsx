import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, {useEffect, useState} from 'react'
import axios from "axios";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';

import SideBar from "./components/SideBar/SideBar";
import TodoComponent from "./components/Todo/MainComponent"

function App() {

  const [boardData, setBoardData] = useState([""])
  const[boardState, setBoardState] = useState("")

  useEffect(() => {
    console.log("fetching boardData");
    const fetchApi = async () => {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/board/`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        // withCredentials: true,
      }
    );    if (res.status === 200 || res.status === 201) {
      const data = await res.data;
      console.log("BoardData Fetched", data);
      setBoardData(data);
    }
  };
  fetchApi();
}, []);

console.log('boardState is now', boardState)

  return (
    <div className="App">
      <Container>
        <Row>
        <Col xs={2}><SideBar data={boardData} setBoardState={setBoardState}/></Col>
        <Col> <TodoComponent boardState={boardState}/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
