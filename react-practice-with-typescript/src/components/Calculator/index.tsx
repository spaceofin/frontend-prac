import React, { useReducer } from "react";
import styled from "styled-components";

interface State {
  currentValue: string;
  previousValue: string;
  operator: string | null;
}

type Action =
  | { type: "BLANK" }
  | { type: "ADD_DIGIT"; payload: string }
  | { type: "CHOOSE_OPERATOR"; payload: string }
  | { type: "CLEAR" }
  | { type: "DELETE_DIGIT" }
  | { type: "CLEAR_ENTRY" }
  | { type: "EVALUATE" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_DIGIT":
      return {
        ...state,
        currentValue:
          state.currentValue === "0"
            ? action.payload
            : state.currentValue + action.payload,
      };
    case "CHOOSE_OPERATOR":
      if (state.currentValue === "") return state;
      if (state.previousValue !== "") {
        const evaluation = evaluate(state);
        return {
          ...state,
          previousValue: evaluation,
          currentValue: "",
          operator: action.payload,
        };
      }
      return {
        ...state,
        operator: action.payload,
        previousValue: state.currentValue,
        currentValue: "",
      };
    case "CLEAR":
      return {
        currentValue: "0",
        previousValue: "",
        operator: null,
      };
    case "DELETE_DIGIT":
      return {
        ...state,
        currentValue: state.currentValue.slice(0, -1) || "",
      };
    case "CLEAR_ENTRY":
      if (state.currentValue === "0") {
        return { ...state, currentValue: state.currentValue };
      }
      return {
        ...state,
        currentValue: "",
      };
    case "EVALUATE":
      if (
        state.operator == null ||
        state.currentValue === "" ||
        state.previousValue === ""
      ) {
        return state;
      }
      return {
        ...state,
        previousValue: "",
        operator: null,
        currentValue: evaluate(state),
      };
    case "BLANK":
      return state;
    default:
      return state;
  }
};

const evaluate = ({ currentValue, previousValue, operator }: State): string => {
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = 0;
  switch (operator) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      return "";
  }
  return computation.toString();
};

const initialState: State = {
  currentValue: "0",
  previousValue: "",
  operator: null,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin: 20px;
  padding: 15px;
  border-radius: 10px;
  border: 5px solid #1b4ec7;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 82%;
  height: 40px;
  background-color: royalblue;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 24px;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

// type ButtonType = { isOperator?: boolean; isEqualSign?: boolean };

const Button = styled.button<{ isOperator?: boolean; isEqualSign?: boolean }>`
  // background-color: ${(props) => (props.isOperator ? "#7CACFF" : "#e5e5e5")};
  background-color: ${(props) => {
    if (props.isOperator) {
      return "#7CACFF";
    } else if (props.isEqualSign) {
      return "#BDF23A";
    } else return "#e9e9e9";
  }};
  color: ${(props) => (props.isOperator ? "#ffffff" : "black")};
  border: none;
  padding: 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100px;

  &:hover {
    // background-color: ${(props) => (props.isOperator ? "#ec971f" : "#ccc")};
    background-color: ${(props) => {
      if (props.isOperator) {
        return "#ec971f";
      } else if (props.isEqualSign) {
        return "#FF81AF";
      } else return "#cccccc";
    }};
  }
`;

export const Calculator: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <Display>
        <div>
          {state.previousValue} {state.operator} {state.currentValue}
        </div>
      </Display>
      <ButtonGrid>
        <Button onClick={() => dispatch({ type: "CLEAR" })}>AC</Button>
        <Button onClick={() => dispatch({ type: "CLEAR_ENTRY" })}>CE</Button>
        <Button onClick={() => dispatch({ type: "DELETE_DIGIT" })}>DEL</Button>
        {/* <Button onClick={() => dispatch({ type: "BLANK" })}></Button> */}
        <Button
          isOperator
          onClick={() => dispatch({ type: "CHOOSE_OPERATOR", payload: "/" })}>
          /
        </Button>
        <Button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "7" })}>
          7
        </Button>
        <Button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "8" })}>
          8
        </Button>
        <Button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "9" })}>
          9
        </Button>
        <Button
          isOperator
          onClick={() => dispatch({ type: "CHOOSE_OPERATOR", payload: "*" })}>
          *
        </Button>
        <Button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "4" })}>
          4
        </Button>
        <Button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "5" })}>
          5
        </Button>
        <Button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "6" })}>
          6
        </Button>
        <Button
          isOperator
          onClick={() => dispatch({ type: "CHOOSE_OPERATOR", payload: "-" })}>
          -
        </Button>
        <Button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "1" })}>
          1
        </Button>
        <Button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "2" })}>
          2
        </Button>
        <Button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "3" })}>
          3
        </Button>
        <Button
          isOperator
          onClick={() => dispatch({ type: "CHOOSE_OPERATOR", payload: "+" })}>
          +
        </Button>
        <Button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "0" })}>
          0
        </Button>
        <Button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "00" })}>
          00
        </Button>
        <Button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "." })}>
          .
        </Button>
        <Button isEqualSign onClick={() => dispatch({ type: "EVALUATE" })}>
          =
        </Button>
      </ButtonGrid>
    </Container>
  );
};
