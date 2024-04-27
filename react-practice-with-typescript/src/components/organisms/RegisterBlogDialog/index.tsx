import styled from '@emotion/styled';

import { DialogTitle } from 'components/atoms/DialogTitle';
import { Input } from 'components/molecules/Input';
import { Button } from 'components/atoms/Button';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 /75%);
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 12px;
`;

export const RegisterBlogDialog = () => {
  return (
    <Container>
      <Background />
      <Contents>
        <DialogTitle title="New Post" />
        <Input label="Title:" value="" onChange={(text) => console.log(text)} />
        <Input label="Body:" value="" onChange={(text) => console.log(text)} />
        <Actions>
          <Button label="Create" />
          <Button label="Close" color="#304FFE" />
        </Actions>
      </Contents>
    </Container>
  );
};
