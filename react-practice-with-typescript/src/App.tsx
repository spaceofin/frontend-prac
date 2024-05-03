import styled from "styled-components";
import { useClock } from "hooks";

import { Clock } from "components/Clock";

const Container = styled.div`
  margin: 5px;
`;

export default function App() {
  const now = useClock();

  return (
    <Container>
      <Clock date={now} />
    </Container>
  );
}
