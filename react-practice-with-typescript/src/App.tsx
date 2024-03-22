import { useState } from 'react';
import styled from '@emotion/styled';

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

const Label = styled.span`
  font-size: 18px;
  margin: 15px;
`;

const Button = styled.button`
  margin: 0px 10px;
  width: 40px;
  height: 30px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0091EA;
    opacity: 0.9;
    border-radius: 5px;
  }

  &:active {
    box-shadow: 2px 2px 2px #FF4081;
  }
`;

function App() {
  const [counter, setCounter] = useState(0);

  const handleButtonClick = (operation: string) => {
    if (operation === 'decrease') {
      setCounter(counter - 1);
    } else if (operation === 'increase') {
      setCounter(counter + 1);
    }
  };

  return (
    <Container>
      <Title>Counter App</Title>
      <Contents>
        <Button onClick={() => handleButtonClick('decrease')}>-</Button>
        <Label>{counter}</Label>
        <Button onClick={() => handleButtonClick('increase')}>+</Button>
      </Contents>
    </Container>
  );
}

export default App;
