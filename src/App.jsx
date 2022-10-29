import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';


import SideBar from "./components/SideBar/SideBar";
import TodoContainer from "./components/TodoContainer/TodoContainer";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
        <Col xs={2}><SideBar /></Col>
        <Col><TodoContainer /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
