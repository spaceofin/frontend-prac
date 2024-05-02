import styled from "styled-components";
import { useState, useEffect } from "react";

import { Clock } from "components/Clock";

const Container = styled.div`
  margin: 5px;
`;

export default function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("useEffect called.");
    const id = setInterval(() => {
      const now = new Date();
      setDate(now);
      console.log(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Container>
      <Clock date={date} />
    </Container>
  );
}
