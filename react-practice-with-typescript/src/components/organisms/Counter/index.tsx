import styled from '@emotion/styled';

import { Button } from 'components/atoms/Button';
import { Count } from 'components/atoms/Count';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Counter = () => {
  return (
    <Container>
      <Button label="-" />
      <Count value={0} />
      <Button label="+" />
    </Container>
  );
};
