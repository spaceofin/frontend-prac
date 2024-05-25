import styled from "styled-components";
import { useReducer } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 150px;
  margin: 20px;
  margin-bottom: 5px;
  padding: 15px;
  background-color: #f7d85e;
  border-radius: 10px;
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
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </Container>
  );
};
