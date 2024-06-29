import styled from "styled-components";
import { ReactComponent as Raven } from "assets/icons/raven.svg";
import { ReactComponent as WaterDrop } from "assets/icons/water-drop.svg";
import { ReactComponent as Diamond } from "assets/icons/diamond.svg";
import { ReactComponent as StrokeFull } from "assets/icons/stroke-full.svg";
import { ReactComponent as Robot } from "assets/icons/robot.svg";
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

const DraggableItems = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Icons = () => {
  const nodeRef = useRef(null);
  return (
    <Container>
      <Draggable
        nodeRef={nodeRef}
        defaultPosition={{ x: 0, y: 0 }}
        bounds="parent"
      >
        <DraggableItems ref={nodeRef}>
          <Raven />
          <WaterDrop />
          <Diamond />
          <StrokeFull />
          <Robot />
        </DraggableItems>
      </Draggable>
    </Container>
  );
};
