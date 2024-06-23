import React, { useState, useEffect } from "react";
import { digitPatterns } from "utils/digitPatterns";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 150px;
  margin: 20px;
  margin-bottom: 5px;
  padding: 15px;
  background-color: #cff0ff;
  border-radius: 10px;
  border: 5px solid #cff0ff;
`;

const DigitContainer = styled.div`
  margin: 0 5px;
`;

const DigitRow = styled.div`
  display: flex;
`;

interface DigitCellProps {
  $active: number;
}

const DigitCell = styled.div<DigitCellProps>`
  width: 12px;
  height: 13px;
  margin: 1px;
  background-color: ${(props) => (props.$active ? "#1F8DF0" : " #CFF0FF")};
  transition: background-color 0.3s;
`;

interface DigitProps {
  char: string;
}

const Digit: React.FC<DigitProps> = ({ char }) => {
  const pattern = digitPatterns[char] || digitPatterns["0"];

  return (
    <DigitContainer>
      {pattern.map((row, rowIndex) => (
        <DigitRow key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <DigitCell key={cellIndex} $active={cell} />
          ))}
        </DigitRow>
      ))}
    </DigitContainer>
  );
};

export const DigitalClock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date): string => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const timeString = formatTime(time);

  return (
    <Container>
      {timeString.split("").map((char, index) => (
        <Digit key={index} char={char} />
      ))}
    </Container>
  );
};
