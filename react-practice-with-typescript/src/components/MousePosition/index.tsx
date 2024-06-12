import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  height: 250px;
  margin: 20px;
  margin-bottom: 5px;
  padding: 15px;
  background-color: #eda7c9;
  border-radius: 10px;
  border: 5px solid #db7498;
  font-size: 25px;
  font-weight: bold;
  overflow: hidden;
`;

const GuideText = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const MousePositionDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  flex-grow: 1;
  align-items: center;
  padding-right: 50px;
  padding-top: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: 70px;
  align-items: center;
  padding-top: 20px;
`;

interface BorderRadiusProps {
  $topLeftRadius?: number;
  $topRightRadius?: number;
  $bottomRightRadius?: number;
  $bottomLeftRadius?: number;
}

const StyledButton = styled.button<BorderRadiusProps>`
  width: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: normal;
  background-color: ${(props) => props.color};
  padding: 2px;
  border-top-left-radius: ${(props) => props.$topLeftRadius}px;
  border-top-right-radius: ${(props) => props.$topRightRadius}px;
  border-bottom-right-radius: ${(props) => props.$bottomRightRadius}px;
  border-bottom-left-radius: ${(props) => props.$bottomLeftRadius}px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const PositionText = styled.span`
  font-size: 20px;
  font-weight: normal;
`;

interface Position {
  x: number;
  y: number;
}

export const MousePosition = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [clickedPositions, setClickedPositions] = useState<Position[]>([]);
  const [buttonOn, setButtonOn] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    if (
      buttonOn &&
      event.target instanceof HTMLElement &&
      event.target.closest("button")
    ) {
      return;
    }
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
    if (buttonOn) {
      window.addEventListener("mousemove", handleMousePosition as any);
    } else {
      window.removeEventListener("mousemove", handleMousePosition as any);
    }
    return () => {
      window.removeEventListener("mousemove", handleMousePosition as any);
    };
  }, [buttonOn]);

  useEffect(() => {
    if (buttonOn) {
      window.addEventListener("click", handleClick as any);
    } else {
      window.removeEventListener("click", handleClick as any);
    }
    return () => {
      window.removeEventListener("click", handleClick as any);
    };
  }, [buttonOn]);

  return (
    <Container>
      <ButtonsContainer>
        <StyledButton
          color={buttonOn ? "yellowgreen" : "white"}
          $topLeftRadius={7}
          $topRightRadius={7}
          onClick={() => {
            setButtonOn(true);
          }}
        >
          ON
        </StyledButton>
        <StyledButton
          color={buttonOn ? "white" : "tomato"}
          $bottomLeftRadius={7}
          $bottomRightRadius={7}
          onClick={() => {
            setButtonOn(false);
          }}
        >
          OFF
        </StyledButton>
      </ButtonsContainer>
      <ContentWrapper>
        <GuideText>To save the position, Click!</GuideText>
        <MousePositionDisplay>
          <div>MousePosition</div>
          <output>
            {position.x}, {position.y}
          </output>
        </MousePositionDisplay>
        <MousePositionDisplay>
          <div>ClickedPositions</div>
          <output>
            {clickedPositions.map((pos, index) => (
              <PositionText key={index}>
                [{pos.x}, {pos.y}]
              </PositionText>
            ))}
          </output>
        </MousePositionDisplay>
      </ContentWrapper>
    </Container>
  );
};
