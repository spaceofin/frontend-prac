import styled from "@emotion/styled";

interface ContainerProps {
  readonly color: string;
}

const Container = styled.button<ContainerProps>`
  border: 0;
  color: #ffffff;
  background-color: ${(props) => props.color};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.color};
    opacity: 0.85;
  }

  &:active {
    box-shadow:
      inset 5px 5px 15px rgba(0, 0, 0, 0.1),
      inset -5px -5px 15px rgba(0, 0, 0, 0.1);
  }
`;

interface Props {
  readonly text: string;
  readonly color?: string;
  readonly onClick?: () => void;
}

export const Button = ({ text, color = "#aaaaaa", onClick }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {text}
    </Container>
  );
};
