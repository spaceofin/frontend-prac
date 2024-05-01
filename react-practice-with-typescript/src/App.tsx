import styled from "styled-components";

import { UserProfile } from "components/UserProfile";
import { Clock } from "components/Clock";

const Container = styled.div``;

export default function App() {
  return (
    <Container>
      <Clock today={new Date()} />
      <UserProfile />
    </Container>
  );
}
