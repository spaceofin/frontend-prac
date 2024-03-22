import { Component } from 'react';
// import { useState } from 'react';
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

// function App() {
//   const [counter, setCounter] = useState(0);

//   const inc = () => {
//     setCounter(counter + 1);
//   }

//   const dec = () => {
//     setCounter(counter - 1);
//   }

//   return (
//     <Container>
//       <Title>Counter App</Title>
//       <Contents>
//         <Button label='-' onClick={dec} />
//         <Label data={counter} />
//         <Button label='+' onClick={inc} />
//       </Contents>
//     </Container>
//   );
// }


interface State {
  readonly counter: number;
}

type Props = Record<string, never>;

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  private inc = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
    // this.setState((prevState) => ({
    //   counter: prevState.counter + 1,
    // }));
  };

  private dec = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1,
    });
    // this.setState((prevState) => ({
    //   counter: prevState.counter - 1,
    // }));
  };

  render() {
    const { counter } = this.state;
    return (
      <Container>
        <Title>Counter App</Title>
        <Contents>
          <Button label='-' onClick={this.dec} />
          <Label data={counter} />
          <Button label='+' onClick={this.inc} />
        </Contents>
      </Container >
    );
  }
}

export default App;
