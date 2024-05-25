import styled from "styled-components";
import type { FC } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 50px;
  margin: 20px;
  margin-bottom: 5px;
  padding: 15px;
  // background: linear-gradient(to right, #18e9ff, #19ffb4, #17ff7d);
  background-color: #15f7a9;
  border-radius: 10px;
  border: 5px solid #1cc9a1;
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  // font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 27px;
  margin: 0px 10px;
`;

const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  // font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 27px;
  font-weight: ;
`;

export type ClockProps = {
  date: Date;
};

export const Clock: FC<ClockProps> = ({ date }) => {
  return (
    <Container>
      <DateWrapper>{date.toLocaleDateString()}</DateWrapper>
      <TimeWrapper>{date.toLocaleTimeString()}</TimeWrapper>
    </Container>
  );
};
