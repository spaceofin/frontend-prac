import styled from "styled-components";
import { useReducer } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
  margin: 20px;
  margin-bottom: 5px;
  padding: 15px;
  border-radius: 10px;
  border: 5px solid #666666;
  font-size: 25px;
  font-weight: bold;
`;

const StyledButton = styled.button`
  width: 70px;
  height: 50px;
  margin: 20px;
`;

const SquaresContainer = styled.div`
  display: flex;
  width: inherit;
  margin: 10px;
`;

const Square = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 120px);
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
  margin: 10px;
  border-radius: 20px;
`;

type SquareType = { id: number; color: string };

const SQUARES_ACTION = {
  ADD: "addSquare" as const,
};

const SquaresActionCreator = {
  addSquare: (id: number, color: string) => ({
    type: SQUARES_ACTION.ADD,
    payload: { id: id, color: color },
  }),
};

type SquaresActionType = ReturnType<typeof SquaresActionCreator.addSquare>;

const SquaresReducer = (
  state: Array<SquareType>,
  action: SquaresActionType
) => {
  switch (action.type) {
    case SQUARES_ACTION.ADD:
      return [...state, { id: action.payload.id, color: action.payload.color }];
    default:
      return state;
  }
};

const initialSquares: Array<SquareType> = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
];

export const Squares = () => {
  const [state, dispatch] = useReducer(SquaresReducer, initialSquares);
  const addSquare = () => {
    dispatch(SquaresActionCreator.addSquare(3, "orange"));
  };
  console.log("state", state);
  return (
    <Container>
      Squares
      <StyledButton onClick={() => addSquare()}>dispatch</StyledButton>
      <SquaresContainer>
        {state.map((square) => (
          <Square key={square.id} color={square.color} />
        ))}
      </SquaresContainer>
    </Container>
  );
};
