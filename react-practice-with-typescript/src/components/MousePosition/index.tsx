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

export const MousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMousePosition = (event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMousePosition as any);

    return () => {
      window.removeEventListener("mousemove", handleMousePosition as any);
    };
  }, []);

  return (
    <Container>
      <div>MousePosition</div>
      <div>
        {position.x}, {position.y}
      </div>
    </Container>
  );
};
