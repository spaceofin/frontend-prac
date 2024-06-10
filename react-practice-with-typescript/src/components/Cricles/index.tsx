import styled from "styled-components";
import { useState, useReducer, ChangeEvent } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 520px;
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

const CirclesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 120px);
  justify-content: center;
  width: inherit;
  margin: 5px;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
  margin: 8px;
  border-radius: 50%;
`;

const InputContainer = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  height: 70px;
  margin: 10px;
  font-weight: 400;
`;

const StyledSelect = styled.select`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid gray;
  background-color: white;
  font-size: 20px;
  padding-left: 15px;
`;

const SlimText = styled.div`
  font-size: 24px;
  font-weight: normal;
`;

type CircleType = { id: number; color: string };

const CIRCLES_ACTION = {
  ADD: "addCircle" as const,
  DELETE: "deleteSqaure" as const,
};

const CirclesActionCreator = {
  addCircle: (id: number, color: string) => ({
    type: CIRCLES_ACTION.ADD,
    payload: { id: id, color: color },
  }),
  deleteCircle: () => ({
    type: CIRCLES_ACTION.DELETE,
    payload: {},
  }),
};

type CirclesActionType =
  | ReturnType<typeof CirclesActionCreator.addCircle>
  | ReturnType<typeof CirclesActionCreator.deleteCircle>;

const CirclesReducer = (
  state: Array<CircleType>,
  action: CirclesActionType
) => {
  switch (action.type) {
    case CIRCLES_ACTION.ADD:
      return [...state, { id: action.payload.id, color: action.payload.color }];
    case CIRCLES_ACTION.DELETE:
      return [...state.slice(0, -1)];
    default:
      return state;
  }
};

const initialCircles: Array<CircleType> = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
];

export const Circles = () => {
  const [state, dispatch] = useReducer(CirclesReducer, initialCircles);
  const [selectedOption, setSelectedOption] = useState<string>("gray");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const addCircle = (color: string) => {
    if (state.length === 12) {
      alert("The Circle Board is full!");
      return;
    }

    color = color || "lightgrey";
    console.log("color: ", color);

    dispatch(CirclesActionCreator.addCircle(state.length + 1, color));
    console.log(state.length);
  };

  const deleteCircle = (id: number = state.length) => {
    if (id === 0) {
      alert("The Circle Board is empty!");
      return;
    }
    console.log(`delete target Circle id: ${id}`);
    dispatch(CirclesActionCreator.deleteCircle());
  };

  console.log("state", state);

  const colorOptions = [
    { value: "black", label: "Black" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "gray", label: "Gray" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "gold", label: "Yellow" },
  ];

  return (
    <Container>
      <div>Circles</div>
      <SlimText>(click on the circle to delete it)</SlimText>
      <InputContainer>
        <StyledSelect
          id="colorSelect"
          value={selectedOption}
          onChange={handleChange}>
          {colorOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <StyledButton color="#C6DBBB" onClick={() => addCircle(selectedOption)}>
          CREATE
        </StyledButton>
      </InputContainer>
      <CirclesContainer>
        {state.map((circle) => (
          <Circle key={circle.id} color={circle.color} />
        ))}
      </CirclesContainer>
    </Container>
  );
};
