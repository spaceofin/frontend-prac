import styled from "styled-components";
import type { FC } from "react";

const Container = styled.div`
  margin: 30px;
`;

const DateWrapper = styled.div`
  font-size: 16px;
`;

const TimeWrapper = styled.div`
  font-size: 16px;
`;

export type ClockProps = {
  today: Date;
};

export const Clock: FC<ClockProps> = ({ today }) => {
  return (
    <Container>
      <DateWrapper>{today.toLocaleDateString()}</DateWrapper>
      <TimeWrapper>{today.toLocaleTimeString()}</TimeWrapper>
    </Container>
  );
};
