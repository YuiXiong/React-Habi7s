import React, { useState, useEffect } from "react";
import axios from "axios";
import { DndContext } from "@dnd-kit/core";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";

import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

function MainComponent(props) {
  const [parent, setParent] = useState(null);
  const [task, setTask] = useState("");
  const [board, setboard]=useState("")

  let liftedObjectId = props.boardState
  console.log('boardState in maincomponent', liftedObjectId)

  useEffect(() => {
    console.log("fetching taskData");
    const fetchApi = async () => {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/board/${liftedObjectId}/task`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        // withCredentials: true,
      }
    );    
    if (res.status === 200 || res.status === 201) {
      const data = await res.data;
      console.log("BoardData in maincomponent: ", data);
      setTask(data);
    }
  };
  fetchApi();
  }, [liftedObjectId]);

  console.log("task.data is :", task.tasks[0].task)

  const draggableMarkup = task.tasks.map((e) => (
    <Draggable><button id={e._id}>
        {e.task}
      </button>
    </Draggable>
  ));

  // working stuff below
  // const draggableMarkup = (
  //   <Draggable id="draggable">
  //     <button>drag</button>
  //   </Draggable>
  // );

  

return (
    <DndContext onDragEnd={handleDragEnd}>
      <Container>
        <Row>
          {parent === null ? draggableMarkup : null}

          <Container className=" col-6 border pb-6">
            <Droppable key="urgentImportant" id="urgentImportant">
              {parent === "urgentImportant"
                ? draggableMarkup
                : "urgentImportant"}
            </Droppable>
          </Container>

          <Container className=" col-6 border pb-6">
            <Droppable key="urgentNotImportant" id="urgentNotImportant">
              {parent === "urgentNotImportant"
                ? draggableMarkup
                : "urgentNotImportant"}
            </Droppable>
          </Container>

          <Container className=" col-6 border pb-6">
            <Droppable key="notUrgentImportant" id="notUrgentImportant">
              {parent === "notUrgentImportant"
                ? draggableMarkup
                : "notUrgentImportant"}
            </Droppable>
          </Container>

          <Container className=" col-6 border pb-6">
            <Droppable key="notUrgentNotImportant" id="notUrgentNotImportant">
              {parent === "notUrgentNotImportant"
                ? draggableMarkup
                : "notUrgentNotImportant"}
            </Droppable>
          </Container>
        </Row>
      </Container>
    </DndContext>
  );

  function handleDragEnd(event) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
}

export default MainComponent;
