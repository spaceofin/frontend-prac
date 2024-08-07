import styled from "styled-components";
import { Raven, WaterDrop, Diamond, StrokeFull, Robot } from "assets/icons";
import { useRef } from "react";

import Draggable from "react-draggable";

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 90px);
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
  width: 500px;
  height: 500px;
  margin: 20px;
  padding: 15px;
  background-color: #00c8ff;
  border-radius: 10px;
  border: 5px solid #098ae0;
  font-size: 25px;
  font-weight: bold;
`;

const DraggableItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.div`
  position: absolute;
  margin-left: 20px;
  margin-top: 10px;
  top: 0;
  left: 0;
`;

export const Icons = () => {
  const nodeRef = useRef(null);
  return (
    <Container>
      <Title>Drag and Drop Icons</Title>
      <Draggable
        nodeRef={nodeRef}
        defaultPosition={{ x: 60, y: 220 }}
        bounds="parent">
        <DraggableItem ref={nodeRef}>
          <Raven />
        </DraggableItem>
      </Draggable>
      <Draggable
        nodeRef={nodeRef}
        defaultPosition={{ x: 140, y: 220 }}
        bounds="parent">
        <DraggableItem ref={nodeRef}>
          <WaterDrop />
        </DraggableItem>
      </Draggable>
      <Draggable
        nodeRef={nodeRef}
        defaultPosition={{ x: 220, y: 220 }}
        bounds="parent">
        <DraggableItem ref={nodeRef}>
          <Diamond />
        </DraggableItem>
      </Draggable>
      <Draggable
        nodeRef={nodeRef}
        defaultPosition={{ x: 300, y: 220 }}
        bounds="parent">
        <DraggableItem ref={nodeRef}>
          <StrokeFull />
        </DraggableItem>
      </Draggable>
      <Draggable
        nodeRef={nodeRef}
        defaultPosition={{ x: 380, y: 220 }}
        bounds="parent">
        <DraggableItem ref={nodeRef}>
          <Robot />
        </DraggableItem>
      </Draggable>
    </Container>
  );
};
