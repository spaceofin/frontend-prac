import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const MousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickedPosition, setClickedPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleClick = (event: React.MouseEvent) => {
    console.log("Clicked at:", event.clientX, event.clientY);
    setClickedPosition({ x: event.clientX, y: event.clientY });
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
    console.log(clickedPosition);
  }, [clickedPosition]);

  return (
    <Container>
      <GuideText>To save the position, Click!</GuideText>
      <div>MousePosition</div>
      <output>
        {clickedPosition.x !== 0 ? clickedPosition.x : position.x},{" "}
        {clickedPosition.y !== 0 ? clickedPosition.y : position.y}
      </output>
    </Container>
  );
};
