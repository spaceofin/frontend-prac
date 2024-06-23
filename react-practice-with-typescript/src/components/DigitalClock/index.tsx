import React, { useState, useEffect } from "react";
import { digitPatterns } from "utils/digitPatterns";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 200px;
  margin: 20px;
  padding: 15px;
  padding-top: 25px;
  background-color: #cff0ff;
  border-radius: 10px;
  border: 5px solid #cff0ff;
`;

const DateContainer = styled.div`
  position: absolute;
  top: 35px;
  left: 65px;
  font-size: 36px;
  font-family: "Micro 5 Charted", sans-serif;
  font-color: white;
`;

const TimeContainer = styled.div`
  display: flex;
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
      <DateContainer>
        {new Date().toLocaleDateString("ko-KR", {
          year: "2-digit",
          month: "numeric",
          day: "numeric",
        })}
      </DateContainer>
      <TimeContainer>
        {timeString.split("").map((char, index) => (
          <Digit key={index} char={char} />
        ))}
      </TimeContainer>
    </Container>
  );
};
