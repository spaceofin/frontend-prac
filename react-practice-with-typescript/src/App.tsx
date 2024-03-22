import { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { Label } from 'components/Label';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 200px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 50px;
`;

const Title = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 30px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter(counter + 1);
  }

  const dec = () => {
    setCounter(counter - 1);
  }

  return (
    <Container>
      <Title>Counter App</Title>
      <Contents>
        <Button label='-' onClick={dec} />
        <Label data={counter} />
        <Button label='+' onClick={inc} />
      </Contents>
    </Container>
  );
}

export default App;
