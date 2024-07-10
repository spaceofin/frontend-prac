import styled from "styled-components";
import { useState, useReducer, ChangeEvent, SVGProps } from "react";
import { ReactComponent as Dog1 } from "assets/icons/dog1.svg";
import { ReactComponent as Dog2 } from "assets/icons/dog2.svg";
import { ReactComponent as Dog3 } from "assets/icons/dog3.svg";
import { ReactComponent as Dog4 } from "assets/icons/dog4.svg";
import { ReactComponent as Dog5 } from "assets/icons/dog5.svg";

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

const DogsSquaresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 120px);
  width: inherit;
  margin: 5px;
`;

// const Square = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: ${(props) => props.color};
//   margin: 10px;
//   border-radius: 20px;
// `;

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

type DogType = { id: number; number: number };

const DogsSquares_ACTION = {
  ADD: "addDog" as const,
  DELETE: "deleteDog" as const,
};

const DogsSquaresActionCreator = {
  addDog: (id: number, number: number) => ({
    type: DogsSquares_ACTION.ADD,
    payload: { id: id, number: number },
  }),
  deleteDog: (id: number) => ({
    type: DogsSquares_ACTION.DELETE,
    payload: { id: id },
  }),
};

type DogsSquaresActionType =
  | ReturnType<typeof DogsSquaresActionCreator.addDog>
  | ReturnType<typeof DogsSquaresActionCreator.deleteDog>;

const DogsSquaresReducer = (
  state: Array<DogType>,
  action: DogsSquaresActionType
) => {
  switch (action.type) {
    case DogsSquares_ACTION.ADD:
      return [
        ...state,
        { id: action.payload.id, number: action.payload.number },
      ];
    case DogsSquares_ACTION.DELETE:
      return state.filter((dog) => dog.id !== action.payload.id);
    default:
      return state;
  }
};

const initialDogsSquares: Array<DogType> = [
  { id: 1, number: 1 },
  { id: 2, number: 2 },
];

type DogsMap = {
  [key: number]: React.FC<SVGProps<SVGSVGElement>>;
};

const dogsMap: DogsMap = {
  1: Dog1,
  2: Dog2,
  3: Dog3,
  4: Dog4,
  5: Dog5,
};

export const DogsSquares = () => {
  const [state, dispatch] = useReducer<
    React.Reducer<Array<DogType>, DogsSquaresActionType>
  >(DogsSquaresReducer, initialDogsSquares);
  const [selectedDog, setSelectedDog] = useState<number>(1);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDog(Number(e.target.value));
  };

  const addDog = (number: number = 1) => {
    if (state.length === 12) {
      alert("The Square Board is full!");
      return;
    }

    dispatch(DogsSquaresActionCreator.addDog(state.length + 1, number));
    console.log(state.length);
  };

  const deleteDog = (id: number = state.length) => {
    if (id === 0) {
      alert("The Square Board is empty!");
      return;
    }
    console.log(`delete target square id: ${id}`);
    dispatch(DogsSquaresActionCreator.deleteDog(id));
  };

  console.log("state", state);

  const dogOptions = [
    { value: 1, label: "Dog1" },
    { value: 2, label: "Dog2" },
    { value: 3, label: "Dog3" },
    { value: 4, label: "Dog4" },
    { value: 5, label: "Dog5" },
  ];

  return (
    <Container>
      DogsSquares
      <SlimText>(click on the circle to delete it)</SlimText>
      <InputContainer>
        <StyledSelect
          id="dogSelect"
          value={selectedDog}
          onChange={handleChange}
        >
          {dogOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <StyledButton color="#C6DBBB" onClick={() => addDog(selectedDog)}>
          CREATE
        </StyledButton>
        <StyledButton color="#DBB8AA" onClick={() => deleteDog()}>
          DELETE
        </StyledButton>
      </InputContainer>
      <DogsSquaresContainer>
        {state.map((dog) => {
          const Dog = dogsMap[dog.number];
          return <Dog key={dog.id} onClick={() => deleteDog(dog.id)} />;
        })}
      </DogsSquaresContainer>
    </Container>
  );
};
