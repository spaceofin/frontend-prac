import styled from "styled-components";
import { useState, useReducer, ChangeEvent } from "react";

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
  height: 40px;
  margin-left: 5px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  border: 0px;
`;

const SquaresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 120px);
  width: inherit;
  margin: 10px;
`;

const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
  margin: 10px;
  border-radius: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  height: 70px;
  margin: 10px;
  font-weight: 400;
`;

const StyledInput = styled.input`
  width: 150px;
  height: 40px;
  font-size: 20px;
  border-radius: 5px;
  border: 2px solid lightgrey;
  margin-left: 5px;
`;

type SquareType = { id: number; color: string };

const SQUARES_ACTION = {
  ADD: "addSquare" as const,
  DELETE: "deleteSqaure" as const,
};

const SquaresActionCreator = {
  addSquare: (id: number, color: string) => ({
    type: SQUARES_ACTION.ADD,
    payload: { id: id, color: color },
  }),
  deleteSquare: () => ({
    type: SQUARES_ACTION.DELETE,
    payload: {},
  }),
};

type SquaresActionType =
  | ReturnType<typeof SquaresActionCreator.addSquare>
  | ReturnType<typeof SquaresActionCreator.deleteSquare>;

const SquaresReducer = (
  state: Array<SquareType>,
  action: SquaresActionType
) => {
  switch (action.type) {
    case SQUARES_ACTION.ADD:
      return [...state, { id: action.payload.id, color: action.payload.color }];
    case SQUARES_ACTION.DELETE:
      return [...state.slice(0, -1)];
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
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addSquare = (color: string) => {
    if (state.length === 12) {
      alert("The Square Board is full!");
      return;
    }

    color = color || "lightgrey";
    console.log("color: ", color);

    dispatch(SquaresActionCreator.addSquare(state.length + 1, color));
    console.log(state.length);
  };

  const deleteSquare = (id: number = state.length) => {
    if (id === 0) {
      alert("The Square Board is empty!");
      return;
    }
    console.log(`delete target square id: ${id}`);
    dispatch(SquaresActionCreator.deleteSquare());
  };

  console.log("state", state);
  return (
    <Container>
      Squares
      <InputContainer>
        color:
        <StyledInput type="text" value={inputValue} onChange={handleChange} />
        <StyledButton color="#C6DBBB" onClick={() => addSquare(inputValue)}>
          CREATE
        </StyledButton>
        <StyledButton color="#DBB8AA" onClick={() => deleteSquare()}>
          DELETE
        </StyledButton>
      </InputContainer>
      <SquaresContainer>
        {state.map((square) => (
          <Square key={square.id} color={square.color} />
        ))}
      </SquaresContainer>
    </Container>
  );
};
