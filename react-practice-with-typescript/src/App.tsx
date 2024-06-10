import styled from "styled-components";
import { useClock } from "hooks";

import { Clock } from "components/Clock";
import { Counter } from "components/Counter";
import { MousePosition } from "components/MousePosition";
import { Squares } from "components/Squares";
import { Circles } from "components/Cricles";

import { memo } from "react";

const Container = styled.div`
  margin: 5px;
`;

const MemoizedCircles = memo(Circles);
const MemoizedSquares = memo(Squares);
const MemoizedCounter = memo(Counter);
const MemoizedMousePosition = memo(MousePosition);

export default function App() {
  const now = useClock();

  return (
    <Container>
      <Clock date={now} />
      <MemoizedCounter />
      <MemoizedMousePosition />
      <MemoizedSquares />
      <MemoizedCircles />
    </Container>
  );
}
