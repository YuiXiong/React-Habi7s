import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

function MainComponent() {
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">
      <button>drag</button>
    </Draggable>
  );

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
