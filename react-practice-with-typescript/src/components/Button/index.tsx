import { Component } from 'react';
import styled from '@emotion/styled';

const Container = styled.button`
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

interface Props {
  readonly label: string;
  readonly onClick: () => void;
}

// export const Button = (props: Props) => {
//   return <Container onClick={props.onClick}>{props.label}</Container>;
// };

// // destructuring assignment
// export const Button = ({ label, onClick }: Props) => {
//   return <Container onClick={onClick}>{label}</Container>;
// };

export class Button extends Component<Props> {
  render() {
    const { label, onClick } = this.props;
    return <Container onClick={onClick}>{label}</Container>;
  }
}