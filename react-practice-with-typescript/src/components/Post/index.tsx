import styled from "@emotion/styled";

const Container = styled.div`
  width: 80vw;
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 7px 7px 2px #14678c;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Body = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

interface Props {
  readonly title: string;
  readonly body: string;
}

export const Post = ({ title, body }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
};
