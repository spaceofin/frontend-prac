import styled from "styled-components";
import { useReducer } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 150px;
  margin: 20px;
  margin-bottom: 5px;
  padding: 15px;
  background-color: #f7d85e;
  border-radius: 10px;
  border: 5px solid #e8bb42;
  font-size: 25px;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  margin: 10px 2px;
  padding: 5px 10px;
  font-size: 20px;
`;

type State = {
  count: number;
};
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };
type Reducer = (state: State, action: Action) => State;

const initialState: State = { count: 0 };

const reducer: Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer<Reducer>(reducer, initialState);

  return (
    <Container>
      COUNT: {state.count}
      <ButtonGroup>
        <StyledButton onClick={() => dispatch({ type: "increment" })}>
          +
        </StyledButton>
        <StyledButton onClick={() => dispatch({ type: "reset" })}>
          Reset
        </StyledButton>
        <StyledButton onClick={() => dispatch({ type: "decrement" })}>
          -
        </StyledButton>
      </ButtonGroup>
    </Container>
  );
};
