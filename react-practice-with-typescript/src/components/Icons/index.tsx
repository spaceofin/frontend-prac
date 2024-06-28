import styled from "styled-components";
import { ReactComponent as Raven } from "assets/icons/raven.svg";
import { ReactComponent as WaterDrop } from "assets/icons/water-drop.svg";
import { ReactComponent as Diamond } from "assets/icons/diamond.svg";
import { ReactComponent as StrokeFull } from "assets/icons/stroke-full.svg";
import { ReactComponent as Robot } from "assets/icons/robot.svg";
import { useState, useRef, MouseEvent } from "react";

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

const DraggableIcon = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  cursor: pointer;
`;

export const Icons = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const iconRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <Container onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <DraggableIcon
        ref={iconRef}
        onMouseDown={handleMouseDown}
        x={position.x}
        y={position.y}
      >
        <Raven />
        <WaterDrop />
        <Diamond />
        <StrokeFull />
        <Robot />
      </DraggableIcon>
    </Container>
  );
};
