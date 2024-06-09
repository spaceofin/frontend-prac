import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
  height: 200px;
  margin: 20px;
  margin-bottom: 5px;
  padding: 15px;
  background-color: #eda7c9;
  border-radius: 10px;
  border: 5px solid #db7498;
  font-size: 25px;
  font-weight: bold;
`;

const GuideText = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const PositionText = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

interface Position {
  x: number;
  y: number;
}

export const MousePosition = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [clickedPositions, setClickedPositions] = useState<Position[]>([]);

  const handleClick = (event: React.MouseEvent) => {
    console.log("Clicked at:", event.clientX, event.clientY);
    // setClickedPosition({ x: event.clientX, y: event.clientY });
    const newClickPosition = { x: event.clientX, y: event.clientY };
    setClickedPositions((prevPositions: Position[]) => {
      if (prevPositions.length < 4) {
        return [...prevPositions, newClickPosition];
      } else {
        return prevPositions;
      }
    });
  };

  const handleMousePosition = (event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMousePosition as any);
    return () => {
      window.removeEventListener("mousemove", handleMousePosition as any);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClick as any);
    return () => {
      window.removeEventListener("click", handleClick as any);
    };
  }, []);

  useEffect(() => {
    console.log("clickedPositions: ", ...clickedPositions);
  }, [clickedPositions]);

  return (
    <Container>
      <GuideText>To save the position, Click!</GuideText>
      <div>MousePosition</div>
      <output>
        {position.x}, {position.y}
      </output>
      <br />
      <br />
      <div>ClickedPositions</div>
      <output>
        {clickedPositions.map((pos, index) => (
          <span key={index}>
            [{pos.x}, {pos.y}]
          </span>
        ))}
      </output>
    </Container>
  );
};
