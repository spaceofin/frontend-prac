import styled from "styled-components";
import { useClock } from "hooks";

import { DigitalClock } from "components/DigitalClock";
import { MousePosition } from "components/MousePosition";
import { Squares } from "components/Squares";
import { Circles } from "components/Cricles";
import { Icons } from "components/Icons";

import { memo } from "react";

const Container = styled.div`
  padding: 5px;
  // background-color: rgba(4, 7, 32);
`;

const MemoizedCircles = memo(Circles);
const MemoizedSquares = memo(Squares);
const MemoizedMousePosition = memo(MousePosition);

export default function App() {
  const now = useClock();

  return (
    <Container>
      <DigitalClock />
      <MemoizedMousePosition />
      <MemoizedSquares />
      <MemoizedCircles />
      <Icons />
    </Container>
  );
}
