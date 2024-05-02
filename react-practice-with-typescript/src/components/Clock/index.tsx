import styled from "styled-components";
import type { FC } from "react";

const Container = styled.div`
  width: 500px;
  margin: 20px;
  margin-bottom: 5px;
  padding: 15px;
  background: linear-gradient(to right, #18e9ff, #19ffb4, #17ff7d);
  border-radius: 10px;
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 25px;
`;

const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 20px;
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
