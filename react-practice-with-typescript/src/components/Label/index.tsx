import { Component } from 'react';
import styled from '@emotion/styled';

const Container = styled.span`
  font-size: 18px;
  margin: 15px;
`;

interface Props {
  readonly data: number;
}

// export const Label = (props: Props) => {
//     return <Container>{props.data}</Container>
// };

// // destructuring assignment
// export const Label = ({ data }: Props) => {
//   return <Container>{data}</Container>
// };

export class Label extends Component<Props> {
  render() {
    const { data } = this.props;
    return <Container>{data}</Container>
  }
}