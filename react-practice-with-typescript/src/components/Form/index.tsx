import styled from "@emotion/styled";
import { Button } from "components/Button";
import { useState } from "react";

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
  background-color: rgb(0 0 0 / 80%);
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50vw;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
  width: 45vw;
`;

const Label = styled.div`
  font-size: 1.1rem;
  margin-bottom: 3px;
`;

const Input = styled.input`
  font-size: 1.2rem;
  width: 100%;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

interface Props {
  readonly onClose: () => void;
}

export const Form = ({ onClose }: Props) => {
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");

  const registerPost = () => {
    if (titleValue === '' || bodyValue === '') return;

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        userId: 0,
        titleValue,
        bodyValue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json, 'has been registered');
        if (typeof onClose === 'function') onClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <Background />
      <Contents>
        <Title>Create a Post</Title>
        <InputGroup>
          <Label>Title: </Label>
          <Input
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Body: </Label>
          <Input
            value={bodyValue}
            onChange={(e) => setBodyValue(e.target.value)}
          />
        </InputGroup>
        <Actions>
          <Button
            text="Create"
            color="#08BDA0"
            onClick={registerPost}
          />
          <Button text="Close" onClick={onClose} />
        </Actions>
      </Contents>
    </Container>
  );
};
