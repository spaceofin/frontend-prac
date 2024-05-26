import styled from "styled-components";
import { useClock } from "hooks";

import { Clock } from "components/Clock";
import { Counter } from "components/Counter";
import { MousePosition } from "components/MousePosition";
import { Squares } from "components/Squares";

import React, { memo } from "react";

const Container = styled.div`
  margin: 5px;
`;

const MemoizedSquares = React.memo(Squares);
const MemoizedCounter = React.memo(Counter);
const MemoizedMousePosition = React.memo(MousePosition);

export default function App() {
  const now = useClock();

  return (
    <Container>
      <Clock date={now} />
      <MemoizedCounter />
      <MemoizedMousePosition />
      <MemoizedSquares />
    </Container>
  );
}
