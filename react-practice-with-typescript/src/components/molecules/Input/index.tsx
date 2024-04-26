import styled from '@emotion/styled';

import { Label } from 'components/atoms/Label';
import { InputText } from 'components/atoms/InputText';


const Container = styled.div`
  font-size: 1.2rem;
`;

const InputGroup = styled.div`
`;

interface Props {
  readonly label: string;
  readonly value: string;
  readonly onChange: (text: string) => void;
}

export const Input = ({ label, value, onChange }: Props) => {

  return (
    <Container>
      <InputGroup>
        <Label text={label} />
        <InputText value={value} onChange={onChange} />
      </InputGroup>
    </Container>
  )
}